import style from './Profile.module.css'
import About from '../../Info/UserInfo/About'

const Profile = props => {
	const { auth, wallPage, profile, updateNewPostActionCreator, addPostActionCreator } = props
	console.log('===',wallPage.noLogo)
	return (
		<main className={style.main}>
			<div className={style.about}>
			</div>
			<div>
				<About
					auth={auth}
					profile={profile}
					wallPage={wallPage}
					noLogo={wallPage.noLogo}
					updateNewPostActionCreator={updateNewPostActionCreator}
					addPostActionCreator={addPostActionCreator}
				/>
			</div>
		</main>
	)
}

export default Profile
