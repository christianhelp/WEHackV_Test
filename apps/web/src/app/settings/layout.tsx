import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import SettingsSection from "@/components/settings/SettingsSection";
import Navbar from "@/components/shared/Navbar";
import { Settings } from "lucide-react";
import ClientToast from "@/components/shared/ClientToast";
import { getUser } from "db/functions/user";
import DashLayout from "../dash/layout";
import NavbarNonDash from "@/components/shared/NavbarNonDash";

export default async function ({ children }: { children: ReactNode }) {
	const { userId } = await auth();
	const user = await currentUser();

	if (!user || !userId) {
		return redirect("/sign-in");
	}

	if ((await getUser(userId)) == undefined) {
		return redirect("/register");
	}

	return (
		<>
			<ClientToast />
			<NavbarNonDash title={"Settings"} />
			<div className="mx-auto md:grid max-w-5xl md:grid-cols-5 gap-x-3 pt-24 pb-24 flex-col items-center justify-center px-10">
				<div className="col-span-5 flex items-center">
					<div className="flex items-center pb-24">
						<div>
							<h2 className="flex items-center gap-x-2 text-3xl font-bold tracking-tight">
								<Settings />
								Settings
							</h2>
						</div>
					</div>
				</div>
				<div className="flex flex-row md:flex-col pb-5 gap-x-6 md:gap-y-6 md:pr-6">
					{/* <SettingsSection name="Settings" path="/settings" /> */}
					<SettingsSection name="Account" path="/settings/account" />
					<SettingsSection name="Profile" path="/settings/profile" />
				</div>
				<div className="col-span-4">{children}</div>
			</div>
		</>
	);
}
