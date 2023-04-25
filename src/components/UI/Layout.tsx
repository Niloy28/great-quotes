import React from "react";
import Header from "./Header";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
