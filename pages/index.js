import React, { Component } from "react";
import Link from 'next/link'

import Layout from "../components/layout";

class Index extends Component {
  state = {
    especialidades: [],
    planos: [],
    unidades: []
  };

  componentDidMount() {
    this.getPlanos();
    this.getEspecialidades();
  }

  getPlanos() {
    return fetch("http://localhost:3001/plano")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            planos: res
          });
        },
        err => {
          console.error("error on fetch user", err);
        }
      );
  }

  getEspecialidades() {
    return fetch("http://localhost:3001/especialidade")
      .then(res => res.json())
      .then(
        res => {
          this.setState({
            especialidades: res
          });
        },
        err => {
          console.error("error on fetch user", err);
        }
      );
  }

  searchUnidades() {
    return fetch(
      `http://localhost:3001/unidade?planos=${
        this.state.selectedPlano
      }&especialidades=${this.state.selectedEspecialidade}`
    )
      .then(res => res.json())
      .then(
        res => {
          console.log("res unidade", res);
          this.setState({
            unidades: res
          });
        },
        err => {
          console.error("error on fetch user", err);
        }
      );
  }

  render() {
    const { planos, especialidades, unidades } = this.state;
    let planoItems, especialidadeItems, unidadesItems;

    if (planos.length)
      planoItems = planos.map((plano, index) => (
        <option key={index} value={plano.nome}>
          {plano.nome}
        </option>
      ));
    if (especialidades.length)
      especialidadeItems = especialidades.map((especialidade, index) => (
        <option key={index} value={especialidade.nome}>
          {especialidade.nome}
        </option>
      ));

    return (
      <Layout>
        <div className="container-fluid main-search">
          <div className="container">
            <div className="col-sm-12 col-md-12">
              <p className="title">Encontre o profissional perfeito pra você</p>
              <p className="subtitle">
                Mais de 100 mil unidades e médicos cadastrados.
              </p>
              <div className="main-search-container">
                {/* <input type="text" placeholder="Busque por nome" /> */}
                <select
                  defaultValue=""
                  onChange={event =>
                    this.setState({ selectedPlano: event.target.value })
                  }
                >
                  <option disabled value="">
                    Plano
                  </option>
                  {planoItems}
                </select>
                <select
                  defaultValue=""
                  onChange={event =>
                    this.setState({ selectedEspecialidade: event.target.value })
                  }
                >
                  <option disabled value="">
                    Especialidade
                  </option>
                  {especialidadeItems}
                </select>
                <button
                  type="button"
                  className="search-btn"
                  onClick={() => this.searchUnidades()}
                >
                  Buscar
                </button>
                <p className="generic-horizontal-margin">ou</p>
                <Link href={`/near`}>
                  <button
                    type="button"
                    className="near-me-btn"
                    onClick={() => this.searchUnidades()}
                  >
                    Perto de mim!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {this.state.unidades && (
          <div className="container">
            <div className="items-found">
              {unidades.map((unidade, index) => {
                return (
                  <Link href={`/unidade?id=${unidade._id}`} as={`/unidade/${unidade._id}`} key={unidade._id}>
                    <div className="item">
                      <img src={unidade.img} />
                      <div className="infos">
                        <p className="name">{unidade.nome}</p>
                        <p className="address">{unidade.endereco}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        <style jsx>{`
          .near-me-btn {
            background: #FF9E1B !important;
            color: #fff !important;
            padding: 0 35px !important;
            font-weight: bold;
          }

          .generic-horizontal-margin {
            margin: 0 20px !important;
            display: block !important;
          }

          .main-search {
            padding: 50px 0;
            margin-top: 240px;
            background: rgba(91, 127, 149, 0.12);
          }

          p {
            margin: 0;
          }

          .popup-container {
            display: flex;
            flex-flow: column;
          }

          .title {
            font-size: 30px;
          }

          .subtitle {
            font-size: 18px;
          }

          .main-search-container {
            margin-top: 30px;
            display: flex;
            align-items: center;
          }

          .main-search-container > select, .main-search-container > button {
            height: 49px;
            padding-left: 15px;
            padding-right: 15px;
            margin-right: 5px;
            color: #747474;
            background: #fff;
            border-radius: 5px;
            border: 0;
            box-shadow: 0px 1px 5px 1px #b7b7b7;
            cursor: pointer;
          }

          .items-found {
            margin-top: 35px;
          }

          .items-found .item {
            display: flex;
            align-items: center;
            cursor: pointer;
            border-bottom: 1px solid #dadada;
            padding: 20px 0;
          }

          .items-found .item img {
            height: 145px;
            width: 145px;
            overflow: hidden;
            border-radius: 50%;
            margin-right: 15px;
            margin: 10px 10px 10px 0;
          }

          .items-found .item:hover .infos .name {
            color: #1b365d;
          }

          .items-found .item .infos .name {
            margin: 0;
            font-size: 28px;
            color: #617796;
            font-weight: bold;
          }

          .items-found .item .infos .address {
            margin: 0;
            color: #5b7f95;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
