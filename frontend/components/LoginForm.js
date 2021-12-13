import React from 'react'

import FormInput from './FormInput'
import NormalButton from './NormalButton';
import SubmitButton from './SubmitButton';



class LoginForm extends React.Component {

  constructor(props){
    super(props);
    
  }

  message = ""
  


  state = {
    form: {
      email: '',
      password: '',
    }
  }

  handleChange = e =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value
      }
    })
  }

  handleSubmit = async e =>{
    e.preventDefault();
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }

      

      let response = await fetch('http://localhost:8080/authenticate', config)
      let json = await response.json();
      if (json.flag == true){
        this.message = "";
        let a = document.getElementById("errorMessage")
        a.innerHTML = this.message;
        
        location.href = "/home/"+ json.nickname;
      }else{
        this.message = "Please verify your credentials";
        
        let a = document.getElementById("errorMessage")
        a.innerHTML = this.message;
      }
      console.log(json);
      console.log(this.message);
    } catch (error) {
      
    }
  }

    email = React.createRef();
    password = React.createRef();

    complete(){
      console.log("funciona");
    }

    

    

    render() {
        return (
            <div>
                 <div  className="modal fade" id="modalLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content modalStyle">
            <div className="modal-header">
              <img src="img/logo.png" width={50} height={50} />
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close btn-close-white" data-dismiss="modal" aria-label="Close" />
            </div>
            <form onSubmit = {this.handleSubmit} onChange = {this.handleChange} >
            <div className="modal-body">
              <div className="m-3">
                Email<br />
              <FormInput type = "text" hint = "E-mail"  name = "email" value = {this.state.email} onChange = {this.handleChange}   />
               
              </div>
              <div className="m-3">
                Password<br />
                <FormInput type = "password" hint = "Password"  name = "password" value = {this.state.password} onChange = {this.handleChange} /> 
               
              </div>
            </div>
            <div className="modal-footer flex-column">
              {/*<button type="button" class="btn btn-secondary btn-greyNormalState" data-dismiss="modal">Close</button>*/}
              <span class = "text-danger text-center" id = "errorMessage"> <b>{this.message}</b> </span>
              <div>
              
                <SubmitButton  layout = "2" id = "loginBtn"> Login</SubmitButton>
                
                </div>
              <div>Dont have an account? <a href="#" data-toggle="modal" data-target="#modalSingUp" id="singUpLink"  data-dismiss = "modal"><u>Sign
                    up</u></a></div>
              <div><a><u>Forgot password</u></a></div>
            </div>
            </form>
            
          </div>
        </div>
      </div>  
    
            </div>
        );
    }
}



export default LoginForm;