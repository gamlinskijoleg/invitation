import "./App.css";
import First from "./components/first";
import TextComponent from "./components/textComponent";
import Calendar from "./components/calendar";
import Map from "./components/map";
import Buttons from "./components/buttons";
import Marquee from "./components/marquee";

function App() {
	return (
		<div className="App">
			<First />
			<TextComponent />
			<Calendar />
			<Map />
			<Buttons />
			<Marquee/>
		</div>
	);
}

export default App;
