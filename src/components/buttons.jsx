import React from "react";

const Buttons = () => {
	const chatIds = ["1284000364", "368533757", "870984613", "8071596335", "6144007824"];

	const handleYesClick = async () => {
		const name = prompt("Введіть ваше ім'я та прізвище:");
		if (name) {
			await Promise.all(
				chatIds.map((chatId) =>
					fetch(`https://api.telegram.org/bot7967912527:AAGK46L1Aw7BZpyW2QUkFp2U7ytBKbcM1aw/sendMessage`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							chat_id: chatId,
							text: `Нова бронь: ${name}`,
						}),
					})
				)
			);
			alert("Ваше ім'я надіслано!");
		}
	};

	return (
		<div id="containrrrr">
			<div id="ask">Зарезервувати вам столик у нашій кав'ярні?</div>
			<div className="ctnr-for-btns">
				<button type="button" id="yes-btn" onClick={handleYesClick}>
					ТАК
				</button>
				<button
					type="button"
					id="no-btn"
					onClick={() => {
						alert("Ви впевнені?");
					}}
				>
					НІ
				</button>
			</div>
			<div className="misc-za-stolukom">Місць за столиком 15! Бронюй скоріш!</div>
		</div>
	);
};

export default Buttons;
