const GET_GAME_MODES = "GET_GAME_MODES"
const WINNERS_LIST = "WINNERS_LIST"
const CLEAR_DATA = "CLEAR_DATA"
const POST_WINNER = "POST_WINNER"
const WINNER_NAME = "WINNER_NAME"

let initialState = {
    modeList: [],
    winnersList: [],
    isWin: false,
    winnerName: '',
    isPlayAgain: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_MODES:
            return {
                ...state,
                modeList: action.payload,
            }
        case WINNERS_LIST:
            return {
                ...state,
                winnersList: action.payload,
            }
        case POST_WINNER:
            return {
                ...state,
                winnersList: action.payload,
                isWin: true,
                isPlayAgain: true
            }
        case CLEAR_DATA:
            return {
                ...state,
                modeList: action.payload,
                isWin: false,
                isPlayAgain: false
            }
        case WINNER_NAME:
            return {
                ...state,
                winnerName: action.payload
            }
        default:
            return state
    }
}

export default Reducer