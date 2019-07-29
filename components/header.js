import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand } from 'reactstrap';
import Link from 'next/link'
import debounce from 'debounce-promise'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      unidades: [],
      showResults: false
    };

    this.searchUnidade = this.searchUnidade.bind(this);
  }

  searchUnidade(event) {
    return fetch("http://localhost:3001/unidade?nome=" + event.target.value)
      .then((res) => res.json())
      .then(
        (res) => {
          if (res) {
            this.setState({
              unidades: res,
              showResults: true
            });
          }
          console.log('this state', this.state)
        }, (err) => {
          console.error('error on fetch user', err)
        }
      )
  }

  render() {
    return (
      <div id="header">
        <Navbar className="nav-header" light expand="md">
          <NavbarBrand href="/">medsearch</NavbarBrand>
          <input type="text" className="search-input" placeholder="Digite o que deseja buscar" onChange={this.searchUnidade}/>
        </Navbar>
        {this.state.unidades.length && this.state.showResults ? (
          <div className="results container">
            {this.state.unidades.map((unidade, i) =>
              <div className="item" key={i} onClick={() => this.setState({ showResults: false })}>
                <Link href={`/unidade?id=${unidade._id}`} as={`/unidade/${unidade._id}`}>
                  <a>
                    {unidade.nome}
                  </a>
                </Link>
              </div>
            )}
          </div>
        ) : null}
        <style jsx>{`
          .navbar-expand-md {
            justify-content: space-between;
          }

          #header {
            position: relative;
          }

          .nav-header {
            background: #f8f9fa !important;
          }

          .search-input {
            width: 300px;
            padding-left: 10px;
          }

          .item {
            margin: 10px 0;
            border-bottom: 1px solid #d2d2d2;
          }

          .item:last-child {
            border-bottom: 0;
          }

          .item a {
            color: #545454;
            padding: 5px 0;
            display: block;
          }

          .item a:hover {
            text-decoration: none;
          }

          .results {
            position: absolute;
            top: 56px;
            border-radius: 0 0 20px 20px;
            z-index: 5;
            background: #f8f9fa;
            box-shadow: 0px 9px 11px -7px;
            padding: 20px 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default Header;