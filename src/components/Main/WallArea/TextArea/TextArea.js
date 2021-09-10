import style from './TextArea.module.css'

const TextArea = () => {
	return (
		<div className={style.text_area}>
			<div className={style.title}>Напиши не шыбько дэбильний текст</div>
			<div className={style.send_wrap}>
				<input type="text" className={style.input}/>
				<button className={style.button}>Отправ</button>
			</div>
		</div>
	);
};

export default TextArea;
