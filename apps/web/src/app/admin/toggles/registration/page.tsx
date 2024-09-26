import { RegistrationToggles } from "@/components/admin/toggles/RegistrationSettings";
import { Redis } from "@upstash/redis";
import { parseRedisBoolean } from "@/lib/utils/server/redis";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function Page() {
	const pipe = redis.pipeline();
	pipe.get("config:registration:registrationEnabled");
	pipe.get("config:registration:secretRegistrationEnabled");
	// const result = await pipe.exec();

	const [
		defaultRegistrationEnabled,
		defaultSecretRegistrationEnabled,
		defaultRSVPsEnabled,
	]: (string | null)[] = await redis.mget(
		"config:registration:registrationEnabled",
		"config:registration:secretRegistrationEnabled",
		"config:registration:allowRSVPs",
	);

	return (
		<div>
			<div className="flex items-center justify-start pb-10">
				<h2 className="text-3xl font-bold tracking-tight">
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
