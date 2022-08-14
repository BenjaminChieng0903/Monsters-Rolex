import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'
import Card from "./card-component";
class cardList extends Component{

    render(){
        const {searchFilter} = this.props
        return(
            <div className="card-list">
            {
                searchFilter.map((monster)=>{
            return( 
                <Card monster = {monster}/>
                )})
    }
            </div>
              
        )}
    }

export default cardList;