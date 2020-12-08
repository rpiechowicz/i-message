import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from './app/features/userSlice'
import { auth } from './firebase'

import Login from './Login'
import Imessage from './Imessage'
import './App.css'

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				)
			} else {
				dispatch(logout())
			}
		})
	}, [dispatch])

	return <div className="app">{user ? <Imessage /> : <Login />}</div>
}

export default App
