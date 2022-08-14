import { Component } from "react";

class Card extends Component{

    render(){
        const {monster} = this.props
        return(
            <div className="card-container" key={monster.id}>
            <img alt={`monster ${monster.name}`} src = {`https://robohash.org/${monster.id}?set=set2&size=180x180`}/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
            <p>{monster.phone}</p>
            </div>
        )
    }
}

export default Card;