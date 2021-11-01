import style from './Header.module.css';
import {Link} from "react-router-dom";
import {Provider} from "react-redux";

const Header = () => {

	return (
		<Provider>
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
		</Provider>
	)
};

export default Header;
