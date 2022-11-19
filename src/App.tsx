import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<>
			<Header />
			<main className="w-full">
				<Outlet />
			</main>
		</>
	);
}

export default App;
