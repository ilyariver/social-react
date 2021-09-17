import style from './Post.module.css';

const Post = props => {

	return (
		<div className={style.user_post}>
			<div className={style.info_wrap}>
				<div className={style.info_area}>
					<img className={style.image}
							 src={props.image} alt={props.user} />
					<div className={style.title}>{props.name}</div>
				</div>
				<div className={style.text}>{props.message}</div>
			</div>
			<div className={style.likes}>
				<div className={style.like}>like</div>
				<div className={style.count_likes}>{props.like}</div>
			</div>
		</div>
	)
};

export default Post;
