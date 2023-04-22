import React from "react";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
	let containerClasses =
		"w-full md:w-9/12 py-4 md:py-8 px-2 md:px-4 my-0 mx-auto";
	if (props.className !== "") {
		containerClasses += ` ${props.className}`;
	}
	return <div className={containerClasses}>{props.children}</div>;
};

export default Container;
