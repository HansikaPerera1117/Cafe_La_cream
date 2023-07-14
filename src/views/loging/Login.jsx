import React, { Component } from 'react'
import { Image , Grid ,Form ,Header ,Segment ,Button,Message} from 'semantic-ui-react'
import './login.scss'
import  BG from '../../assets/images/bg-3.png'
import  loginImg from '../../assets/images/login.jpg'
import  LogoLaCream from '../../assets/images/Logo.png'


export class Login extends Component {
  render() {
    return (
        <>
          <div id='login'>
             <Image id='bg-login'src={BG}/>
          </div>

          <div id='loginFCont' className='row'>
            <div className="col-6">
              <div className="row  align-items-center justify-content-end">
                  <div className="col-8 bg-light shadow" style={{height:550,borderRadius:20}}>
                      <Grid textAlign='center'style={{ height: 550 }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                          <Header as='h1' textAlign='center' style={{fontFamily:'Arima',fontWeight:'bold'}}>
                            <Image src={LogoLaCream} /> Log-In to your account
                          </Header>
                          <Form size='large' className='mt-5'>
                            <Segment stacked>
                              <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
                              <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                              />

                              <Button fluid size='large' style={{background:'#551e19',color:'#e6b17e'}}>
                                Login
                              </Button>
                            </Segment>
                          </Form>
                          <Message className='mt-5'>
                            New to us ? <a href='#' style={{textDecoration:"none",color:"#551e19"}}>Sign Up</a>
                          </Message>
                        </Grid.Column>
                      </Grid>
                  </div>
              </div>
            </div>
            <div className="col-5">
            <div className="row  align-items-center justify-content-center">
                  <div className="col-8">
                      <Image className='shadow rounded'  src={loginImg}/>
                  </div>
            </div>
            </div>
            
           
          </div>

        </>
     
    )
  }
}

export default Login
