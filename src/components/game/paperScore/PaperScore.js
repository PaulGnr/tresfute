import React from 'react'
import './PaperScore.css'
import Spaces from './spaces/Spaces'

const PaperScore = ({ server, serverId, userId }) => {
  return (
    <div className="PaperScore">
      <Spaces server={server} serverId={serverId} userId={userId} />
    </div>
  );
}

export default PaperScore