import React, { Component } from 'react'
import { Menu,Image , Header} from 'semantic-ui-react'
import  LogoLaCream from '../../assets/images/Logo.png'
import './navBar.scss'
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import profileImg from '../../assets/images/profile.jpg'
import { userLogIn } from '../../redux/action/loginAction'


export class NavBar extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleOnLogOut = () => {
      this.props.userLogIn(false)
    }

    render() {
      const { activeItem } = this.state

      // const { isLoggedIn } = this.state;

      const { isLoggedIn } = this.props;
      console.log(isLoggedIn,'prop nav bar');

    return (
      <div>
          <Menu id='navBar' pointing secondary className='fixed'>
          <Menu.Item header>
            <Header as='h1' style={{fontSize:18,fontFamily:'Overlock SC',fontWeight:'bold',color :"#e6b17e"}}>
              <Image src={LogoLaCream} /> Cafe La Cream
             </Header>
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='About Us'
            active={activeItem === 'About Us'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Products'
            active={activeItem === 'Products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Reservation'
            active={activeItem === 'Reservation'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Locations'
            active={activeItem === 'Locations'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='Explore La Cream'
            active={activeItem === 'Explore La Cream'}
            onClick={this.handleItemClick}
          />
          </Menu.Menu>
          <Menu.Menu position='right'>

          {isLoggedIn ? (
             <div className='d-flex mt-2'>
            <div className='mt-4 me-3'>
              <Image src={profileImg} avatar />
              <span style={{ color:'#e6b17e'}}>Hansika Perera</span>
            </div>

            <Link style={{textDecoration: "none", marginTop:15}} to="/" onClick={this.handleOnLogOut}>
            <Menu.Item
              name='LogOut'
              icon='power off'
              active={activeItem === 'LogOut'}
              onClick={this.handleItemClick}
            />
            </Link>
            
            </div>
          ) : (
            <div className='d-flex'>
                <Link style={{textDecoration: "none", marginTop:20}} to="/login">
                <Menu.Item
                  name='LogIn'
                  icon='user'
                  active={activeItem === 'LogIn'}
                  onClick={this.handleItemClick}
                />
                </Link>

                <Link style={{textDecoration: "none", marginTop:20}} to="/signup">
                <Menu.Item
                  name='SignIn'
                  icon='sign-in'
                  active={activeItem === 'SignIn'}
                  onClick={this.handleItemClick}
                />
                </Link>
            </div>
          )}

            
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.isLogIn,'state nav bar');
  return{
    isLoggedIn : state.isLogIn
  }
};

const mapDispatchToProps = (dispatch) => ({
  userLogIn : data => dispatch(userLogIn(data))
})

export default connect(mapStateToProps , mapDispatchToProps)(NavBar)
