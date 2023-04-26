import React from "react";
import Quote from "../types/Quote";
import Container from "./UI/Container";
import Heading from "./UI/Heading";

const QuoteDisplay: React.FC<Quote> = (props) => {
	return (
		<Container className="border-lime-100 border-2 my-10">
			<Heading className="italic -translate-x-1/4">{props.quote}</Heading>
			<div className="translate-x-2/3 md:translate-x-3/4 text-lg md:text-2xl italic">
				~{props.author}
			</div>
		</Container>
	);
};

export default QuoteDisplay;
