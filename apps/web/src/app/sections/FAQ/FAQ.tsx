import React from "react";
import "./FAQ.css";
import Question from "@/components/Question/Question";

function FAQ() {
	return (
		<div
			className="FAQ-container flex h-auto w-full flex-col flex-wrap items-center justify-center bg-[#301814] p-6 pb-40 lg:pb-60"
			id="FAQ"
		>
			<h1 className="FAQ-title md:pb-15 pb-7 text-center text-4xl text-[#CCBA97] md:pb-20 md:text-5xl lg:text-5xl">
				Frequently Asked Questions
			</h1>

			<div className="drop-down-container mt-10 gap-5 lg:mt-0 lg:gap-0 lg:px-14">
				<div className="column-right w-full lg:w-1/2">
					<div className="questions-container flex flex-wrap items-center justify-center gap-5">
						{dataColOne.map((FAQ, index) => (
							<div
								className="flex w-full flex-wrap items-center justify-center"
								key={index}
							>
								<Question
									question={FAQ.question}
									answer={FAQ.answer}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="column-left w-full lg:w-1/2">
					<div className="questions-container flex flex-wrap items-center justify-center gap-5">
						{dataColTwo.map((FAQ, index) => (
							<div
								className="flex w-full flex-wrap items-center justify-center"
								key={index}
							>
								<Question
									question={FAQ.question}
									answer={FAQ.answer}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const dataColOne = [
	{
		question: "Who can attend?",
		answer: "Anyone can sign up to participate as a hacker at WEHack. However, keep in mind that a lot of the hackathon content will revolve around women and non-binary experiences to reflect our mission of uniting and empowering women and non-binary individuals in STEM. If you do not identify as female or non-binary but consider yourself an ally of our cause, we would love to have you as a mentor or volunteer!",
	},

	{
		question: "When and where is WEHack?",
		answer: "WEHack 2025 will be held in person in the Engineering and Computer Science West (ECSW) building at the University of Texas at Dallas. WEHack 2025 dates will be released soon!",
	},

	{
		question: "Do I need to have coding experience?",
		answer: "No! WEHack is open to all majors and experience levels and would be the perfect place to work on your first project. Resources such as mentors and workshops are available to support beginner hackers.",
	},

	{
		question: "How do I apply?",
		answer: "Hackers can register via the link at the top of the page. Mentor and volunteer applications will be posted soon! Registration for WEHack 2025 will be released in December 2024.",
	},

	{
		question: "Can I participate if I am in high school?",
		answer: "Unfortunately, we are not able to accommodate anyone below the age of 18 at this time.",
	},

	{
		question: "Can I work on my project before WEHack?",
		answer: "All projects must be started at WEHack, but you are free to brainstorm project ideas prior to the hackathon. Projects can range from solving personal or social challenges to solving hackathon or sponsor challenges.",
	},
];

const dataColTwo = [
	{
		question: "Does it cost money to participate?",
		answer: "WEHack 2024 is completely free! This includes food and swag, which will be handed out to attendees during the hackathon.",
	},

	{
		question: "How do teams work at WEHack?",
		answer: "Teams at WEHack can have up to 4 members. If you do not have a team, don’t worry! You can either work individually or form teams the day of the hackathon by meeting fellow hackers on the Discord or during team building events.",
	},

	{
		question: "When does registration close?",
		answer: "Registration deadlines will be announced soon.",
	},

	{
		question: "Will hardware be available?",
		answer: "WEHack will be providing hardware, and we encourage you to use online hardware simulators.",
	},

	{
		question: "What are the meal options offered?",
		answer: "We will provide food for meat, vegetarian, gluten-free, and halal diets.",
	},

	{
		question: "Can I sleep at WEHack?",
		answer: "You are welcome to sleep at WEHack! Make sure to bring pillows, blankets, chargers, and other necessities if you are planning to stay the night.",
	},
];

export default FAQ;
