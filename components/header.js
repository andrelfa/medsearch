import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';
import Link from 'next/link'
import debounce from 'debounce-promise'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {unidades: []};

    this.searchUnidade = this.searchUnidade.bind(this);
  }

  searchUnidade() {
    return fetch("http://localhost:3001/unidade")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({unidades: res})
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
          <NavbarBrand href="/">medsearch</NavbarBrand>
          <input type="text" className="search-input" placeholder="Digite o que deseja buscar" onChange={debounce(this.searchUnidade, 500)}/>
        </Navbar>
        <div className="results">
          {this.state.unidades.map((unidade, i) =>
            <div className="item" key={i}>
              <Link href={`/unidade?id=${unidade._id}`} as={`/unidade/${unidade._id}`}>
                <a>
                  {unidade.nome}
                </a>
              </Link>
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
            padding-left: 10px;            
          }
        `}</style>          
      </div>
    );
  }
}

export default Header;