import React, { Component } from "react";
import {Link} from '../routes'
import Head from 'next/head'
import Header from './header';
import dynamic from 'next/dynamic';
import Map from "./map";
import 'bootstrap/dist/css/bootstrap.min.css';
import { inspect } from 'util'

class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  static async getInitialProps({ pathname }) {
    const currentPath = pathname;
    return { currentPath }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { children } = this.props;
      return (
        <div>
          <Head>
            <title>Medsearch</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
          </Head>
          <div className="container-fluid header-container">
            <div className="container">
              <Header />
            </div>
          </div>
      
          <div className="container">
              {children}
          </div>

          {/* <div className="mapa">
          <Map></Map>
          </div> */}
          
          <footer>
            <div className="container">
              {/* Footer */}
            </div>
          </footer>
          <style jsx>{`
            footer {
                margin-top: 20px;
            }
          `}</style>     

          <style jsx global>{`
            body {
                background: url('/static/img/mainbg.png') no-repeat;
            }

            .bold {
              font-weight: bold;
            }

            .header-container {
                background-color: #f8f9fa!important;
            }
          `}</style>               
        </div>
      );
  }
}

export default Layout;