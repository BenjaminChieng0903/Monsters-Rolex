import { Component } from "react";
import './search-box.styles.css'
class searchBox extends Component{
    render(){
        const {onChangeEvent} = this.props
        return(
            <input className="searchBox"
            placeholder='search monster' 
            type='search' 
            onChange={onChangeEvent
            }
            ></input>
        
        )
    }
}

export default searchBox;