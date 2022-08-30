import { BsInstagram, BsTwitter, BsYoutube, BsVimeo } from 'react-icons/bs'
import { FaSoundcloud } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

import InfoBackgroundVideo from '../assets/InfoBackgroundVideo.mp4'

const InfoPage = () => {
	return (
		<div className="info_page">
			<video className="background_video" autoPlay muted loop id="background_video" controls={false}>
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
						<a href="https://www.instagram.com/cargoworld/" className="link" target="_blank" rel="noreferrer">
							<BsInstagram className="icon" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/cargocollective" className="link" target="_blank" rel="noreferrer">
							<BsTwitter className="icon" />
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/" className="link" target="_blank" rel="noreferrer">
							<BsYoutube className="icon" />
						</a>
					</li>
					<li>
						<a href="https://soundcloud.com/cargocollective" target="_blank" rel="noreferrer" className="link">
							<FaSoundcloud className="icon" />
						</a>
					</li>
					<li>
						<a href="https://vimeo.com/" target="_blank" rel="noreferrer" className="link">
							<BsVimeo className="icon" />
						</a>
					</li>
					<li>
						<a href="mailto:theericshawn12@gmail.com" target="_blank" rel="noreferrer" className="link">
							<GoMail className="icon" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default InfoPage
