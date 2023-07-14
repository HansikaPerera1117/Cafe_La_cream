import React, { Component } from 'react'
import { Image , Grid ,Form ,Header ,Segment ,Button,Message} from 'semantic-ui-react'
import './signUp.scss'
import  BG from '../../assets/images/bg-3.png'
import  loginImg from '../../assets/images/signup.jpg'
import  LogoLaCream from '../../assets/images/Logo.png'


export class SignUp extends Component {
  render() {

    const myStyleSignInBg={
      backgroundImage:`url(${BG})`,
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

    return (
        <>
          <div id='signUp' style={myStyleSignInBg}>

            <div className="container">
                <div id='signUpFCont' className='row'>
                <div className="col-5">
                  <div className="row  align-items-center justify-content-center">
                        <div className="col-8">
                            <Image className='shadow rounded'  src={loginImg}/>
                        </div>
                  </div>
                  </div>
                  <div className="col-6">
                    <div className="row  align-items-center justify-content-start">
                        <div className="col-8 bg-light shadow" style={{height:550,borderRadius:20}}>
                            <Grid textAlign='center'style={{ height: 550 }} verticalAlign='middle'>
                              <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h1' textAlign='center' style={{fontFamily:'Arima',fontWeight:'bold'}}>
                                  <Image src={LogoLaCream} /> Sign-Up to your account
                                </Header>
                                <Form size='large' className='mt-3'>
                                  <Segment stacked>
                                    <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
                                    <Form.Input fluid icon='user' iconPosition='left' placeholder='LastName' />
                                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
                                    <Form.Input
                                      fluid
                                      icon='lock'
                                      iconPosition='left'
                                      placeholder='Password'
                                      type='password'
                                    />

                                    <Button fluid size='large' style={{background:'#551e19',color:'#e6b17e'}}>
                                    Sign Up
                                    </Button>
                                  </Segment>
                                </Form>
                                <Message className='mt-5'>
                                Already have an account ? <a href='#' style={{textDecoration:"none",color:"#551e19"}}>Log-In</a>
                                </Message>
                              </Grid.Column>
                            </Grid>
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

export default SignUp
