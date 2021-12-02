const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [
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
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    console.log('FOLLOW_USER', user)
                    if (user.id === action.userId) {
                        return { ...user, followed: true}
                    }
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    console.log('UNFOLLOW_USER', user)

                    if (user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                })
            }

        case SET_USERS:
            debugger
            return {
                ...state,
                users: [...state.users, action.users]
            }
        default:
            return state

    }
}

export const followActionCreator = userId => ({type: FOLLOW_USER, userId})
export const unfollowActionCreator = userId => ({type: UNFOLLOW_USER, userId})
export const setUsersActionCreator = users => ({type: SET_USERS, users})
export default usersReducer
