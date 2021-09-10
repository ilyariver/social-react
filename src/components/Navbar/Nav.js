import style from './Nav.module.css'
import NavList from './Content/NavList/Navlist'

const Nav = () => {
	return (
		<nav className={style.nav}>
			<NavList />
		</nav>
	)
}

export default Nav
