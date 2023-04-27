import React from "react";
import Center from "../components/UI/Center";
import Container from "../components/UI/Container";

const NotFound = () => {
	return (
		<Center className="w-3/4 md:w-1/2 lg:w-1/4 border-2">
			<Container className="flex justify-around items-center p-4 m-4">
				<div className="text-4xl font-bold">404</div>
				<span className="inline-block w-0.5 h-10 bg-slate-100" />
				<div className="text-xl font-semibold">Page Not Found</div>
			</Container>
		</Center>
	);
};

export default NotFound;
