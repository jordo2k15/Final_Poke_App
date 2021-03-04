import React from 'react';
/*  Original code

class Register extends React.Component {
  state = {
    fName:'',
    lName:'',
    email:'',
    pwd:'',
    pwdConfirm:''
  }
handleChange = (e) => {

}

handleSubmit = (e) => {

}
render (){
  return (
    <div className= 'Register'>
    <h2>Trainer Registration</h2>
    <form className='formRegister'onSubmit = {this.handleSubmit}>
    <input type = 'firstName' name = 'fName' placeholder = 'First Name' required onChange = {this.handleChange}/>
    <input type = 'lastName' name = 'lName' placeholder = 'Last Name' required onChange = {this.handleChange}/>
    <input type = 'email' name = 'email' placeholder = 'Email' required onChange = {this.handleChange}/>
    <input type = 'password' name = 'pwd' placeholder = 'Password' required onChange = {this.handleChange}/>
    <input type = 'password' name = 'pwdConfirm' placeholder = 'Confirm Password' required onChange = {this.handleChange}/>
    <button onSubmit = {this.handleSubmit}>Submit</button>
    </form>
    </div>
  )
}
}
export default Register;
*/
class Register extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(

      <div className="base-container">
        <div className="header">Register</div>
          <div className="content">
              <div className="form">
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" placeholder="username"/>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="email"/>
              </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="password"/>
              </div>
            </div>
          </div>
          <div className="footer">
          <button type="button" className="btn">
          Register</button>
          </div>
        </div>
    )
  }
}
export default Register;
