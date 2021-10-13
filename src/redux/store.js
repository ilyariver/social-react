import profile from '../assets/images/profile-icon.svg'
import message from '../assets/images/message-icon.svg'
import news from '../assets/images/news-icon.svg'
import music from '../assets/images/music-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'
import dialogsReducer from './dialogs-reducer'
import wallPageReducer from './wallpage-reducer'
import optionNavMenuReducer from './option-nav-menu-reducer'
import profileReducer from './header-reducer'
import mainBackgroundReducer from './main-background-reducer'
import headerReducer from './header-reducer'

const store = {
	_state: {
		header: {
			mainLogo: 'https://avatanplus.com/files/resources/original/56b74115318d6152bbd63ad3.png',
			path: '/profile',
			alt: 'авка',
		},
		optionsNavMenu: [
			{name: 'Мой профиль', link: '/profile', img: profile,},
			{name: 'Сообщения', link: '/dialogs', img: message,},
			{name: 'Мои новости', link: '/news', img: news,},
			{name: 'Моя музыка', link: '/music', img: music,},
		],
		dialogs: {
			newMessage: '',
			messagesData: [],
			dialogsData: [
				{id: 1, userName: 'Димка', avatar: 'https://hiphop4real.com/wp-content/uploads/2017/06/JAY-Z.jpg'},
				{
					id: 2,
					userName: 'Петька',
					avatar: 'https://tvcenter.ru/wp-content/uploads/2021/01/pajau5r6kry-e1611324219355.jpg'
				},
				{
					id: 3,
					userName: 'Вовка',
					avatar: 'https://cityopen.ru/wp-content/uploads/2019/09/69358797_400416377283420_17787512026880791_n.jpg'
				},
				{id: 4, userName: 'Том', avatar: 'https://a.d-cd.net/afb2b6es-960.jpg'},
			],
			placeholderText: 'Напишите что-нибудь...',
		},
		wallPage: {
			wallText: '',
			postMessage: [],
			newPostText: '',
			sendButtonImage: sendIcon,
			profile: {
				userName: 'Мистер Бин',
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
				age: 25,
				colorHand: 'Лысэвато-черные',
				colorFoodHair: 'Белые',
				colorBeard: 'Густая',
			}
		},
		mainBackground: [
			{
				backgroundImage: 'http://cameralabs.org/media/camera/may/23may2/33_4caaf6d27a395dc6b511eb570f701c60.jpg',
				alt: 'Поляна'
			}
		],
	},
	_renderDom() {
		console.log('State was changed')
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._renderDom = observer
	},
	dispatch(action) {
		debugger
		this._state.dialogs = dialogsReducer(this._state.dialogs, action)
		this._state.wallPage = wallPageReducer(this._state.wallPage, action)
		this._state.header = headerReducer(this._state.header, action)
		this._state.optionsNavMenu = optionNavMenuReducer(this._state.optionsNavMenu, action)
		this._state.mainBackground = mainBackgroundReducer(this._state.mainBackground, action)
		this._renderDom(this._state)
	}
}

export default store
window.store = store
