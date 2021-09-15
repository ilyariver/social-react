import { renderDom } from "../render";
import profile from '../assets/images/profile-icon.svg';
import message from '../assets/images/message-icon.svg';
import news from '../assets/images/news-icon.svg';
import music from '../assets/images/music-icon.svg';

const state = {
	header: {
		avatarSrc: 'https://avatanplus.com/files/resources/original/56b74115318d6152bbd63ad3.png',
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
			{id: 1, user: 'Димка'},
			{id: 2, user: 'Петька'},
			{id: 3, user: 'Вовка'},
			{id: 4, user: 'Том'},
		],
	},
	wallPage: {
		postMessage: [],
		newPostText: '',
	},
};

export const addPost = () => {
	const newPost = {
		id: state.wallPage.postMessage.length + 1,
		message: state.wallPage.newPostText,
		like: 0,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
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
