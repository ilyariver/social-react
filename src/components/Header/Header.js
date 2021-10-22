import style from './Header.module.css';
import {Link} from "react-router-dom";
import StoreContext from '../../StoreContext'

const Header = () => {

	return (
		<StoreContext.Consumer>
			{
				store => {
					const headerOption = store.getState().header;
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
		</StoreContext.Consumer>
	)
};

export default Header;
