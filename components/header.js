import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';
import debounce from 'debounce-promise'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {users: []};

    this.searchUser = this.searchUser.bind(this);
  }

  searchUser() {
    return fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({users: res})
          console.log('this state', this.state)
        }, (err) => {
          console.error('error on fetch user', err)
        }
      )
  }
  
  render() {
    return (
      <div id="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">findhealth</NavbarBrand>
          <input type="text" className="search-input" placeholder="Digite o que deseja buscar" onChange={debounce(this.searchUser, 500)}/>
        </Navbar>
        <div className="results">
          {this.state.users.map((user, i) =>
            <div className="item" key={i}>
              <p>
                {user.name}
              </p>
            </div>
          )}        
        </div>
        <style jsx>{`
          .navbar-expand-md {
            justify-content: space-between;
          }

          #header {
            margin-bottom: 30px;
          }

          .search-input {
            width: 300px;
          }
        `}</style>          
      </div>
    );
  }
}

export default Header;