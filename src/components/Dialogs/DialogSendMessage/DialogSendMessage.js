import style from './DialogSendMessage.module.css';
import '../../../assets/images/smile.svg';

const DialogSendMessage = () => {

	return (
		<div className={style.send_message}>
			<input type="text" className={style.input} placeholder="Напиши что-нибудь, дрянь..." />
		</div>
	);
};

export default DialogSendMessage;
