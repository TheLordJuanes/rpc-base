import React, {Component} from 'react'

class SubmitButton extends Component {


    chioce(a){
        switch(a){
            case "1": return "btn btn-style";
            case "2": return "btn btn-style2";
            case "3": return "btn btn-style3"
        }
    }
    
    render(){
        return(
            <button className={this.chioce(this.props.layout)} type="submit" id = {this.props.id} >{this.props.children}</button>
        );
    }
}

export default SubmitButton;