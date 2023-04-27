import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then((data) => {
				user.setUser(data);
				user.setIsAuth(true);
				user.setRole(data.role);
				user.setId(data.id);
			})
			.finally(() => setLoading(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {

		return <Spinner animation={"grow"} />;
	}
	return (
		<BrowserRouter>
			<NavBar></NavBar>
			<AppRouter></AppRouter>
		</BrowserRouter>
	);
});

export default App;
