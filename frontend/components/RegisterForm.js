import React from 'react';
import Link from 'next/link'
import FormInput from './FormInput';
import Dropdown from './DropDown';
import NormalButton from './NormalButton';
import SubmitButton from './SubmitButton';

class RegisterForm extends React.Component {

  constructor(props){
    super(props);
  }

    state = {
       form: {
        email: '',
        password: '',
        confirmpassword: '',
        nickname: '',
        firstname: '',
        lastname: '',
        country: ''
       }
    }

    handleChange = e => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name] : e.target.value
        }
      })     
    }

    handleSubmit = async e => {
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

        let response = await fetch('http://localhost:8080/register', config)
        let json = await response.json();

        if (json.flag == true){
          alert("sing up successfully")
          location.href = '/'
        }else{
          switch (json.msg){
            case 1: 
              let a = document.getElementById("msg1")
              a.innerHTML = "email is currently taken"
              break;
            case 2: 
            let b = document.getElementById('msg2')
            b.innerHTML = "nick name is currently taken"
            console.log('funciona')
            break;
            case 3: 
            alert("passwords doesn't match")
            break;
          }
        }
      } catch (error) {
        
      }
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit} onChange = {this.handleChange}>
            <div className="modal fade " id="modalSingUp" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                  <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                <div className="form-group row">
                      <label className="col-md-2 col-form-label" htmlFor="firstname">First Name:</label>
                      <div className="col-md-10">
                        <FormInput type = "text" name = "firstname" id = "firstname" hint = "First Name" value = {this.state.firstname} onChange = {this.handleChange}/>
                        
                        </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-md-2 col-form-label" htmlFor="lastname">Last Name:</label>
                      <div className="col-md-10">
                        <FormInput type = "text" name = "lastname" id = "lastname" hint = "Last Name" value = {this.state.lastname} onChange = {this.handleChange}/>
                        
                        </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label" htmlFor="email">Email:</label>
                      <div className="col-md-10">
                        <FormInput type = "text" name = "email" id ="email" hint = "Email"  value = {this.state.email} onChange = {this.handleChange}/>
                        <span className = "text-danger text-center" id = "msg1"> </span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label" htmlFor="password">Password:</label>
                      <div className="col-md-10">
                        <FormInput type = "password" name = "password" id = "password" hint = "Password" value = {this.state.form.password} onChange = {this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label" htmlFor="CPassword">confirm Password:</label>
                      <div className="col-md-10">
                        <FormInput type = "password" name = "confirmpassword" id = "confirmpassword" hint = "Confirm password" value = {this.state.confirmpassword} onChange = {this.handleChange}/>
                        </div>
                    </div>
                    <Dropdown value = {this.state.country} onChange = {this.handleChange} />
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label" htmlFor="username">Nickname:</label>
                      
                      <div className="col-md-10">
                      <FormInput type = "text" name = "nickname" id = "nickname" hint = "Nick Name" value = {this.state.nickname} onChange = {this.handleChange}/>
                      <span className = "text-danger text-center" id = "msg2"> </span>
                      </div>
                    </div>
                </div>
                <div className="modal-footer">
                  <NormalButton layout = "3">Cancel</NormalButton>
                  <SubmitButton layout = "2">Submit</SubmitButton>
                  
                </div>
              </div>
            </div>
          </div>
          </form>
        )
    }
}

export default RegisterForm;