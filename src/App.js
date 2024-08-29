import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import { robots } from './robots';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSaerchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        
        });
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSaerchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;