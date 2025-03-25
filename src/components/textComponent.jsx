import React from "react";

const TextComponent = () => {
	return (
		<div className="container">
			<div className="title-primary">Файні львівські студенти, паничі та кавалери!</div>
			<div className="event-announcement">готуйте свої капелюхи, метелики та підтяжки!</div>
			<div className="title-primary">І ви, панянки, не баріться,</div>
			<div className="description">у вишукане вбрання давнього Львова одягніться!</div>
			<div className="invitation">
				Завітайте у нашу кав’ярню та пориньте у життєву історію <span className="emphasized-text">ВЕЛИКОГО ГЕНІЯ</span>,
			</div>
			<div className="small-text">
				який не мав диплому, але <strong>став професором.</strong>
			</div>
			<div className="small">не склав іспити, але змінив математику за мармуровим столиком у колі однодумців!</div>
		</div>
	);
};

export default TextComponent;
