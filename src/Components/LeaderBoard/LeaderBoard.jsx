import React from 'react'
import './LeaderBoardStyle.scss'

class LeaderBoard extends React.Component {
    render() {
        const { winnersList } = this.props
        return (
            <div className="leader-wrapper">
                <span style={{textAlign: 'center'}}>Leader Board</span>
                <ul>{winnersList && winnersList.map(el => {
                    return (
                        <li key={el.id} className='winner'>
                            <p className='winner_name'>{el.winner}</p>
                            <p className='winner_date'>{el.date}</p>
                        </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}


export default LeaderBoard

