import style from './PostMessage.module.css'
import Post from '../../Posts/Post'

const PostMessage = () => {
	return (
		<div className={style.messages_wrap}>
			{ postMessage.map(item => <Post id={item.id} message={item.message} like={item.like} image={item.image} />) }
		</div>
	);
};

const postMessage = [
	{
		id: 1,
		message: 'Привет, Вонь',
		like: 0,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
	},
	{
		id: 2,
		message: 'Я тут впервые',
		like: 12,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
	},
	{
		id: 3,
		message: 'И чо?',
		like: '-2',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
	},
	{
		id: 4,
		message: 'Всем привет!!!!',
		like: 5000,
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxezpAgR2zyrvSyxP6i-Ar02oVtTFZxPrBxACJnhYx9issQEQKzNFDY-m-QPcJLoj8RY&usqp=CAU',
	},
];

export default PostMessage;
