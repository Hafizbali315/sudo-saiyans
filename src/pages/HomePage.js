import { useState } from 'react'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'
import { TbLetterX } from 'react-icons/tb'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

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
	const [showMintModal, setShowMintModal] = useState(false)
	const [tempImgSrc, setTempImgSrc] = useState('')
	const [mintAmount, setMintAmount] = useState(0)

	const getImg = (imgsrc) => {
		setTempImgSrc(imgsrc)
		setImgModal(true)
	}

	const increment = () => {
		if (mintAmount >= 0) {
			setMintAmount(mintAmount + 1)
		}
	}

	const decrement = () => {
		if (mintAmount > 0) {
			setMintAmount(mintAmount - 1)
		}
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
						<a href="https://twitter.com/cargocollective" rel="noreferrer" target="_blank" className="telegram">
							<img src={Telegram} alt="" />
							<h6>Telegram.exe</h6>
						</a>
					</Draggable>

					<Draggable bounds="parent">
						<div className="about">
							<Link to="/Moods">
								<img src={AboutIcon} alt="" />
								<h6>About.txt</h6>
							</Link>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<div className="mint" onClick={() => setShowMintModal(true)}>
							<img src={MintIcon} alt="" />
							<h6>mint.exe</h6>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<div className="info">
							<Link to="/info">
								<img src={InfoIcon} alt="" />
								<h6>Info</h6>
							</Link>
						</div>
					</Draggable>

					<Draggable bounds="parent">
						<div className="folder">
							<Link to="private-folder">
								<img src={FolderIcon} alt="" />
								<h6>Project 1 (Private) </h6>
							</Link>
						</div>
					</Draggable>
				</div>

				<div className="sm_screen">
					<div className="row">
						<Link to="/info">
							<div className="info">
								<img src={InfoIcon} alt="" />
								<h6>Info</h6>
							</div>
						</Link>

						<Link to="/Moods">
							<div className="about">
								<img src={AboutIcon} alt="" />
								<h6>About.txt</h6>
							</div>
						</Link>

						<Link to="/private-folder">
							<div className="folder">
								<img src={FolderIcon} alt="" />
								<h6>Project 1 (Private) </h6>
							</div>
						</Link>

						<a href="https://twitter.com/cargocollective" rel="noreferrer" target="_blank" className="telegram">
							<img src={Telegram} alt="" />
							<h6>Telegram.exe</h6>
						</a>
					</div>

					<div className="row">
						<div className="mint" onClick={() => setShowMintModal(true)}>
							<img src={MintIcon} alt="" />
							<h6>mint.exe</h6>
						</div>

						<div className="experiments" onClick={() => getImg(Pc)}>
							<img src={Pc} alt="" />
							<h6>Experiments</h6>
						</div>

						<div className="logo" onClick={() => getImg(SudoSaiyans)}>
							<img src={SudoSaiyans} alt="SudoSaiyans" />
							<h6>logo.jpg</h6>
						</div>
					</div>
				</div>
			</div>

			<div className={imgModal ? 'modal open' : 'modal'} onClick={() => setImgModal(false)}>
				<img src={tempImgSrc} alt="tempImgSrc" />
			</div>

			<div className={showMintModal ? 'mint_modal open' : 'mint_modal'}>
				<div className="mint_card">
					<div className="top_bar">
						<TbLetterX className="cancel_icon" onClick={() => setShowMintModal(false)} />
					</div>

					<div className="content">
						<div className="input_container">
							<input type="number" placeholder="Enter Amount to Mint" value={mintAmount} />
							<div className="plus_minus_buttons">
								<AiOutlinePlus className="increment" onClick={increment} />
								<AiOutlineMinus className="decrement" onClick={decrement} />
							</div>
						</div>

						<div className="buttons_row">
							<button>Mint</button>
							<button>Connect</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
