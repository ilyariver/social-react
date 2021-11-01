import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextAreaContainer from "./TextArea/TextAreaContainer"

const WallArea = () => {

	return (
		<div className={style.wall_wrap}>
			<About />
			<TextAreaContainer />
			<PostMessage />
		</div>
	);
};

export default WallArea;
