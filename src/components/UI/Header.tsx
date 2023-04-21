import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const linkClasses = "p-2 md:p-4 hover:bg-green-500 active:bg-green-600";
	return (
		<header>
			<nav className="flex p-3 md:p-4 justify-between bg-green-400 text-base md:text-lg text-black">
				<h2 className="font-bold">Great Quotes</h2>
				<ul className="flex items-center justify-end list-none gap-4">
					<li>
						<NavLink className={linkClasses} to="/quotes">
							All Quotes
						</NavLink>
					</li>

					<li>
						<NavLink className={linkClasses} to="/quotes/new-quote">
							New Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
