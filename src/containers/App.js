import React,{ Component } from 'react';
// import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchFielChange = (event) => {
        this.setState({searchField: event.target.value});
    } 

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>  this.setState({robots: users}))

    }

    render(){
        const robotFiltered = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length === 0 ) {
            return <h1>Loading...</h1>
        }else{

            return (
                <div className="tc">
                    <h1>ROBOT FRIENDS</h1>
                    <SearchBox searchField={this.onSearchFielChange}/>
                    <Scroll>
                      <CardList robots={robotFiltered}/>  
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;