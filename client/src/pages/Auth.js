import React, { useContext, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";

export const Auth = () => {
	const { user } = useContext(Context);
	const location = useLocation();
	const navigate = useNavigate();
	const isLogin = location.pathname === LOGIN_ROUTE;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}

			user.setUser(data);
			user.setIsAuth(true);
			navigate(SHOP_ROUTE);
		} catch (e) {
			alert(e.response.data.message);
		}
	};

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? "Authorized" : "Registration"}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='E-mail'
						className='mt-4'></Form.Control>
					<Form.Control
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder='Password'
						className='mt-4'
						type='password'></Form.Control>
					<Form.Group className='d-flex justify-content-between mt-4 pl-3 pr-3'>
						{isLogin ? (
							<div>
								No account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
							</div>
						) : (
							<div>
								Have account? <NavLink to={LOGIN_ROUTE}>Enter!</NavLink>
							</div>
						)}

						<Button onClick={click} variant={"outline-success"}>
							{" "}
							{isLogin ? "Enter" : "Register"}{" "}
						</Button>
					</Form.Group>
				</Form>
			</Card>
		</Container>
	);
};
