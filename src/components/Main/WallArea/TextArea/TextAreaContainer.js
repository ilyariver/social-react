import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/wallpage-reducer'
import TextArea from "./TextArea";

const TextAreaContainer = props => {
	const { newPostText,sendButtonImage } = props.store.getState().wallPage
	const addPostToWall = () => {
		props.store.dispatch(addPostActionCreator());
	}

	const onChangeInput = textValue => {
		props.store.dispatch(updateNewPostActionCreator(textValue));
	}

	return (
		<TextArea
			onChangeInput={onChangeInput}
			addPostToWall={addPostToWall}
			newPostText={newPostText}
			sendButtonIcon={sendButtonImage}/>
	);
};

export default TextAreaContainer;
