import profile from '../assets/images/profile-icon.svg'
import message from '../assets/images/message-icon.svg'
import news from '../assets/images/news-icon.svg'
import music from '../assets/images/music-icon.svg'
import users from '../assets/images/people-icon.svg'

const initialState = [
	{name: 'Мой профиль', link: `/profile/`, img: profile,},
	{name: 'Сообщения', link: '/dialogs', img: message,},
	{name: 'Мои новости', link: '/news', img: news,},
	{name: 'Моя музыка', link: '/music', img: music,},
	{name: 'Юзеры', link: '/users', img: users,},
]

const optionNavMenuReducer = (state = initialState, action) => {
	return state
}

export default optionNavMenuReducer
