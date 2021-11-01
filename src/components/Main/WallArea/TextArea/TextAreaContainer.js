import React from 'react'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/wallpage-reducer'
import TextArea from "./TextArea";
import {connect} from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


//const TextAreaContainer = props => {
// 	const store = props.store
// 	const { newPostText,sendButtonImage } = store.getState().wallPage
// 	const addPostToWall = () => {
// 		store.dispatch(addPostActionCreator());
// 	}
//
// 	const onChangeInput = textValue => {
// 		store.dispatch(updateNewPostActionCreator(textValue));
// 	}
// 	return (
// 		<TextArea
// 			onChangeInput={onChangeInput}
// 			addPostToWall={addPostToWall}
// 			newPostText={newPostText}
// 			sendButtonIcon={sendButtonImage}/>
// 	)
// }

const mapStateToProps = state => {
	const { newPostText,sendButtonImage } = state.getState().wallPage

	return {
		newPostText,
		sendButtonImage
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPostToWall() {
			dispatch(addPostActionCreator())
		},
		onChangeInput(textValue) {
			dispatch(updateNewPostActionCreator(textValue))
		}
	}
}

const TextAreaContainer = connect(mapStateToProps, mapDispatchToProps)(TextArea)

export default TextAreaContainer;
