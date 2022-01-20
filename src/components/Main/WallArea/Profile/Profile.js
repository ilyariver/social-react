import style from './Profile.module.css'
import About from '../../Info/UserInfo/About'

const Profile = props => {

	const { authId, wallPage, profile, updateNewPost, addPost } = props
	debugger
	return (
		<main className={style.main}>
			<div className={style.about}>
			</div>
			<div>
				<About
					authId={authId}
					profile={profile}
					wallPage={wallPage}
					noLogo={wallPage.noLogo}
					updateNewPost={updateNewPost}
					addPost={addPost}
				/>
			</div>
		</main>
	)
}

export default Profile
