import style from './Nav.module.css'
import NavList from './Content/NavList/Navlist'

const Nav = () => {
	return (
		<nav className={style.nav}>
			<div className={style.nav_wrap}>
				<NavList />
			</div>
		</nav>
	)
}

export default Nav
