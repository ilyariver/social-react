import React from 'react'
import style from './Users.module.css'

const Users = props => {
    console.log(props)
    return (
        <div className={style.users_wrap}>
            <ul className={style.users_list}>
                {
                    props.users.map(user => {
                        return (
                            <li
                                key={user.name}
                                className={style.users_item}>
                                <div>
                                    <img
                                        src={user.avatar}
                                        alt={'Аватар ' + user.name}
                                        className={style.users_img}/>
                                    <button className={style.users_follow_btn}>Follow</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users