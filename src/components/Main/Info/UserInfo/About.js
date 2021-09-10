import style from './About.module.css'

const About = () => {
	return (
		<div className={style.info}>
			<img className={style.image} src="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg" alt=""/>
			<ul className={style.list}>
				<li className={style.item}>Имя:</li>
				<li className={style.item}>Возраст:</li>
				<li className={style.item}>Цвет рук:</li>
				<li className={style.item}>Наличие волос:</li>
				<li className={style.item}>Кличество рук:</li>
			</ul>
		</div>

	)
}

export default About
