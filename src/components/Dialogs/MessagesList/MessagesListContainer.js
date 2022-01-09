import React from 'react'
import MessagesList from './MessagesList'
import {connect} from 'react-redux'

class MessagesListContainer extends React.Component {

	render() {
		return <MessagesList {...this.props}/>
	}
}

const mapStateToProps = state => {
	return {
		dialogs: state.dialogs.messagesData
	}
}

export default connect(mapStateToProps,)(MessagesListContainer)
