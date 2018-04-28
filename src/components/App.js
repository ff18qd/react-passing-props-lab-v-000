import React from 'react';

import FruitBasket from './FruitBasket';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


// const App = () => <FruitBasket />;
class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
          filters: [],
          fruit: [],
          currentFilter: null,
        };
    }
    
    
    componentWillMount() {
        this.fetchFilters();
        
    }
    
    componentDidMount() {
        this.fetchFruit();
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }
    
    fetchFruit = () => {
        fetch('/api/fruit')
            .then(response => response.json())
            .then(fruit => this.setState({ fruit }));
    }
    
    
    updateFilterCallback = (event) => {
        // console.log('update')
        // console.log(event.target.value)
        this.setState({ currentFilter: event.target.value })
    }
    
    render() {
        return (
            <div>
                <FruitBasket filters={this.state.filters} fruit={this.state.fruit} updateFilterCallback={this.updateFilterCallback} currentFilter={this.state.currentFilter}/>
            </div>
        )
    }
}

export default App;
