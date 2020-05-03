import React from 'react'
import GameAreaContainer from './Containers/GameAreaContainer'
import LeaderBoardContainer from './Containers/LeaderBoardContainer'

const App = () => {
  return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <GameAreaContainer/>
        <LeaderBoardContainer/>
      </div>
  );
};

export default App
