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
              </div>
            </div>
          </div>
        </div>
        {this.state.unidades && (
          <div className="container">
            <div className="items-found">
              {unidades.map((unidade, index) => {
                return (
                  <Link href={`/unidade?id=${unidade._id}`} as={`/unidade/${unidade._id}`}>
                    <div className="item" key={unidade._id}>
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
          .main-search {
            padding: 50px 0;
            margin-top: 240px;
            background: rgba(91, 127, 149, 0.12);
          }

          p {
            margin: 0;
          }

          .title {
            font-size: 30px;
          }

          .subtitle {
            font-size: 18px;
          }

          .main-search-container {
            margin-top: 30px;
          }

          .main-search-container > * {
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
          }

          .items-found .item img {
            height: 145px;
            width: 145px;
            overflow: hidden;
            border-radius: 20px;
            margin-right: 15px;
            margin: 10px 10px 10px 0;
          }

          .items-found .item .infos .name {
            margin: 0;
            font-size: 28px;
            color: #1b365d;
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
