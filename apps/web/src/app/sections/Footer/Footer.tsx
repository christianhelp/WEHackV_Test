import React from "react";
import "./Footer.css";
import Button from "@/components/Button/Button";

function Footer() {
	return (
		<div className="footer-container flex h-auto w-full flex-col gap-y-10 px-10 py-10 pb-20 md:flex-row md:items-start md:justify-start md:gap-x-3 md:px-20 lg:flex-row lg:items-start lg:justify-start lg:gap-x-5 lg:px-20">
			<div className="main-container flex w-full flex-col flex-wrap gap-y-5 md:content-start md:items-start lg:content-start lg:items-start">
				<img
					className="wehack-logo h-auto max-w-40 sm:max-w-64 md:max-w-72 lg:max-w-32"
					src={"/static/images/black wehack logo.png"}
					alt="wehack logo"
				></img>
				<div className="gap-x-0">
					<p className="about-text text-base font-medium text-[#FFE9D7]">
						Made with 💪🤍 by WEHack 2025
					</p>
					<p className="about-text text-base font-medium text-[#FFE9D7]">
						<a
							href="https://github.com/acmutsa/HackKit"
							target="_blank"
						>
							<u>Powered by HackKit</u>
						</a>
					</p>
				</div>
			</div>
			<div className="lg:items-ends flex flex-col gap-y-10 md:flex-row md:items-end md:gap-x-10 lg:-mr-10 lg:w-full lg:flex-row lg:gap-x-10 xl:-mr-72">
				<div className="flex flex-row gap-x-20 md:gap-x-10">
					<div className="navigation-container flex flex-col flex-wrap gap-y-1">
						<h1 className="about-title text-center text-xl font-medium text-[#FFE9D7]">
							Navigation
						</h1>
						<a className="nav-link" href="#home">
							Home
						</a>
						<a className="nav-link" href="#about-wehack">
							About
						</a>
						<a className="nav-link" href="#FAQ">
							FAQ
						</a>
						<a
							className="nav-link"
							href="http://hackp.ac/coc"
							target="_blank"
						>
							MLH Conduct
						</a>
					</div>
					<div className="contact-container flex flex-col flex-wrap gap-y-1 md:content-start">
						<h1 className="about-title text-left text-xl font-medium text-[#FFE9D7]">
							Contact Us
						</h1>
						<a
							className="nav-link"
							href="mailto:wehackutd@gmail.com"
							target="_blank"
						>
							Email
						</a>
						<a
							className="nav-link"
							href="https://www.instagram.com/wehackutd/"
							target="_blank"
						>
							Instagram
						</a>
						<a
							className="nav-link"
							href="https://www.linkedin.com/company/wehackutd-2020/"
							target="_blank"
						>
							LinkedIn
						</a>
						<a
							className="nav-link"
							href="https://www.facebook.com/WEHackUTD/"
							target="_blank"
						>
							Facebook
						</a>
						<a
							className="nav-link"
							href="https://x.com/wehackutd"
							target="_blank"
						>
							X
						</a>
					</div>
				</div>
				<div className="contact-container flex flex-col flex-wrap gap-y-1">
					<h1 className="about-title text-left text-xl font-medium text-[#FFE9D7]">
						Other Hackathons
					</h1>
					<a
						className="nav-link"
						href="https://hackutd.co/"
						target="_blank"
					>
						HackUTD
					</a>
					<a
						className="nav-link"
						href="https://hacktx.com/"
						target="_blank"
					>
						HackTX
					</a>
					<a
						className="nav-link"
						href="https://hackuta.org/"
						target="_blank"
					>
						HackUTA
					</a>
					<a
						className="nav-link"
						href="https://rowdyhacks.org/"
						target="_blank"
					>
						RowdyHacks
					</a>
					<a
						className="nav-link"
						href="https://cqhacks.org/"
						target="_blank"
					>
						CodeQuantum
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
