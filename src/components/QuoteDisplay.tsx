import React from "react";
import Quote from "../types/Quote";
import Container from "./UI/Container";
import Heading from "./UI/Heading";

const QuoteDisplay: React.FC<Quote> = (props) => {
	return (
		<Container className="border-lime-100 border-2 my-10">
			<Heading className="italic -translate-x-1/4">{props.title}</Heading>
			<div className="translate-x-1/4 md:translate-x-1/3 lg:translate-x-2/4 text-lg md:text-2xl italic">
				~{props.quote}
			</div>
		</Container>
	);
};

export default QuoteDisplay;
