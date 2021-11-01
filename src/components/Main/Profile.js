import style from './Profile.module.css'
import WallArea from './WallArea/WallArea'
import {connect} from "react-redux";

// const Profile = (store) => {
//     // const {backgroundImage, alt} = state.getState().mainBackground[0]
//     console.log(store);
//     return (
//         <main className={style.main}>
//             <div className={style.about}>
//                 {/*<img*/}
//                 {/*    className={style.image}*/}
//                 {/*    src={backgroundImage}*/}
//                 {/*    alt={alt}/>*/}
//             </div>
//             {/*<WallArea store={state}/>*/}
//         </main>
//     )
// }

const mapStateToProps = state => {
    debugger
    console.log(state)
    return {}
}


const Profile = connect(mapStateToProps)(WallArea)

export default Profile
