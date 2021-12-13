import React, {Component} from 'react';
import LoginForm from './LoginForm';
import NormalButton from './NormalButton';

class Navbar extends Component {

  
    render(){


        return(
            <nav className="navbar navbar-expand-sm bg-navbar">
  <div className="container-fluid">
    <img src="img/logo.png" width="50" height="50"/>
    <form className="d-flex ">
      <NormalButton layout = "1" toggle = "modal" target = "#modalLogin">Login</NormalButton>
      <NormalButton layout = "2" toggle = "modal" target = "#modalSingUp" >Sing up</NormalButton>
    </form>  
  </div>
</nav>
        );
    }
}
export default Navbar;