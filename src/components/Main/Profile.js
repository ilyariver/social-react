import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'
import {useSelector} from 'react-redux'

const Profile = () => {
    const {backgroundImage, alt} = useSelector(state => state.mainBackground[0])

    return (
        <main className={style.main}>
            <div className={style.about}>
                <img
                    className={style.image}
                    src={backgroundImage}
                    alt={alt}/>
            </div>
            <WallArea />
        </main>
    )
}

export default Profile
