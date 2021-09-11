import style from './PostMessage.module.css';
import Post from '../../Posts/Post';

const PostMessage = (props) => {

	return (
		<div className={style.messages_wrap}>
			{
				props.state.state.state.postMessage.map(item => {
					return <Post key={item.message} id={item.id} message={item.message} like={item.like} image={item.image} />
				})
			}
		</div>
	);
};

export default PostMessage;
