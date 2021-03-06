import React from 'react'
import style from './TextArea.module.css'

const TextArea = props => {
	const addPostToWall = () => {
		props.addPost()
	}

	const sendToPressKey = e => {
		if (e.key === 'Enter') {
			props.addPost();
		}
	}

	const onChangeInput = e => {
		const textValue = e.target.value
		props.updateNewPost(textValue)
	}

	return (
		<div className={style.text_area}>
			<div className={style.title}>{props.wallText}</div>
			<div className={style.send_wrap}>
				<input
					onKeyPress={sendToPressKey}
					onChange={onChangeInput}
					type="text"
					className={style.input}
					value={props.newPostText}
				/>
				<button
					onClick={addPostToWall}
					className={style.button}>
					<img
						className={style.button_icon}
						src={props.sendButtonImage} />
				</button>
			</div>
		</div>
	);
};

export default TextArea;
