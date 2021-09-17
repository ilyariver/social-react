import style from './About.module.css'

const About = (props) => {

	return (
		<div className={style.info}>
			<div className={style.image_wrap}>
				<img className={style.image} src={props.profile.avatar} alt={props.profile.userName}/>
			</div>
			<ul className={style.list}>
				<li className={style.item}>Имя: <span>{props.profile.userName}</span></li>
				<li className={style.item}>Возраст: <span>{props.profile.age}</span></li>
				<li className={style.item}>Цвет рук: <span>{props.profile.colorHand}</span></li>
				<li className={style.item}>Цвет ножных волос: <span>{props.profile.colorFoodHair}</span></li>
				<li className={style.item}>Цвет бороды: <span>{props.profile.colorBeard}</span></li>
			</ul>
		</div>

	)
};

export default About
