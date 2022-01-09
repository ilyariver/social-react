import style from './Profile.module.css'
import About from '../../Info/UserInfo/About'

const Profile = props => {
	const { wallPage, profile, updateNewPostActionCreator, addPostActionCreator } = props
	return (
		<main className={style.main}>
			<div className={style.about}>
			</div>
			<div>
				<About
					profile={profile}
					wallPage={wallPage}
					updateNewPostActionCreator={updateNewPostActionCreator}
					addPostActionCreator={addPostActionCreator}
				/>
			</div>
		</main>
	)
}

export default Profile
