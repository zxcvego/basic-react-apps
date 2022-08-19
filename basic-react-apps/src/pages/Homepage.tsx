import "./Homepage.css";
import logo from "../logo.svg";
import HomeMenu from "../components/HomeMenu";

export default function Homepage() {
	return (
		<>
			<header>
				<h1>Basic React.js Applications</h1>
			</header>
			<img src={logo} alt="logo" className="app-logo" />
			<HomeMenu />
		</>
	);
}
