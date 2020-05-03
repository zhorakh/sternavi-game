import React from 'react'
import './TableStyle.scss'

class Table extends React.Component {

    render() {
        const { results, activeSquareIdx, selectValue, handleClick, winnerName, isWin } = this.props
        const text = 'The winner is ';
        return (
            <div>
                {<div>{isWin ? '' : text + winnerName}</div>}
                <ul className="game-area">
                    {results.length > 0 && results.map((el, id) => {
                        const isActive = activeSquareIdx === id ? 'active' : '';
                        const green = el === 'green' ? 'green' : '';
                        const red = el === 'red' ? 'red' : '';
                        const color = green ? green : isActive ? isActive : red;
                        return <li key={id} onClick={() => handleClick(id)} className={`elem-${selectValue} ${color}`} />
                    })}
                </ul>
            </div>
        );
    }
}

export default Table

