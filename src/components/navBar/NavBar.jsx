import React, { Component } from 'react'
import { Menu,Image , Header} from 'semantic-ui-react'
import  LogoLaCream from '../../assets/images/Logo.png'
import './navBar.scss'


export class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state

    return (
      <div>
          <Menu id='navBar' pointing secondary className='fixed'>
          <Menu.Item header>
            {/* <div className='ms-3 mb-1' style={{height:40,width:40}}>
            <Image src={LogoLaCream} /> 
            </div> */}
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
            <Menu.Item
              name='LogIn'
              icon='user'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='SignIn'
              icon='sign-in'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

         
               
          
      </div>
    )
  }
}

export default NavBar
