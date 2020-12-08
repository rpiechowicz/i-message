import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectChatName, selectChatId } from './app/features/chatSlice'
import { selectUser } from './app/features/userSlice'
import db, { firestore } from './firebase'

import Message from './Message'

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import { IconButton } from '@material-ui/core'
import FlipMove from 'react-flip-move'
import './Chat.css'

function Chat() {
	const user = useSelector(selectUser)
	const [input, setInput] = useState('')
	const [messages, setMessages] = useState([])
	const chatName = useSelector(selectChatName)
	const chatId = useSelector(selectChatId)

	useEffect(() => {
		if (chatId) {
			db.collection('chats')
				.doc(chatId)
				.collection('messages')
				.orderBy('timestamp', 'desc')
				.onSnapshot(snapshot => {
					setMessages(
						snapshot.docs.map(doc => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				})
		}
	}, [chatId])

	const sendMessage = e => {
		e.preventDefault()
		db.collection('chats').doc(chatId).collection('messages').add({
			timestamp: firestore.FieldValue.serverTimestamp(),
			message: input,
			uid: user.uid,
			photo: user.photo,
			email: user.email,
			displayName: user.displayName,
		})

		setInput('')
	}

	return (
		<div className="chat">
			<div className="chat__header">
				<h4>
					Do:
					<span className="chat__name"> {chatName}</span>
				</h4>
				<strong>Szczegóły</strong>
			</div>

			<div className="chat__messages">
				<FlipMove>
					{messages.map(({ id, data }) => (
						<Message key={id} contents={data} />
					))}
				</FlipMove>
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
