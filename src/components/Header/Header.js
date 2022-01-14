import style from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = props => {
	const {
		isAuth,
		login,
		loginText,
		sayHelloText,
		nameSite
	} = props
	return (
		<header className={style.header}>
			<div className={`container ${style.headerContainer}`}>
				<Link
					className={style.logoLink}
					to={props.path}>
					<img className={style.image} src={props.mainLogo} alt={props.alt}/>
					<div className={style.nameSite}>{nameSite}</div>
				</Link>
				{!isAuth ? <a target="_blank" href={'https://social-network.samuraijs.com/login'} className={style.auth}>{loginText}</a> :
					<div className={style.login}>{sayHelloText}, {login || 'друг'}!</div>}
			</div>
			<ul className={style.circles}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</header>
	)
}

export default Header
