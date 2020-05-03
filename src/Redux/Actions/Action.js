import {gameAPI} from '../../api/api'

export const getGame = () => {
    return (dispatch) => {
        gameAPI.get(gameAPI.url)
        .then((response) => {
            const data = response.data
            dispatch({
                type: 'GET_GAME_MODES',
                payload: data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const postWinner = (data) => {
    return (dispatch) => {
        gameAPI.post(gameAPI.winnersUrl, data)
        .then((response) => {
            const data = response.data
            dispatch({
                type: 'WINNERS_LIST',
                payload: data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export const getGameWinners = () => {
    return (dispatch) => {
        gameAPI.get(gameAPI.winnersUrl)
        .then((response) => {
            const data = response.data
            dispatch({
                type: 'POST_WINNER',
                payload: data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const onReset = () => {
    return (dispatch) => {
        gameAPI.get(gameAPI.url)
            .then((response) => {
                const data = response.data
                dispatch({
                    type: 'CLEAR_DATA',
                    payload: data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
};

export const winner = (name) => {
    return (dispatch) => {
        dispatch({
            type: 'WINNER_NAME',
            payload: name
        })
    }
};