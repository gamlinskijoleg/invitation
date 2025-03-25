import React from "react";
import hart from "./assets/redcup.png";

const Calendar = () => {
	const month = "Квітень";
	const year = 2025;
	const daysInMonth = 30;

	const renderDaysOfWeek = () => {
		const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];
		return (
			<div className="calendar-header">
				{daysOfWeek.map((day) => (
					<div className="calendar-cell" key={day}>
						{day}
					</div>
				))}
			</div>
		);
	};

	const renderDays = () => {
		let days = [];
		let dayCounter = 1;
		const firstDayOfMonth = new Date(year, 3, 1).getDay();

		const adjustedFirstDay = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

		for (let i = 1; i < adjustedFirstDay; i++) {
			days.push(<div className="calendar-cell empty" key={`empty-${i}`} />);
		}

		for (let i = 0; i < daysInMonth; i++) {
			const day = dayCounter++;
			const isHeart = day === 2;

			days.push(
				<div className={`calendar-cell ${isHeart ? "heart-outline" : ""}`} key={day}>
					{isHeart ? (
						<div>
							<img src={hart} id="heart" /> {day}
						</div>
					) : (
						day
					)}
				</div>
			);
		}

		return <div className="calendar-body">{days}</div>;
	};

	return (
		<div className="calendar">
			<h2>{`${month} ${year}`}</h2>
			{renderDaysOfWeek()}
			{renderDays()}
		</div>
	);
};

export default Calendar;
