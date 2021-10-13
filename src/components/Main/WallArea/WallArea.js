import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextArea from './TextArea/TextArea'

const WallArea = props => {

	return (
		<div className={style.wall_wrap}>
			<About profile={props.profile}/>
			<TextArea
				wallText={props.wallPage.wallText}
				newPostText={props.wallPage.newPostText}
				dispatch={props.dispatch}
				sendButtonImage={props.wallPage.sendButtonImage}/>
			<PostMessage wallPage={props.wallPage} />
		</div>
	);
};

export default WallArea;
