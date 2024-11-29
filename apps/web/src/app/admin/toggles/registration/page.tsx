import { RegistrationToggles } from "@/components/admin/toggles/RegistrationSettings";
import { Redis } from "@upstash/redis";
import { parseRedisBoolean } from "@/lib/utils/server/redis";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function Page() {
	const pipe = redis.pipeline();
	pipe.get(`${process.env.HK_ENV}_config:registration:registrationEnabled`);
	pipe.get(`${process.env.HK_ENV}_config:registration:secretRegistrationEnabled`);
	// const result = await pipe.exec();

	const [
		defaultRegistrationEnabled,
		defaultSecretRegistrationEnabled,
		defaultRSVPsEnabled,
	]: (string | null)[] = await redis.mget(
		`${process.env.HK_ENV}_config:registration:registrationEnabled`,
		`${process.env.HK_ENV}_config:registration:secretRegistrationEnabled`,
		`${process.env.HK_ENV}_config:registration:allowRSVPs`,
	);

	return (
		<div>
			<div className="flex items-center justify-start pb-10">
				<h2 className="text-3xl font-bold tracking-wide">
					Registration & Sign-in
				</h2>
			</div>
			<RegistrationToggles
				defaultRegistrationEnabled={parseRedisBoolean(
					defaultRegistrationEnabled,
					true,
				)}
				defaultSecretRegistrationEnabled={parseRedisBoolean(
					defaultSecretRegistrationEnabled,
					false,
				)}
				defaultRSVPsEnabled={parseRedisBoolean(
					defaultRSVPsEnabled,
					true,
				)}
			/>
		</div>
	);
}

export const runtime = "edge";
