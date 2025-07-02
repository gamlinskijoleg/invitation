import house from "./assets/house.png";
import map from "./assets/locationMap.png";

const Map = () => {
	const handleScrollToLocation = () => {
		const locationElement = document.getElementById("location");
		if (locationElement) {
			locationElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="ctn">
			<img className="house" src={house} alt="House" />
			<div className="ctnr">
				<div className="txt">Місце розташування кав'ярні:</div>
				<div className="help">М. Львів</div>
				<div className="help">О. Кульчицької, 2</div>

				<button className="old-magazine-btn" type="button" onClick={handleScrollToLocation}>
					ДИВИТИСЬ НА МАПІ
				</button>
				<div id="location">
					<img src={map} className="mapImage" />
				</div>
			</div>
		</div>
	);
};

export default Map;
