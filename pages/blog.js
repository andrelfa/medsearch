import React, { Component } from "react";
import {Link} from '../routes'
import Layout from "../components/layout";

class Blog extends Component {

    static async getInitialProps ({ query }) {
        console.log(query)
        return {}
	}

    componentDidMount() {
        console.log('teste');
    }

    render() {
        return (
            <Layout>
            <div>
                <div className="welcome-text">Welcome to Next.js!</div>
                <Link route='/blog/hello-world'>
                <a>Hesssllo world</a>
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

export default Blog;