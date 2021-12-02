import React from 'react'
import style from './Users.module.css'

const Users = props => {

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
                                    <button
                                      className={style.follow_btn}
                                      onClick={() => user.followed ? props.follow(user.id) : props.unfollow(user.id)}
                                    >
                                      {user.followed ? 'Друг' : 'Дружить'}
                                    </button>
                                </div>
                                <div className={style.content}>
                                  <div className={style.mainContent}>
                                    <div className={style.userName}>{user.name}</div>
                                    <div className={style.userStatusContent}>
                                      <div
                                        className={`${style.userStatus} ${user.status.symbol ? 
                                          style.userActivity : style.userAbsent}`}></div>
                                      <div className={style.statusText}>{user.status.text}</div>
                                    </div>
                                  </div>
                                  <div className={style.location}>
                                    <div className={style.country}>{user.location.country}</div>
                                    <div className={style.city}>{user.location.city}</div>
                                  </div>
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
