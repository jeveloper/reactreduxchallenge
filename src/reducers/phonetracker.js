import ActionTypes from '../constants/actionTypes'
import isValidPhone from '../utils/validator'
const initialState = {
    entries: [],
    currenttext: '',
    validentry: false

}

export default function phonetracker(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.TEXT_ENTERED:
            return { ...state, currenttext: action.text }

        case ActionTypes.UNDO: {
            let n = { ...state }
            n.currenttext = n.entries.pop()
            return n

        }
        case ActionTypes.VALIDATE: {
            
           return { ...state , validentry: isValidPhone(action.text)}

        }
        case ActionTypes.TRIMTEXT: {
            
            return { ...state , currenttext: ( state.currenttext) && state.currenttext.slice(0,state.currenttext.length -1)}
 
         }
        case ActionTypes.CONTINUE: {
            let n = { ...state }
            n.entries.push(n.currenttext)
            n.currenttext = ''
            n.validentry = false
            return n
        }
        default:
            return state
    }
}
