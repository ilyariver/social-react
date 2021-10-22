import About from '../Info/UserInfo/About'
import style from './WallArea.module.css'
import PostMessage from './PostMessage/PostMessage'
import TextAreaContainer from "./TextArea/TextAreaContainer"

const WallArea = props => {
	const wallPage = props.store.getState().wallPage
	return (
		<div className={style.wall_wrap}>
			<About profile={wallPage.profile}/>
			<TextAreaContainer store={props.store}/>
			<PostMessage wallPage={wallPage}/>
		</div>
	);
};

export default WallArea;
