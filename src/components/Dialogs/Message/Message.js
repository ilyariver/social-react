import style from './Message.module.css';

const Message = (props) => {
	return <li className={style.message}>{props.message}</li>
};

export default Message;
