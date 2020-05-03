import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../Redux/Actions"
import LeaderBoard from "../Components/LeaderBoard/LeaderBoard";

class LeaderBoardContainer extends React.Component {

    componentDidMount() {
        const { actions } = this.props
        actions.getGameWinners()
    }

    render() {
        const { winnersList } = this.props
        return (
            <LeaderBoard winnersList={winnersList}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        winnersList: store.settings.Reducer.winnersList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                ...actions
            }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardContainer)

