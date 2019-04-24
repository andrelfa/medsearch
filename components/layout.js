import React, { Component } from "react";
import {Link} from '../routes'
import Head from 'next/head'
import Header from './header';
import dynamic from 'next/dynamic';
import Map from "./map";
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  render(children) {
      return (
        <div>
          <Head>
            <title>Test</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
          </Head>
          {/* <header>
            <nav>
              <Link route='/'>
                <a>Home</a>
              </Link>{' '}
              |
              <Link route='/about'>
                <a>About</a>
              </Link>{' '}
              |
              <Link route='/blog'>
                <a>Blog</a>
              </Link>
              |
              {' '}
              <Link route='/blog/hello-world'>
                  <a>contact me</a>
              </Link>{' '}
            </nav>
          </header> */}
          <div className="container">
              <Header />
          </div>
      
          <div className="container">
              {children}
          </div>

          <div className="mapa">
          <Map></Map>
          </div>
          
          <footer>
            <div className="container">
              Footer
            </div>
          </footer>
          <style jsx>{`
            footer {
                margin-top: 20px;
            }
          `}</style>     
        </div>
      );
  }
}

export default Layout;