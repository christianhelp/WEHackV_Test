import React from "react";
import "./Question.css";
function Question({ question, answer }: { question: String; answer: String }) {
	return (
		<div className="question w-full lg:w-10/12">
			<details>
				<summary className="flex w-full list-none flex-wrap justify-between bg-[#FFE9D7] p-2 text-xs text-[#4A3628] md:text-base lg:text-base">
					{question}
				</summary>
				<div className="panel text-sm lg:text-base">{answer}</div>
			</details>
		</div>
	);
}

export default Question;
