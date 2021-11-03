import React from 'react'
import style from './Users.module.css'

const Users = props => {
    console.log(props)
    return (
        <div className={style.wrap}>
            <ul className={style.list}>
                {
                    props.users.map(user => {
                        return (
                            <li
                                key={user.name}
                                className={style.item}>
                                <div className={style.image_wrap}>
                                    <div style={{backgroundImage: `url("${user.avatar}")`}} className={style.img}></div>
                                    <button className={style.follow_btn}>Follow</button>
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
