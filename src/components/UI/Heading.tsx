import React from "react";

interface HeadingProps {
	children: string;
	className?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
	return (
		<h1
			className={`text-center m-4 pb-4 md:pb-8 font-bold text-xl md:text-2xl ${props.className}`}
		>
			{props.children}
		</h1>
	);
};

export default Heading;
