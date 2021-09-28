import profile from '../assets/images/profile-icon.svg'
import message from '../assets/images/message-icon.svg'
import news from '../assets/images/news-icon.svg'
import music from '../assets/images/music-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'


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
		},
		wallPage: {
			wallText: 'Напиши дэбильний текст',
			postMessage: [],
			newPostText: '',
			sendButtonImage: sendIcon,
		},
		mainBackground: [
			{
				backgroundImage: 'http://cameralabs.org/media/camera/may/23may2/33_4caaf6d27a395dc6b511eb570f701c60.jpg',
				alt: 'Поляна'
			}
		],
		profile: {
			userName: 'Мистер Бин',
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
			age: 25,
			colorHand: 'Лысэвато-черные',
			colorFoodHair: 'Белые',
			colorBeard: 'Густая',
		}
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

	addPost() {
		const newPost = {
			id: this._state.wallPage.postMessage.length + 1,
			message: this._state.wallPage.newPostText,
			name: this._state.profile.userName,
			like: 0,
			image: this._state.profile.avatar,
		}

		if (!this._state.wallPage.newPostText.trim()) return
		this._state.wallPage.postMessage.push(newPost)
		this._state.wallPage.newPostText = ''
		this._renderDom(this._state)
	},
	updatePostInput(text) {
		this._state.wallPage.newPostText = text
		this._renderDom(this._state)
	},
	addNewDialogMessage() {
		const newDialogMessage = {
			id: this._state.dialogs.messagesData.length + 1,
			message: this._state.dialogs.newMessage,
		}
		this._state.dialogs.messagesData.push(newDialogMessage)
		this._state.dialogs.newMessage = ''
		this._renderDom(this._state)
	},
	updateDialogInput(text) {
		this._state.dialogs.newMessage = text
		this._renderDom(this._state)
	},

	dispatch(action) { // { type: 'ADD-POST' }
		switch (action.type) {
			case 'ADD-POST':
				const newPost = {
					id: this._state.wallPage.postMessage.length + 1,
					message: this._state.wallPage.newPostText,
					name: this._state.profile.userName,
					like: 0,
					image: this._state.profile.avatar,
				}

				if (!this._state.wallPage.newPostText.trim()) return
				this._state.wallPage.postMessage.push(newPost)
				this._state.wallPage.newPostText = ''
				this._renderDom(this._state)
				break
			case 'UPDATE-POST-INPUT':
				this._state.wallPage.newPostText = action.text
				this._renderDom(this._state)
				break
			case 'ADD-NEW-DIALOG-MESSAGE':
				const newDialogMessage = {
					id: this._state.dialogs.messagesData.length + 1,
					message: this._state.dialogs.newMessage,
				}
				this._state.dialogs.messagesData.push(newDialogMessage)
				this._state.dialogs.newMessage = ''
				this._renderDom(this._state)
				break
			case 'UPDATE-DIALOG-INPUT':
				this._state.dialogs.newMessage = action.text
				this._renderDom(this._state)
				break
			default:
				break
		}
	}
}


export default store
window.store = store
