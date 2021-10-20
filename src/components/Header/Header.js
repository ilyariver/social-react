import style from './Header.module.css';
import {Link} from "react-router-dom";
import StoreContext from '../../StoreContext'

const Header = () => {

	return (
		<StoreContext>
			{
				store => {
					const headerOption = store.getState().header;
					debugger
					return (
						<header className={style.header}>
							<Link to={headerOption.path}>
								<img className={style.image} src={headerOption.mainLogo} alt={headerOption.alt}/>
							</Link>
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
			}
		</StoreContext>
	)
};

export default Header;
