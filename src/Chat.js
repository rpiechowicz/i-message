import React, { useState } from 'react'

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import { IconButton } from '@material-ui/core'
import './Chat.css'

function Chat() {
	const [input, setInput] = useState('')

	const sendMessage = e => {
		e.preventDefault()

		setInput('')
	}

	return (
		<div className="chat">
			<div className="chat__header">
				<h4>
					Do:
					<span className="chat__name"> Channel Name</span>
				</h4>
				<strong>Szczegóły</strong>
			</div>

			<div className="chat__messages">
				<h2>jestem wiadomoscia</h2>
			</div>

			<div className="chat__input">
				<form>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						type="text"
						placeholder="Wpisz wiadomość..."
					/>
					<button onClick={sendMessage}>Wyślij</button>
				</form>

				<IconButton>
					<EmojiEmotionsIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default Chat
