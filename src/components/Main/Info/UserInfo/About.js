import style from './About.module.css'

const About = props => {
	const {
		avatar,
		userName,
		age,
		colorHand,
		colorFoodHair,
		colorBeard
	} = props.profile

	return (
		<div className={style.info}>
			<div className={style.image_wrap}>
				<img className={style.image} src={avatar} alt={userName}/>
			</div>
			<ul className={style.list}>
				<li className={style.item}>Имя: <span>{userName}</span></li>
				<li className={style.item}>Возраст: <span>{age}</span></li>
				<li className={style.item}>Цвет рук: <span>{colorHand}</span></li>
				<li className={style.item}>Цвет ножных волос: <span>{colorFoodHair}</span></li>
				<li className={style.item}>Цвет бороды: <span>{colorBeard}</span></li>
			</ul>
		</div>
	)
}

export default About
