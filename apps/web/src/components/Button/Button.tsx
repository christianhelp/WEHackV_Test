import React from "react";
import "./Button.css";

function Button({ buttonText, link }: { buttonText: String; link: any }) {
	return (
		<a href={link} className="text-xl" target="_blank">
			<button className="primary-btn w-full bg-[#909634] px-5 py-3 text-[#FFE9D7]">
				{buttonText}
			</button>
		</a>
	);
}

export default Button;
