import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextArea from './TextArea/TextArea'

const WallArea = () => {

	return (
		<div className={style.wall_wrap}>
			<About />
			<TextArea />
			<PostMessage />
		</div>
	);
};

export default WallArea;
