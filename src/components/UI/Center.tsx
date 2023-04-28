import React from "react";

interface CenterProps {
	children: React.ReactNode;
	className?: string;
}

const Center: React.FC<CenterProps> = (props) => {
	return (
		<div
			className={`absolute flex justify-center items-center left-0 right-0 top-0 bottom-0 m-auto overflow-auto h-min ${props.className}`}
		>
			{props.children}
		</div>
	);
};

export default Center;
