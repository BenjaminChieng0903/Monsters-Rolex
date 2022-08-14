import './App.css';
import { Component } from 'react'
import SearchBox from './component/search-box-component.jsx'
import CardList from './component/card-list-component';
class App extends Component {

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:'',
    }

  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=> this.setState(
    ()=>{
      return {monsters: users} 
    }
  ))
}
  render(){
    const searchFilter = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    });
    const onChangeEvent = (event)=>{
      const searchField = event.target.value.toLocaleLowerCase()
      this.setState(()=>{
        return{ 
         searchField : searchField
        }
      })
    }
    return (
    <div className="App" >
    <h1 className='title'>Monsters Rolex</h1>
      <SearchBox onChangeEvent= {onChangeEvent}/>
      <CardList searchFilter = {searchFilter}/>
    </div>
  )}
  
}

export default App;
