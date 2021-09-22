import React from 'react';
import style from './TextArea.module.css'

const TextArea = props => {
	const newPostElement = React.createRef();
	const addPostToWall = () => {
		props.addPost();
	}

	const sendToPressKey = e => {
		if (e.key === 'Enter') {
			addPostToWall();
		}
	}

	const onChangeInput = () => {
		const textValue = newPostElement.current.value;
		props.updatePostInput(textValue);
	}

	return (
		<div className={style.text_area}>
			<div className={style.title}>Напиши не шыбько дэбильний текст</div>
			<div className={style.send_wrap}>
				<input
					onKeyPress={sendToPressKey}
					onChange={onChangeInput}
					type="text"
					className={style.input}
					ref={newPostElement}
					value={props.newPostText} />
				<button
					onClick={addPostToWall}
					className={style.button}>
					<img className={style.button_icon} src={props.sendButtonImage} />
				</button>
			</div>
		</div>
	);
};

export default TextArea;
