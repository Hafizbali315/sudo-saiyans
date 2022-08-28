import { Link } from 'react-router-dom'
import { BsInstagram, BsTwitter, BsYoutube, BsVimeo } from 'react-icons/bs'
import { FaSoundcloud } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

import InfoBackgroundVideo from '../assets/InfoBackgroundVideo.mp4'

const InfoPage = () => {
	return (
		<div className="info_page">
			<video className="background_video" autoPlay muted loop id="background_video" controls="nodownload">
				<source src={InfoBackgroundVideo} type="video/mp4" />
			</video>

			<div className="content">
				<h1>
					TRUE STUDIO
					<br />
					Via Dei Condotti, 93, 00187 Roma
				</h1>

				<ul className="social_links">
					<li>
						<Link to="https://www.instagram.com/cargoworld/" className="link" target="_blank">
							<BsInstagram className="icon" />
						</Link>
					</li>
					<li>
						<Link to="https://twitter.com/cargocollective" className="link" target="_blank">
							<BsTwitter className="icon" />
						</Link>
					</li>
					<li>
						<Link to="https://www.youtube.com/" className="link" target="_blank">
							<BsYoutube className="icon" />
						</Link>
					</li>
					<li>
						<Link to="https://soundcloud.com/cargocollective" target="_blank" className="link">
							<FaSoundcloud className="icon" />
						</Link>
					</li>
					<li>
						<Link to="https://vimeo.com/" target="_blank" className="link">
							<BsVimeo className="icon" />
						</Link>
					</li>
					<li>
						<Link to="mailto:theericshawn12@gmail.com" target="_blank" className="link">
							<GoMail className="icon" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default InfoPage
