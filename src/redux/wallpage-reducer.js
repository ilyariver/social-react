import sendIcon from '../assets/images/send-icon.svg'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT'

const initialState = {
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
}

const wallPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: state.postMessage.length + 1,
				message: state.newPostText,
				name: state.profile.userName,
				like: 0,
				image: state.profile.avatar,
			}
			if (!state.newPostText.trim()) return
			state.postMessage.push(newPost)
			state.newPostText = ''
			return state
		case UPDATE_POST_INPUT:
			state.newPostText = action.text
			return state
		default:
			return state
	}
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = textValue => ({type: UPDATE_POST_INPUT, text: textValue})
export default wallPageReducer
