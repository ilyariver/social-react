import React from 'react'
import style from './Preloader.module.css'
import loadingSvg from '../../../assets/images/loading.svg'

const Preloader = props => {

	return (
		<div className={style.ladingWrap}>
				<img className={style.preloader} src={loadingSvg} alt="Загрузка"/>
		</div>
	)
}

export default Preloader