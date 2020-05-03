import React from 'react'
import './SettingsStyle.scss'

class Table extends React.Component {

    render() {
        const { selectValue, disableControls, handleSelectChange,
        inputValue, handleInputChange, handleGameStart, getOptionList, isPlayAgain
        } = this.props
        return (
            <div className="settings">
                <select value={selectValue}
                        disabled={disableControls}
                        onChange={handleSelectChange} >
                    <option value="">Pick game mode</option>
                    {getOptionList().map((el, index) => {
                        return <option key={index} value={el}>{el}</option>
                    })}
                </select>
                <input type="text"
                       value={inputValue}
                       placeholder='Enter your name...'
                       disabled={disableControls}
                       onChange={(e) => handleInputChange(e)} />

                <button onClick={() => handleGameStart()}
                        disabled={!(selectValue !== '' && inputValue !== '') || disableControls}>
                    {isPlayAgain ? 'Play' : 'PLay again'}
                </button>
            </div>
        );
    }
}

export default Table

