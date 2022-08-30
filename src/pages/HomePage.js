import { useState } from 'react'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'

import HomePageBackgroundImg from '../assets/HomePageBackgroundImg.png'
import SudoSaiyans from '../assets/SudoSaiyans.png'
import FolderIcon from '../assets/FolderIcon.png'
import InfoIcon from '../assets/InfoIcon.png'
import MintIcon from '../assets/MintIcon.png'
import AboutIcon from '../assets/AboutIcon.png'
import Pc from '../assets/pc.png'
import Telegram from '../assets/Telegram.png'

const HomePage = () => {
	const [imgModal, setImgModal] = useState(false)
	const [tempImgSrc, setTempImgSrc] = useState('')

	const getImg = (imgsrc) => {
		setTempImgSrc(imgsrc)
		setImgModal(true)
	}

	return (
		<div className="home_page">
			<div className="background">
				<img src={HomePageBackgroundImg} alt="HomePageBackgroundImg" />
			</div>

			<div className="content">
				<div className="lg_screen">
					<Draggable bounds="parent">
						<div className="logo" onClick={() => getImg(SudoSaiyans)}>
							<img src={SudoSaiyans} alt="SudoSaiyans" />
							<h6>logo.jpg</h6>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<div className="experiments" onClick={() => getImg(Pc)}>
							<img src={Pc} alt="" />
							<h6>Experiments</h6>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<div className="telegram" onClick={() => getImg(Telegram)}>
							<img src={Telegram} alt="" />
							<h6>Telegram.exe</h6>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<Link to="/Moods">
							<div className="about">
								<img src={AboutIcon} alt="" />
								<h6>About.txt</h6>
							</div>
						</Link>
					</Draggable>

					<Draggable bounds="parent">
						<div className="mint">
							<img src={MintIcon} alt="" />
							<h6>mint.exe</h6>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<Link to="/info">
							<div className="info">
								<img src={InfoIcon} alt="" />
								<h6>Info</h6>
							</div>
						</Link>
					</Draggable>

					<Draggable bounds="parent">
						<Link to="private-folder">
							<div className="folder">
								<img src={FolderIcon} alt="" />
								<h6>Project 1 (Private) </h6>
							</div>
						</Link>
					</Draggable>
				</div>
			</div>

			<div className={imgModal ? 'modal open' : 'modal'} onClick={() => setImgModal(false)}>
				<img src={tempImgSrc} alt="tempImgSrc" />
			</div>
		</div>
	)
}

export default HomePage
