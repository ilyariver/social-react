import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'
import Provider from '../../StoreContext'

const Profile = () => {

	return (
		<Provider.Consumer>
			{
				store => {
					const {backgroundImage, alt} = store.getState().mainBackground[0]
					debugger
					console.log(store)
					return (
						<main className={style.main}>
							<div className={style.about}>
								<img
									className={style.image}
									src={backgroundImage}
									alt={alt}/>
							</div>
							<WallArea
								store={store}/>
						</main>
					)
				}
			}
		</Provider.Consumer>
	)
}

export default Profile
