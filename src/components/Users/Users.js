import React from 'react'
import style from './Users.module.css'

const Users = props => {
    const users = [
        {
          id: 1,
          followed: false,
          name: 'Димка',
          status: {text: 'Я на месте', symbol: true},
          location: {city: 'Москва', country: 'Россия'},
          avatar: 'https://hiphop4real.com/wp-content/uploads/2017/06/JAY-Z.jpg'
        },
        {
          id: 2,
          followed: true,
          name: 'Петька',
          status: {text: 'Работаю из дома', symbol: true},
          location: {city: 'Киев', country: 'Украина'},
          avatar: 'https://tvcenter.ru/wp-content/uploads/2021/01/pajau5r6kry-e1611324219355.jpg'
        },
        {
          id: 3,
          followed: true,
          name: 'Вовка',
          status: {text: 'Ушел в магазин', symbol: false},
          location: {city: 'Владимир', country: 'Россия'},
          avatar: 'https://cityopen.ru/wp-content/uploads/2019/09/69358797_400416377283420_17787512026880791_n.jpg'
        },
        {
          id: 4,
          followed: true,
          name: 'Том',
          status: {text: 'Нет на месте', symbol: false},
          location: {city: 'Минск', country: 'Беларусь'},
          avatar: 'https://a.d-cd.net/afb2b6es-960.jpg'
        },
      ]

    return (
        <div className={style.wrap}>
            <ul className={style.list}>
                {
                    users.map(user => {
                        return (
                            <li
                                key={user.name}
                                className={style.item}>
                                <div className={style.image_wrap}>
                                    <div style={{backgroundImage: `url("${user.avatar}")`}} className={style.img}></div>
                                    <button className={style.follow_btn}>Follow</button>
                                </div>
                                <div className={style.content}>
                                  <div className={style.mainContent}>
                                    <div className={style.userName}>{user.name}</div>
                                    <div className={style.userStatus}>
                                      <div className={user.status.symbol ? style.userActivity : style.userAbsent}></div>
                                      <div className={style.statusText}>{user.status.text}</div>
                                    </div>
                                  </div>
                                  <div className={style.location}>
                                    <div className={style.country}>{user.location.city}</div>
                                    <div className={style.city}>{user.location.country}</div>
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
