import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import '../styles/PlayerList.css'

class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({
          players: res.data
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='player-list'>
          {this.state.players.map(player => {
              return <PlayerCard key={player.id} name={player.name} country={player.country} />
          })}
      </div>
    );
  }
}

export default PlayerList;