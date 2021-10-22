import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/wallpage-reducer'
import TextArea from "./TextArea";


const TextAreaContainer = props => {
	const store = props.store
	const { newPostText,sendButtonImage } = store.getState().wallPage
	const addPostToWall = () => {
		store.dispatch(addPostActionCreator());
	}

	const onChangeInput = textValue => {
		store.dispatch(updateNewPostActionCreator(textValue));
	}
	return (
		<TextArea
			onChangeInput={onChangeInput}
			addPostToWall={addPostToWall}
			newPostText={newPostText}
			sendButtonIcon={sendButtonImage}/>
	)
}

export default TextAreaContainer;
