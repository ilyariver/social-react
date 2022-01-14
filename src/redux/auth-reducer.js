const SET_USER_DATA = 'SET-USER-DATA'

const initialState = {
	header:{
		mainLogo: 'https://avatanplus.com/files/resources/original/56b74115318d6152bbd63ad3.png',
		path: '/profile',
		alt: 'авка',
		loginText: 'Залогиниться, бро',
		sayHelloText: 'Привет',
		nameSite: 'Axella Social',
	},
	data: {
		id: null,
		login: null,
		email: null,
		isAuth: false
	}
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				data: {
					...action.data,
					isAuth: true
				}
			}
		default:
			return state
	}
}

export const setUserData = ({id, login, email}) => ({type: SET_USER_DATA, data: {id, login, email}})
export default authReducer
