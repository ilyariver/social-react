import style from './Nav.module.css'
import NavList from './Content/NavList/Navlist'

const Nav = (props) => {
	return (
		<nav className={style.nav}>
			<div className={style.nav_wrap}>
				<NavList optionsNavMenu={props.optionsNavMenu} />
			</div>
		</nav>
	)
}

export default Nav
