const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const SET_LOADING = 'SET_LOADING'
const SET_FETCHING = 'SET_FETCHING'

const initialState = {
    users: [],
    count: 10,
    page: 2000,
    startPage: 1,
    loading: true,
    fetching: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                       return { ...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false}
                    }
                    return user
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                startPage: action.page
            }

        case SET_TOTAL_USERS:
            return {
                ...state,
                page: action.total
            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.load
            }

        case SET_FETCHING:
            return {
                ...state,
                fetching: action.fetch
            }

        default:
            return state

    }
}

export const follow = userId => ({type: FOLLOW_USER, userId})
export const unfollow = userId => ({type: UNFOLLOW_USER, userId})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page})
export const getTotalUsersCount = total => ({type: SET_TOTAL_USERS, total})
export const setLoading = load => ({type: SET_LOADING, load})
export const setFetching = fetch => ({type: SET_FETCHING, fetch})
export default usersReducer
