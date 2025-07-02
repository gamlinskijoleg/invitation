import { ReactComponent as MyIcon } from "./assets/blackCup.svg";
import weAll from "./assets/bottomPhoto.jpg";

const castList = [
	{ role: "Луція", name: "Проць Надія" },
	{ role: "Франціска", name: "Лань Марія" },
	{ role: "Гречек", name: "Мурський Валентин" },
	{ role: "Фотограф", name: "Кравченко Роман" },
	{ role: "Вчитель", name: "Пістун Віталій" },
	{ role: "Улям", name: "Ніколів Ігор" },
	{ role: "Штайнгауз", name: "Єлфімов Дем’ян" },
	{ role: "Отто Нікодим", name: "Лозинський Матвій" },
	{ role: "Офіціант (кафе «Рома»)", name: "Кравченко Роман" },
	{ role: "Офіціантка («Шкотська»)", name: "Лань Марія" },
	{ role: "Власник кав’ярні", name: "Пістун Віталій" },
	{ role: "Вайгль", name: "Скіп Матвій" },
	{ role: "Шибальський", name: "Костюченко Веніамін" },
	{ role: "Молодий Банах", name: "Гамлінський Олег" },
	{ role: "Дорослий Банах", name: "Рісний Назарій" },
	{ role: "Катажина", name: "Свистун Діана" },
	{ role: "Адам", name: "Худий Данило" },
	{ role: "Мазур", name: "Солоткий Влад" },
	{ role: "Учні", name: "Скіп Матвій, Андрєєва Таїсія, Гамлінська Софія" },
	{ role: "Автор", name: "Опенченко Анна" },
	{ role: "Хореограф", name: "Лань Марія" },
	{ role: "Керівник проекту", name: "Боценюк Марʼяна Юріівна, Бай Вікторія, Овчаренко Юліана" },
];

export default function Marquee() {
	return (
		<div id="math">
			<marquee
				style={{
					backgroundColor: "#fff2",
					border: "1px solid #000",
					color: "#000",
					padding: "20px 0",
					fontSize: "18px",
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
					textAlign: "center",
				}}
			>
				{castList.map((item, index) => (
					<span key={index} style={{ marginRight: "20px" }}>
						{item.role} - {item.name} <MyIcon height={20} width={20} />
					</span>
				))}
			</marquee>
			<div className="CTRNRR">
				<div className="vlasniku">Власники кав’ярні: </div>
				<div>КН-22</div>
				<div>КІ-11</div>
				<div>ДЗ-11</div>
			</div>
			<img src={weAll} id="kniga" />
		</div>
	);
}
