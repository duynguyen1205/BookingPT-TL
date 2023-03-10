import React from "react";
import { Link } from "react-router-dom";
import Image from "../../components/user/images/main_header.png";
import style from "../../layouts/index.module.css";
const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4 className={style.h4_4}>#100DaysOfWorkout</h4>
					<h1 className={style.h1_1}>Join The Legends of the Fitness World</h1>
					<p>
						Aute nisi adipisicing sunt adipisicing incididunt veniam fugiat
						labore eiusmod nisi quis ad nulla exercitation. Aute nisi
						adipisicing sunt adipisicing incididunt veniam fugiat labore eiusmod
						nisi quis ad nulla exercitation.
					</p>
					<Link to="/user/plans" className={style.btn }>
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
