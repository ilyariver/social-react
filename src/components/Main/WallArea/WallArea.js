import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextArea from './TextArea/TextArea'

const WallArea = (state) => {

	return (
		<div className={style.wall_wrap}>
			<About />
			<TextArea />
			<PostMessage state={state} />
		</div>
	);
};

export default WallArea;
