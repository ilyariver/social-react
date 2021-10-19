import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'

const Profile = (props) => {
	const {backgroundImage, alt} = props.store.getState().mainBackground[0]

	return (
		<main className={style.main}>
			<div className={style.about}>
				<img
					className={style.image}
					src={backgroundImage}
					alt={alt}/>
			</div>
			<WallArea
				store={props.store}/>
		</main>
	)
}

export default Profile
