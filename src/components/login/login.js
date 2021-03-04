import React from 'react';

/*  Original code for login form:

class Login extends React.Component{
  state = {
    email:'',
    pwd:''
  }

  handleChange = (e) =>{
    const {name,value} = e.target
    this.setState({[name]:value})

  }
  handleSubmit = (e) => {


  }
  render(){
    return(
      <div className = 'login'>
      <h2>Log In</h2>
        <form onSubmit = {this.handleSubmit}>
        <input type = 'email' name = 'email' placeholder = 'Email' required onChange = {this.handleChange}/>
        <input type = 'password' name ='pwd' placeholder = 'Password' required onChange = {this.handleChange}/>
        <button onSubmit = {this.handleSubmit}> Log In</button>
        </form>
      </div>
    );
  }
}
export default Login;*/

// New Code:

class Login extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return(
  <div className="base-container">
    <div className="header">Login</div>
      <div className="content">
          <div className="form">
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"/>

          </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"/>
          </div>
        </div>
      </div>
      <div className="footer">
      <button type="button" className="btn">
      Login</button>
      </div>
    </div>
      )
    }
}
export default Login;
