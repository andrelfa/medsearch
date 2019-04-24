import React, { Component } from "react";
import {Link} from '../routes'
import Layout from "../components/layout";
import { withRouter } from "next/router";

class Unidade extends Component {

    componentDidMount() {
        const {router} = this.props
        console.log(router)
    }

    render() {
        return (
            <Layout>
                <div>
                    <div className="welcome-text">Unidade!</div>
                    <Link route='/blog/hello-world'>
                    <a>Hello unidade</a>
                    </Link>
                    <style jsx>{`
                    .welcome-text {
                        font-size: 40px;
                    }
                    `}</style>             
                </div>
             </Layout>
        );
    }
}

export default withRouter(Unidade);