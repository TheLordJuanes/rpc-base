import React, {Component} from 'react';



class NormalButton extends Component {

    chioce(a){
        switch(a){
            case "1": return "btn btn-style";
            case "2": return "btn btn-style2";
            case "3": return "btn btn-style3"
        }
    }
    
    
    render(){
        return (
            <button  onLoad = "click" className={this.chioce(this.props.layout)} type="button" data-toggle={this.props.toggle} data-target={this.props.target} id = {this.props.id}>{this.props.children}</button>

        );
    }
}

export default NormalButton;