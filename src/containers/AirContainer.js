import React from 'react'
import Dataentry from '../components/Dataentry'
import ActionTypes from '../constants/actionTypes'

import { connect } from 'react-redux'


class AirContainer extends React.Component {



    cont = () => {
        this.props.dispatch({ type: ActionTypes.CONTINUE })
    }

    undo = () => {
        this.props.dispatch({ type: ActionTypes.UNDO })
    }

    sendtext = (event) => {
        this.props.dispatch({ type: ActionTypes.TEXT_ENTERED, text: event.target.value })
        this.props.dispatch({ type: ActionTypes.VALIDATE, text: event.target.value })
    }
    trimtext = () => {
        this.props.dispatch({ type: ActionTypes.TRIMTEXT })
    }





    render() {

        return (
            <Dataentry
                currvalue={this.props.currvalue}
                validentry={this.props.validentry}
                cont={this.cont}
                undo={this.undo}
                sendtext={this.sendtext}
                trimtext={this.trimtext}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        currvalue: state.phonetracker.currenttext,
        entries: state.phonetracker.entries,
        validentry: state.phonetracker.validentry
    }
}

export default connect(mapStateToProps)(AirContainer)
