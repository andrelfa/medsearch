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
            // props.toggle();
            console.log('teste');
        }); 
    }

    componentDidMount() {
        const {router} = this.props
        this.searchUser(router.query.id);
    }

    searchUser(userId) {
        return fetch(`http://localhost:3001/unidade/${userId}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('res unidade', res);
                this.setState({unidade: res})
            }, (err) => {
                console.error('error on fetch user', err)
            });
    }

    componentWillReceiveProps(nextProps){
        console.log('router id', nextProps);
        this.searchUser(nextProps.router.query.id);
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

        const availableSpecialties = unidade && unidade.especialidades_atendidas.map((especialidade) => {
          return (
              <li key={especialidade}>
                  {especialidade}
              </li>
          )
        })        

        return (
            <Layout>
                <div>
                    {unidade && (
                        <div className="unidade-container">
                            <div className="mapa">
                                <Map unidade={unidade}></Map>
                            </div>
                            <div className="container info-container">
                                <div className="name-photo">
                                    <div className="name">
                                        <h2>
                                            {unidade.nome}
                                        </h2>
                                        <p>{unidade.endereco}</p>
                                    </div>
                                    <div className="photo">
                                        <img src={unidade.img} />
                                    </div>
                                </div>
                                <div className="average-price">
                                  <p className="bold">Preço médio de consulta:</p>
                                  <span>R$ 149,00</span>
                                </div>
                                <div className="available-plans">
                                    <p className="bold">Planos atendidos:</p>
                                    {availablePlans && (
                                        <ul className="list-inline">
                                            {availablePlans}
                                        </ul>
                                    )}
                                </div>
                                <div className="available-specialties">
                                    <p className="bold">Especialidades atendidas:</p>
                                    {availableSpecialties && (
                                        <ul className="list-inline">
                                            {availableSpecialties}
                                        </ul>
                                    )}
                                </div> 
                                <div className="actions">
                                    <button type="button" className="default-btn">
                                      Entre em contato
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <style jsx>{`

                        .actions {
                          margin-top: 15px;
                        }

                        .default-btn {
                          background: 0;
                          border: 2px solid #5B7F95;
                          border-radius: 25px;
                          padding: 9px 31px;
                          color: #5B7F95;
                          transition: 0.5s;
                        }

                        .default-btn:hover {
                          background: #5B7F95;
                          border: 2px solid #5B7F95;
                          border-radius: 25px;
                          padding: 9px 31px;
                          color: #fff;
                        }                        

                        .average-price {
                          margin-bottom: 20px;                          
                        }

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