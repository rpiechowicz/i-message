import React from 'react'
import SidebarChat from './SidebarChat'

import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewIcon from '@material-ui/icons/RateReview'
import './Sidebar.css'

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar className="sidebar__avatar" />
				<div className="sidebar__input">
					<SearchIcon />
					<input placeholder="Search..." />
				</div>
				<IconButton variant="outlined" className="sidebar__inputButton">
					<RateReviewIcon />
				</IconButton>
			</div>
			<div className="sidebar__chats">
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	)
}

export default Sidebar
