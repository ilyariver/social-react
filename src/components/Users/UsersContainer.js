import {connect} from 'react-redux'
import Users from './Users'

const mapStateToProps = state => {
    const { users } = state.users

    return {users}
}

const mapDispatchToProps = dispatch => {

    return {

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer