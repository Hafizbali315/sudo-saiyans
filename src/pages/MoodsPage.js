import { useState } from 'react'

import MoodsImage1 from '../assets/MoodsImage1.png'
import MoodsImage2 from '../assets/MoodsImage2.jpg'
import MoodsImage3 from '../assets/MoodsImage3.jpg'
import MoodsImage4 from '../assets/MoodsImage4.jpg'

const MoodsPage = () => {
	const [imgModal, setImgModal] = useState(false)
	const [tempImgSrc, setTempImgSrc] = useState('')

	const getImg = (imgsrc) => {
		setTempImgSrc(imgsrc)
		setImgModal(true)
	}

	return (
		<div className="moods_page">
			<div className="text">
				<h1>SUDO SAIYANS</h1>

				<h6>AN EXPIRIMENT IN MANAGED LIQUIDITY ON SUDOSWAP</h6>

				<p>
					-- 3333 TOTAL --
					<br />
					-- 333 RESERVED POOL LAUNCH --
					<br />
					-- .03 MINT PRICE --
					<br />
				</p>
			</div>

			<div className="image_gallery">
				<div className="row">
					<div className="large" onClick={() => getImg(MoodsImage1)}>
						<img src={MoodsImage1} alt="MoodsImage1" />
					</div>
					<div className="small" onClick={() => getImg(MoodsImage2)}>
						<img src={MoodsImage2} alt="MoodsImage2" />
					</div>
				</div>

				<div className="row">
					<div className="small" onClick={() => getImg(MoodsImage3)}>
						<img src={MoodsImage3} alt="MoodsImage2" />
					</div>
					<div className="large" onClick={() => getImg(MoodsImage4)}>
						<img src={MoodsImage4} alt="MoodsImage1" />
					</div>
				</div>
			</div>

			<div className={imgModal ? 'modal open' : 'modal'} onClick={() => setImgModal(false)}>
				<img src={tempImgSrc} alt="tempImgSrc" />
			</div>
		</div>
	)
}

export default MoodsPage
