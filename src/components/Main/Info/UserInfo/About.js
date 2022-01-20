import style from './About.module.css'
import Preloader from '../../../common/Preloader/Preloader'
import TextArea from '../../WallArea/TextArea/TextArea'
import Posts from '../../WallArea/Posts/Posts'

const About = props => {
	const { authId, profile, wallPage, updateNewPost, addPost, noLogo } = props
	if (!profile) return <Preloader />
	const {
		facebook,
		website,
		vk,
		twitter,
		instagram,
		youtube,
		github,
		mainlink,

	} = profile.contacts

	const changeLinks = link => {
		const isUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		if (!isUrl.test(link)) {
			return `https://${link}`
		}
		return link
	}

	return (
		<div className={style.info}>

			<div className={style.image_wrap}>
				{profile.photos.large ? <img className={style.image} src={profile.photos.large} alt={profile.fullName}/> :
					<img style={{width: '200px', borderRadius: '3px'}}
							 className={style.image}
					     src={noLogo}
					     alt={profile.fullName}/>}
				{authId === profile.userId ? <button className={style.avatar_bottom_button}><span>{wallPage.changeAvatarText}</span></button> :
					<button className={style.avatar_bottom_button}><span>{wallPage.addUserText}</span></button>
				}
			</div>
			<div className={style.userInfoContent}>
				<div className={style.userInfo}>
					<div className={style.nameInfo}>
						<div className={style.name}>{profile.fullName}</div>
						<div className={style.status}><span>{profile.aboutMe}</span></div>
						{profile.lookingForAJob ?
							<div className={style.jobSearch}>Ищу работу:&ensp;<span>{profile.lookingForAJobDescription}</span></div> :
							<div className={style.jobNotSearch}>Сейчас не ищу работу</div>}
					</div>
					<div className={style.listLinks}>
						<div className={style.title}>Контакты:</div>
						{facebook &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.facebook}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(facebook)}><span>{facebook}</span></a>
							</div>}
						{website &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.website}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(website)}><span>{website}</span></a>
							</div>}
						{vk &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.vk}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(vk)}><span>{vk}</span></a>
							</div>}
						{twitter &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.twitter}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(twitter)}><span>{twitter}</span></a>
							</div>}
						{instagram &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.instagram}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(instagram)}><span>{instagram}</span></a>
							</div>}
						{youtube &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.youtube}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(youtube)}><span>{youtube}</span></a>
							</div>}
						{github &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.github}`}></span>
								<a target="_blank" className={style.link} href={changeLinks(github)}><span>{github}</span></a>
							</div>}
						{mainlink &&
							<div className={style.item}>
								<span className={`${style.logo} ${style.mainlink}`}></span>
								<a target="_blank" className={style.link} href={mainlink}><span>{mainlink}</span></a>
							</div>}
					</div>
				</div>
				<div className={style.wallText}>
					<TextArea
						newPostText={wallPage.newPostText}
						sendButtonImage={wallPage.sendButtonImage}
						addPost={addPost}
						updateNewPost={updateNewPost}
					/>
					<Posts
						postMessage={wallPage.postMessage}
					/>
				</div>
			</div>
		</div>
	)
}

export default About
