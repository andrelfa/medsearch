import React, { Component } from "react";
import Router from 'next/router'
import {Link} from '../routes'
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Map from "../components/map";

class Unidade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unidade: null
        }

        Router.events.on('routeChangeComplete', (url) => {
            console.log('teste');
            props.toggle();
        }); 
    }

    componentDidMount() {
        const {router} = this.props
        this.searchUser(router.query.id);
    }

    componentWillReceiveProps() {
        const {router} = this.props
        this.searchUser(router.query.id);        
    }

    searchUser(userId) {
        return fetch(`http://localhost:3001/unidade/${userId}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({unidade: res})
            }, (err) => {
                console.error('error on fetch user', err)
            });
    }

    componentWillReceiveProps(nextProps){
        const {router} = this.props
        this.searchUser(router.query.id);
    }

    render() {
        const { unidade } = this.state;
        const availablePlans = unidade && unidade.planos_atendidos.map((plano) => {
            return (
                <li key={plano}>
                    {plano}
                </li>
            )
        })

        return (
            <Layout>
                <div>
                    {/* {unidade && (
                        <div className="mapa">
                            <Map longitude={unidade.longitude} latitude={unidade.latitude}></Map>
                        </div>
                    )} */}
                    {unidade && (
                        <div className="unidade-container">
                            <div className="mapa">
                                <Map longitude={unidade.longitude} latitude={unidade.latitude}></Map>
                            </div>
                            <div className="info-container">
                                <div className="name-photo">
                                    <div className="name">
                                        <h2>
                                            {unidade.nome}
                                            {/* <img src="/static/img/mainbg.jpg" /> */}
                                        </h2>
                                        <p>{unidade.endereco}</p>
                                    </div>
                                    <div className="photo">
                                        <img src={unidade.img} />
                                    </div>
                                </div>
                                <div className="available-plans">
                                    <p className="bold">Planos atendidos:</p>
                                    {availablePlans && (
                                        <ul className="list-inline">
                                            {availablePlans}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <style jsx>{`
                        .unidade-container {
                            background: #fff;
                            border-radius: 20px 20px 0 0;
                            overflow: hidden;
                        }

                        .info-container {
                            padding: 20px;
                        }                        

                        .info-container p {
                            font-size:
                        }

                        .name-photo {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }                        
                    `}</style>
                </div>
             </Layout>
        );
    }
}

export default withRouter(Unidade);