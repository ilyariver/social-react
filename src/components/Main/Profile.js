import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'
import StoreContext from '../../StoreContext'

const Profile = () => {

	return (
		<StoreContext.Consumer>
			{
				store => {
					const { backgroundImage, alt } = store.getState().mainBackground[0]
					return (
						<main className={style.main}>
							<div className={style.about}>
								<img
									className={style.image}
									src={backgroundImage}
									alt={alt}/>
							</div>
							<WallArea store={store}/>
						</main>
					)
				}
			}
		</StoreContext.Consumer>
	)
}

export default Profile
