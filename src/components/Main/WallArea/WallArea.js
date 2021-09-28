import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextArea from './TextArea/TextArea'

const WallArea = state => {

	return (
		<div className={style.wall_wrap}>
			<About profile={state.profile}/>
			<TextArea
				wallText={state.wallPage.wallText}
				newPostText={state.newPostText}
				addPost={state.addPost}
				updatePostInput={state.updatePostInput}
				sendButtonImage={state.wallPage.sendButtonImage}/>
			<PostMessage wallPage={state.wallPage} />
		</div>
	);
};

export default WallArea;
