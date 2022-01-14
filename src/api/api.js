import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY' : '915ad732-2fa1-4a7a-abd4-2decc86f1d58'
	}
})

export const setApi = {
	getUsers(page = 1, count = 20) {
		return instance.get(`users?page=${page}&count=${count}`).then(response => response.data)
	},
	followFriend(id) {
		return instance.post(`follow/${id}`, {})
	},
	unFollowFriend(id) {
		return instance.delete(`follow/${id}`)
	},
	authMe() {
		return instance.get(`auth/me`).then(response => response.data)
	},
	userProfile(userId) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
			.catch(error => {
				alert('Нет такого ниггера')
			})
	}
}
