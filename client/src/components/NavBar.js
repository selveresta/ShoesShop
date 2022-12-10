import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
const NavBar = observer(() => {
	const { user } = useContext(Context);
	const history = useNavigate();

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		localStorage.setItem("token", "");
		console.log(user);
	};

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
					ShoesShop
				</NavLink>
				{user._isAuth ? (
					<Nav className='ml-auto' style={{ color: "white" }}>
						{user.Role === "ADMIN" ? (
							<Button className='m-2' variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>
								Admin Panel
							</Button>
						) : (
							<div></div>
						)}
						<Button className='m-2' variant={"outline-light"} onClick={() => history(BASKET_ROUTE)}>
							{" "}
							Basket{" "}
						</Button>
						<Button variant={"outline-light"} onClick={() => logOut()} className='m-2'>
							Exit
						</Button>
					</Nav>
				) : (
					<Nav className='ml-auto' style={{ color: "white" }}>
						<Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>
							Authorized
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
