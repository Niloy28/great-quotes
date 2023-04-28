import React from "react";
import Center from "../components/UI/Center";
import Container from "../components/UI/Container";

interface NotFoundProps {
	statusCode: string;
	statusText: string;
}

const NotFound: React.FC<NotFoundProps> = (props) => {
	return (
		<Center className="w-3/4 md:w-1/2 xl:w-1/4 border-2">
			<Container className="flex justify-around items-center p-4 m-4">
				<div className="text-4xl font-bold">{props.statusCode}</div>
				<span className="inline-block w-0.5 h-10 bg-slate-100" />
				<div className="text-xl font-semibold">{props.statusText}</div>
			</Container>
		</Center>
	);
};

export default NotFound;
