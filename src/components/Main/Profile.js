import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'

const Profile = (state) => {

	return (
		<main className={style.main}>
			<div className={style.about}>
				<img
					className={style.image}
					src={state.mainBackground[0].backgroundImage}
					alt={state.mainBackground[0].alt}/>
			</div>
			<WallArea
				profile={state.profile}
				newPostText={state.newPostText.newPostText}
				wallPage={state.wallPage}
				addPost={state.addPost}
				updatePostInput={state.updatePostInput}
				userName={state.userName}
				/>
		</main>
	)
}

export default Profile
