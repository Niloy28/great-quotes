import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<header>
			<nav className={styles.NavBar}>
				<h2 className="">Great Quotes</h2>
				<ul className={styles.NavBarList}>
					<li>
						<NavLink to="/quotes">All Quotes</NavLink>
					</li>

					<li>
						<NavLink to="/quotes/new-quote">New Quote</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
