import React from 'react'

import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

function Sidebarchat() {
	return (
		<div className="sidebarChat">
			<Avatar />

			<div className="sidebarChat__info">
				<h3>Channel name</h3>
				<p>Last mess sent...</p>
				<small>timestamp</small>
			</div>
		</div>
	)
}

export default Sidebarchat
