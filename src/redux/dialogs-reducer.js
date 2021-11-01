const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE'
const UPDATE_DIALOG_INPUT = 'UPDATE-DIALOG-INPUT'

const initialState = {
	newMessage: '',
	messagesData: [],
	dialogsData: [
		{
			id: 1,
			userName: 'Димка',
			avatar: 'https://hiphop4real.com/wp-content/uploads/2017/06/JAY-Z.jpg'
		},
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
		{
			id: 4,
			userName: 'Том',
			avatar: 'https://a.d-cd.net/afb2b6es-960.jpg'
		},
	],
	placeholderText: 'Напишите что-нибудь...',
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_DIALOG_MESSAGE: {
			const newDialogMessage = {
				id: state.messagesData.length + 1,
				message: state.newMessage,
			}
			if (!state.newMessage.trim()) return state
			const stateCopy = {...state}
			stateCopy.messagesData = [...state.messagesData]
			stateCopy.messagesData.push(newDialogMessage)
			stateCopy.newMessage = ''
			return stateCopy
		}
		case UPDATE_DIALOG_INPUT: {
			const stateCopy = {...state}
			stateCopy.newMessage = action.text
			stateCopy.loading = true
			return stateCopy
		}
		default:
			return state
	}
}

export const addDialogActionCreator = () => ({type: ADD_NEW_DIALOG_MESSAGE})
export const updateNewDialogActionCreator = textValueInput => ({type: UPDATE_DIALOG_INPUT, text: textValueInput})
export default dialogsReducer
