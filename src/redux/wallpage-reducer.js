import sendIcon from '../assets/images/send-icon.svg'
import {setApi} from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_INPUT = 'UPDATE-POST-INPUT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
	wallText: '',
	postMessage: [],
	newPostText: '',
	sendButtonImage: sendIcon,
	noLogo: 'https://www.pcfix.lt/wp-content/uploads/2019/10/default-user-image.png',
	changeAvatarText: 'Сменить фото',
	addUserText: 'Добавить в друзья',
	profile: null,
}

const wallPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: state.postMessage.length + 1,
				message: state.newPostText,
				name: state.profile.fullName,
				like: 0,
				image: state.profile.avatar,
			}
			if (!state.newPostText.trim()) return state
			return {
				...state,
				postMessage: [...state.postMessage, newPost],
				newPostText: ''
			}
		case UPDATE_POST_INPUT:
			return {
				...state,
				newPostText: action.text
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		default:
			return state
	}
}
export const addPost = () => ({type: ADD_POST})
export const updateNewPost = textValue => ({type: UPDATE_POST_INPUT, text: textValue})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

export const setProfile = id => dispatch => {
		setApi.userProfile(id).then(data => dispatch(setUserProfile(data)))
}

export default wallPageReducer
