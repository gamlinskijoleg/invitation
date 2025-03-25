import picture from "./assets/weeeeeee.png";

function First() {
	return (
		<>
			<div className="invite-container">
				<div className="header">
					<div className="baba left-baba">13:00</div>
					<div className="college">
						Технологічний фаховий коледж
						<br /> НУ "Львівська політехніка"
					</div>
					<div className="baba right-baba"> Середа</div>
				</div>
				<h1 className="matematika">Математика</h1>
				<div className="details">
					<span>О. Кульчицької, 2</span>
					<span>Актова зала</span>
					<span>2 квітня 2025</span>
				</div>
				<div className="lara">
					<h2 className="z-prusmakom-kavu">З ПРИСМАКОМ КАВИ</h2>
					<p className="y-skotskij">У ШКОЦЬКІЙ КАВ'ЯРНІ</p>
				</div>
			</div>
			<img id={"main-image"} src={picture} />
		</>
	);
}

export default First;
