import React from 'react'
import { auth, provider } from './firebase'

import { Button } from '@material-ui/core'
import './Login.css'

function Login() {
	const singIn = () => {
		auth.signInWithPopup(provider).catch(error => alert(error.message))
	}

	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://cdn2.downdetector.com/static/uploads/c/300/69849/IMessage_Icon.png"
					alt=""
				/>
				<h1>iMessage</h1>
			</div>

			<Button onClick={singIn}>Zaloguj się</Button>
		</div>
	)
}

export default Login
