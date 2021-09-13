import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextArea from './TextArea/TextArea'

const WallArea = (state) => {

	return (
		<div className={style.wall_wrap}>
			<About />
			<TextArea newPostText={state.newPostText} addPost={state.addPost} updatePostInput={state.updatePostInput} />
			<PostMessage wallPage={state.wallPage} />
		</div>
	);
};

export default WallArea;
