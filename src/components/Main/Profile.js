import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'

const Profile = (state) => {

	return (
		<main className={style.main}>
			<div className={style.about}>
				<img className={style.image} src="http://cameralabs.org/media/camera/may/23may2/33_4caaf6d27a395dc6b511eb570f701c60.jpg" alt=""/>
			</div>
			<WallArea state={state}/>
		</main>
	)
}

export default Profile
