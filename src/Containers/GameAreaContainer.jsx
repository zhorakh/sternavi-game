import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "../Redux/Actions"
import Table from "../Components/Table/Table";
import Settings from "../Components/Settings/Settings";

class GameAreaContainer extends React.Component {

    state = {
        mode: [],
        selectValue: '',
        disableControls: false,
        results: [],
        inputValue: '',
        activeSquareIdx: ''
    }

    componentDidMount() {
        const { actions } = this.props
        actions.getGame()
    }

    static getDerivedStateFromProps(props) {
        return {
            mode: props.modeList,
        }
    }

    getOptionList = () => {
        let list = [];
        for (let key in this.state.mode) {
            list = [...list, key]
        }
        return list;
    }

    handleSelectChange = (e) => {
        this.setState({
            selectValue: e.target.value
        })
        let fieldsQuantity = 0;
        if (this.state.mode[e.target.value]) {
            let elementsInRawQuantity = this.state.mode[e.target.value]['field'];
            fieldsQuantity = elementsInRawQuantity * elementsInRawQuantity;
        }
        this.state.results = Array(fieldsQuantity).fill(null)
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    randIntExcep = (min, max, arr) => {
        let num;
        arr = Array.isArray(arr) ? arr : [(isNaN(arr) ? min-1 : arr)];
        while(this.state.results.length){
            num = Math.floor(Math.random() * (max - min)) + min;
            if(arr.indexOf(num) < 0) return num;
        }
    }

    handleGameStart = () => {
        const { actions } = this.props
        let prevIdx = [];
        for (let i = 0; i <= this.state.results.length; i++) {
        setTimeout(() => {
            let idx = this.randIntExcep(0, this.state.results.length, prevIdx);
            this.setState({
                activeSquareIdx: idx
            })

            if(this.state.results[idx] !== 'green') {
                this.state.results[idx] = 'red';
                this.state.results = [...this.state.results]
            }
            prevIdx.push(idx);
            const userArr = []
            const computerArr = []
            if(this.state.results.length === prevIdx.length) {
                (this.state.results).forEach(item => {
                    if(item === 'green') {
                        userArr.push(item)
                    }
                    if(item === 'red') {
                        computerArr.push(item)
                    }
                })
                userArr.length > computerArr.length ? actions.winner(this.state.inputValue) : actions.winner('Computer')
                const date  = new Date();
                const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ]
                const winnerData = {
                    winner: `${userArr.length > computerArr.length ? this.state.inputValue : 'Computer'}`,
                    date: `${date.getHours()}:${date.getMinutes()}; ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
                };
                actions.postWinner({
                    winner: `${winnerData.winner}`,
                    date: `${winnerData.date}`
                })
                actions.onReset()
                this.state.results = []
                this.state.activeSquareIdx = null
            }
        }, this.state.mode[this.state.selectValue].delay * i);
        }
    };

    handleClick = (id) => {
        if (this.state.activeSquareIdx === id) {
            this.state.results[id] = 'green';
            this.state.results = [...this.state.results]
        }
    };

    render() {
        const { selectValue, disableControls, inputValue, results, activeSquareIdx } = this.state
        return(
            <div>
                <Settings
                    selectValue={selectValue}
                    disableControls={disableControls}
                    inputValue={inputValue}
                    isPlayAgain={this.props.isPlayAgain}
                    handleSelectChange={this.handleSelectChange}
                    handleInputChange={this.handleInputChange}
                    getOptionList={this.getOptionList}
                    handleGameStart={this.handleGameStart}
                />
                <Table
                    results={results}
                    activeSquareIdx={activeSquareIdx}
                    selectValue={selectValue}
                    isWin={this.props.isWin}
                    winnerName={this.props.winnerName}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        modeList: store.settings.Reducer.modeList,
        isWin: store.settings.Reducer.isWin,
        winnerName: store.settings.Reducer.winnerName,
        isPlayAgain: store.settings.Reducer.isPlayAgain
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


export default connect(mapStateToProps, mapDispatchToProps)(GameAreaContainer)

