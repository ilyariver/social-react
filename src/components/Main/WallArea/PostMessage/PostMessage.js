import style from './PostMessage.module.css';
import Post from '../../Posts/Post';

const PostMessage = props => {
	const { wallPage } = props
	return (
		<div className={style.messages_wrap}>
			{
				wallPage.postMessage.map(item => {
					return <Post
						key={item.message}
						id={item.id}
						message={item.message}
						like={item.like}
						image={item.image}
						name={item.name} />
				})
			}
		</div>
	)
}

export default PostMessage;
