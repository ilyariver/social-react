import style from './Posts.module.css'

const Posts = props => {

	return (
		<div className={style.messages_wrap}>
			{
				props.postMessage.map(item => {
					return (
						<div key={item.message} className={style.user_post}>
							<div className={style.info_wrap}>
								<div className={style.info_area}>
									<img className={style.image}
									     src={item.image} alt={item.name} />
									<div className={style.title}>{item.name}</div>
								</div>
								<div className={style.text}>{item.message}</div>
							</div>
							<div className={style.likes}>
								<div className={style.like}>like</div>
								<div className={style.count_likes}>{item.like}</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Posts
