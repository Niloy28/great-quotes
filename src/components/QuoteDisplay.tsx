import React from "react";
import Quote from "../types/Quote";
import Container from "./UI/Container";
import Heading from "./UI/Heading";

const QuoteDisplay: React.FC<Quote> = (props) => {
	return (
		<Container className="border-lime-100 border-2 my-10 flex flex-col">
			<Heading className="pl-4 md:pl-8 italic self-start justify-self-start">
				{props.quote}
			</Heading>
			<div className="self-end justify-self-end text-lg md:text-2xl italic pr-4 md:pr-8">
				~{props.author}
			</div>
		</Container>
	);
};

export default QuoteDisplay;
