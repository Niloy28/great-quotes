import React from "react";
import Quote from "../types/Quote";
import Container from "./UI/Container";

const QuoteSummary: React.FC<Quote> = (props) => {
	return (
		<Container className="border-2 md:border-4 flex flex-col gap-2 justify-between my-2 md:my-4">
			<div className="flex justify-between">
				<div className="font-semibold text-lg md:text-xl">{props.title}</div>
				<div className="italic">
					{new Date(props.created_at).toLocaleDateString(undefined, {
						weekday: "short",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</div>
			</div>
			<p className="font-bold text-xl md:text-2xl italic p-2">{props.quote}</p>
		</Container>
	);
};

export default QuoteSummary;
