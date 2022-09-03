import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsApple, BsTwitter } from 'react-icons/bs'
import useMightyMouse from 'react-hook-mighty-mouse'

const Navbar = () => {
	const {
		selectedElement: {
			position: { angle: angleLeftEye },
		},
	} = useMightyMouse(true, 'left-eye', { x: 20, y: 20 })
	const {
		selectedElement: {
			position: { angle: angleRightEye },
		},
	} = useMightyMouse(true, 'right-eye', { x: 20, y: 20 })

	const rotateLeftEye = `rotate(${-angleLeftEye}deg)`
	const rotateRightEye = `rotate(${-angleRightEye}deg)`

	const [time, setTime] = useState(null)

	useEffect(() => {
		const timer = setInterval(() => {
			let time = getCurrentTime()
			setTime(time)
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	const getCurrentTime = () => {
		let today = new Date()
		let hours = (today.getHours() < 10 ? '0' : '') + today.getHours()
		let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()
		let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds()
		return hours + ':' + minutes + ':' + seconds
	}

	return (
		<div className="navbar">
			<ul className="left">
				<li>
					<Link to="/" className="link">
						<div className="icon">
							<BsApple className="apple" />
						</div>

						<div className="text"> Sudo Saiyans</div>
					</Link>
				</li>
				<li>
					<Link to="/info" className="link">
						Info
					</Link>
				</li>
			</ul>

			<div className="center eyes">
				<div id="left-eye" className="eye" style={{ transform: rotateLeftEye }}>
					<div className="pupil" />
				</div>
				<div id="right-eye" className="eye" style={{ transform: rotateRightEye }}>
					<div className="pupil" />
				</div>
			</div>

			<ul className="right">
				<li>
					<a href="https://twitter.com/cargocollective" rel="noreferrer" target="_blank">
						<BsTwitter className="icon" />
					</a>
				</li>
				<li>
					<div className="text">{time}</div>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
