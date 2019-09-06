import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='player-list'>
          <PlayerCard/>
      </div>
    );
  }
}

export default PlayerList;