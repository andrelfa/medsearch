import React, { Component } from "react";
import {Link} from '../routes'
import Layout from "../components/layout";
import { withRouter } from "next/router";

class Unidade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unidade: null
        }
    }

    componentDidMount() {
        const {router} = this.props
        this.searchUser(router.query.id);
    }

    searchUser(userId) {
        return fetch(`http://localhost:3001/unidade/${userId}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({unidade: res})
                console.log('this state', this.state)
            }, (err) => {
                console.error('error on fetch user', err)
            });
    }

    componentWillReceiveProps(nextProps){
        const {router} = this.props
        this.searchUser(router.query.id);
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