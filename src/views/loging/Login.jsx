import React, { Component } from 'react'
import { Image , Grid ,Form ,Header ,Segment ,Button,Message} from 'semantic-ui-react'
import './login.scss'
import  BG from '../../assets/images/bg-3.png'
import  loginImg from '../../assets/images/login.jpg'
import  LogoLaCream from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import { userLogIn } from '../../redux/action/loginAction'
import {connect} from "react-redux";
// import {withRouter} from "react-router-dom";

import store from '../../redux/storeConfig/store'
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AOS from 'aos';
import 'aos/dist/aos.css';

export class Login extends Component {

  stateLogin = {
    email : 'hansikaperera59@gmail.com',
    password : '12345'
  }

    constructor(props) {
      super(props);
      this.state = {
        inputValueEmail: '',
        inputValuePassword: ''
      };
    }

    componentDidMount() {
      AOS.init();
    }

    
    handleOnLogIn = () =>{
      if(this.state.inputValueEmail === this.stateLogin.email && this.state.inputValuePassword === this.stateLogin.password){
        this.props.userLogIn(true)
      } else{
        this.props.userLogIn(false)
      }
      

      // const { history } = this.props;
      // history.push('/view');

      console.log('Name:', this.state.inputValueEmail);
      console.log('Email:', this.state.inputValuePassword);

      //-----------------notifications-------------------------------------
      const loginValue = store.getState().isLogIn

      loginValue ?
                  toast.success('Login Successfully !😃', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                  :
                  toast.error('Login Unsuccessfully !😟', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
          
      
        // when empty email and password fields
      if(this.state.inputValueEmail === '' && this.state.inputValuePassword === ''){
          toast.warn('Enter Your Email and Password 🧐', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }

    }

    render() {

    const myStyleLoginBg={
      backgroundImage:`url(${BG})`,
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

      let { isLoggedIn } = this.props;
      console.log(isLoggedIn,'prop login');


    return (
        <>
         <ToastContainer
              position="top-right"
              autoClose={3000}
              limit={5}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
           />
          <div id='login' style={myStyleLoginBg}>
            <div className="container">
              <div id='loginFCont' className='row'>
                <div className="col-6">
                  <div className="row  align-items-center justify-content-center">
                      <div data-aos="flip-right" data-aos-delay ="1100" data-aos-duration="2000" className="col-8 bg-light shadow" style={{height:550,borderRadius:20}}>
                          <Grid textAlign='center'style={{ height: 550 }} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                              <Header as='h1' textAlign='center' style={{fontFamily:'Arima',fontWeight:'bold'}}>
                                <Image src={LogoLaCream} /> Log-In to your account
                              </Header>
                              <Form size='large' className='mt-5'>
                                <Segment stacked>
                                  <Form.Input id="inputEmail" fluid icon='mail' iconPosition='left' placeholder='E-mail address'  name="email" value={this.state.inputValueEmail}
                                   onChange={e => this.setState({ inputValueEmail: e.target.value })} />

                                  <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' value={this.state.inputValuePassword} 
                                  onChange={e => this.setState({ inputValuePassword: e.target.value })}/>

                                  <Button fluid size='large' style={{background:'#551e19',color:'#e6b17e'}} onClick={this.handleOnLogIn}>Login</Button> 
                                
                                </Segment>
                              </Form>
                              <Message className='mt-5'>
                                New to us ? <Link style={{textDecoration: "none", color:"#551e19"}} to="/signup">Sign Up</Link>
                              </Message>
                            </Grid.Column>
                          </Grid>
                          
                      </div>
                  </div>
                </div>

                <div className="col-5">
                  <div className="row  align-items-center justify-content-start">
                        <div  data-aos="flip-left" data-aos-duration="2000" className="col-8">
                            <Image className='shadow rounded'  src={loginImg}/>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.isLogIn,'state login');
  return{
    isLoggedIn : state.isLogIn
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogIn : data => dispatch(userLogIn(data))
})

// export default connect(mapStateToProps , mapDispatchToProps)(withRouter(Login));
export default connect(mapStateToProps , mapDispatchToProps)(Login);

