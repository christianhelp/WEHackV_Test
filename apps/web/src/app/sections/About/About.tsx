import React from "react";
import "./About.css";
import Stats from "@/components/Stats/Stats";

function About() {
	return (
		<section
			className="parent-container about-section bg-[#301814]"
			id="about-wehack"
		>
			{/* group 1 */}
			<div className="about-group md:flex-row: flex flex-col flex-wrap sm:flex-row lg:flex-row">
				<div className="child-container">
					<div className="paragraph-1 flex flex-col flex-wrap gap-y-5">
						<h1 className="about-title text-left text-4xl font-medium text-[#FFE9D7] lg:text-5xl">
							Dallas' Largest Inclusive Hackathon
						</h1>
						<p className="about-text text-left text-lg font-medium text-[#FFE9D7] lg:text-xl">
							The purpose of WEHack is to create an inclusive and
							encouraging environment for women, nonbinary
							genders, and all underrepresented groups in
							technology so that they can gain the skills and
							confidence to excel in future hackathons and the
							tech world.
						</p>
					</div>
				</div>
				<div className="child-container">
					<img
						className="about-image max-w-76 h-auto sm:mt-5 sm:max-w-full md:max-w-96 lg:max-w-full"
						src={"/static/images/IMG_0165.jpg"}
						alt="a group of people at a sponsor fair"
						loading="eager"
					></img>
				</div>
			</div>

			{/* group 2 */}
			<div className="about-group md:flex-row: flex flex-col flex-wrap-reverse pt-32 sm:flex-row sm:pt-36 md:pt-48 lg:flex-row lg:pt-72">
				<div className="child-container">
					<img
						className="about-image max-w-76 h-auto sm:mt-5 sm:max-w-full md:max-w-96 lg:max-w-full"
						src={"/static/images/IMG_1752.jpg"}
						alt="two girls smiling at the camera, holding a WEHack tote bag"
						loading="eager"
					></img>
				</div>
				<div className="child-container">
					<div className="paragraph-2 flex flex-col flex-wrap gap-y-5">
						<p className="about-text text-left text-lg font-medium text-[#FFE9D7] lg:text-xl">
							We aim to encourage more underrepresented
							individuals to harness their skills by creating
							software or hardware projects of their own. Whether
							it's networking with sponsors and hackers, gaining
							development and workshop experience, or competing
							against other teams for challenges and prizes,
							WEHack offers participants an opportunity to end the
							weekend with unique takeaways.
						</p>
					</div>
				</div>
			</div>

			{/* stats */}
			<Stats />
		</section>
	);
}

export default About;
