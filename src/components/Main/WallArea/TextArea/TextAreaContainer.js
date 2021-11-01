import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/wallpage-reducer'
import TextArea from "./TextArea";
import { connect } from "react-redux";

const mapStateToProps = state => {
	const { newPostText,sendButtonImage } = state.wallPage

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
