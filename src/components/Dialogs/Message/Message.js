import style from './Message.module.css'

export const Message = (props) => {
	return <li className={style.message}>{props.message}</li>
};

export const messagesData = [
	{id: 1, message: 'Привет'},
	{id: 2, message: 'Ты'},
	{id: 3, message: 'Эй'},
	{id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda,\n' +
			'\t\t\t\t\tatque consectetur distinctio doloribus, ea eligendi eos et eum fugiat officiis qui,\n' +
			'\t\t\t\t\tquos soluta suscipit tempora vero voluptate voluptatum. Adipisci, maiores, voluptates.\n' +
			'\t\t\t\t\tAsperiores deleniti id iusto laudantium natus non repellat voluptatem voluptatum.\n' +
			'\t\t\t\t\tAlias harum nam necessitatibus voluptates! A adipisci animi assumenda dolore incidunt nesciunt officiis quia quo sed sequi?\n' +
			'\t\t\t\t\tAtque corporis dicta dolorum exercitationem minima nihil non optio repudiandae soluta vero.\n' +
			'\t\t\t\t\tA, aperiam asperiores beatae cum cumque, eaque eveniet facilis fugit illum maxime pariatur quaerat\n' +
			'\t\t\t\t\tquidem ratione repellat saepe similique suscipit tenetur ut. Accusamus accusantium aliquid cum cumque\n' +
			'\t\t\t\t\tdelectus dicta dolorem dolorum ea eveniet ex explicabo incidunt iste, iusto magnam necessitatibus nemo\n' +
			'\t\t\t\t\tneque nostrum numquam odit qui quidem quis quod totam, unde, velit veniam veritatis. Ab accusantium aliquam aperiam, commodi,\n' +
			'\t\t\t\t\tcumque deserunt ducimus, est excepturi exercitationem fugit\n' +
			'\t\t\t\t\tipsam nam nisi obcaecati porro similique voluptatibus\n' +
			'\t\t\t\t\tvoluptatum. Minima quis sit sunt voluptas.'},
	{id: 5, message: 'Как дела'},
];
