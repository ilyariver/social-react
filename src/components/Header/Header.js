import style from './Header.module.css';
import {Link} from "react-router-dom";

const Header = (props) => {
	const headerOption = props.header;
	console.log(props);
	return (
		<header className={style.header}>
			<Link to={headerOption.path}>
				<img className={style.image} src={headerOption.avatarSrc} alt={headerOption.alt}/>
			</Link>

		</header>
	)
};

export default Header;
