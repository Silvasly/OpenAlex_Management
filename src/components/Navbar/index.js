// navbar/Index.js
import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
	imgLogo,
} from "./elements";

const Navbar = ({ onSignIn }) => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/" >
						<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/101662971397b544cdae72d3172584d8a166cc99797d6ddfeeb8b6615f78e637?"
						className="Logo"
					/>
					</NavLink>
					
					<NavLink to="/about" >
						About
					</NavLink>
					<NavLink to="/manages" activeStyle>
						Manage
					</NavLink>
					<NavLink to="/settings" activeStyle>
						Settings
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/login" onClick={onSignIn}>
						Sign In
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
