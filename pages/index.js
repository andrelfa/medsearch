import React, { Component } from "react";

import Layout from '../components/layout'

class Index extends Component {

  render() {
      return (
        <Layout>
          <div className="container">
            <div className="col-sm-12 col-md-12">
              <div class="main-search-container">
                <input type="text" placeholder="Busque por nome" />
              </div>
            </div>
          </div>
          <style jsx>{`
          .navbar-expand-md {
            justify-content: space-between;
          }

          #header {
            margin-bottom: 30px;
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
            display: inline-block;
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
        </Layout>
      );
  }
}



export default Index;