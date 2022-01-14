import React from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

class NavContainer extends React.Component {
	render() {
		return <Nav {...this.props} optionsNavMenuList={this.optionsNavMenuList}/>
	}
}

const mapStateToProps = state => {
	return {
		profileId: state.auth.data.id
	}
}

export default connect(mapStateToProps,)(NavContainer)
