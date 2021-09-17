import { renderDom } from "../render";
import profile from '../assets/images/profile-icon.svg';
import message from '../assets/images/message-icon.svg';
import news from '../assets/images/news-icon.svg';
import music from '../assets/images/music-icon.svg';

const state = {
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
			{id: 2, userName: 'Петька', avatar: 'https://tvcenter.ru/wp-content/uploads/2021/01/pajau5r6kry-e1611324219355.jpg'},
			{id: 3, userName: 'Вовка', avatar: 'https://cityopen.ru/wp-content/uploads/2019/09/69358797_400416377283420_17787512026880791_n.jpg'},
			{id: 4, userName: 'Том', avatar: 'https://a.d-cd.net/afb2b6es-960.jpg'},
		],
	},
	wallPage: {
		postMessage: [],
		newPostText: '',
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
};

export const addPost = () => {
	const newPost = {
		id: state.wallPage.postMessage.length + 1,
		message: state.wallPage.newPostText,
		name: state.profile.userName,
		like: 0,
		image: state.profile.avatar,
	}

	if (!state.wallPage.newPostText.trim()) return;
	state.wallPage.postMessage.push(newPost);
	state.wallPage.newPostText = '';
	renderDom(state);
};

export const updatePostInput = text => {
	state.wallPage.newPostText = text;
	renderDom(state);
}

export const addNewDialogMessage = () => {
	const newDialogMessage = {
		id: state.dialogs.messagesData.length + 1,
		message: state.dialogs.newMessage,
	}
	state.dialogs.messagesData.push(newDialogMessage);
	state.dialogs.newMessage = '';
	renderDom(state);
}

export const updateDialogInput = text => {
	state.dialogs.newMessage = text;
	renderDom(state);
}


export default state;
