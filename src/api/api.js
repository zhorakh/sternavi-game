import axios from 'axios'

export const gameAPI = {
    url: 'https://starnavi-frontend-test-task.herokuapp.com/game-settings',
    winnersUrl: 'https://starnavi-frontend-test-task.herokuapp.com/winners/',
    get: url => {
        return new Promise((resolve, reject) => {
            let headers = {
                'Content-Type': 'application/json',
            }
            axios.get(url, {
                headers: headers
            })
                .then((response) => resolve(response))
                .catch((err) => reject(err))
        })
    },
    post: (winnersUrl, data) => {
        return new Promise((resolve, reject) => {
            let headers = {
                'Content-Type': 'application/json'
            }
            axios.post(winnersUrl, data, {
                headers: headers
            })
                .then((response) => resolve(response))
                .catch((err) => reject(err))
        })
    },
}