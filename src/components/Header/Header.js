import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<img className={style.image} src="https://avatanplus.com/files/resources/original/56b74115318d6152bbd63ad3.png" alt=""/>
		</header>
	)
};

export default Header;
