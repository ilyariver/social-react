import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'

const Profile = (props) => {

	return (
		<main className={style.main}>
			<div className={style.about}>
				<img
					className={style.image}
					src={props.mainBackground[0].backgroundImage}
					alt={props.mainBackground[0].alt}/>
			</div>
			<WallArea
				profile={props.profile}
				newPostText={props.newPostText.newPostText}
				wallPage={props.wallPage}
				dispatch={props.dispatch}
				userName={props.userName}
				/>
		</main>
	)
}

export default Profile
