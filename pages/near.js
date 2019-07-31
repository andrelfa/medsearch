import React, { Component } from "react";
import Router from "next/router";
import { Link } from "../routes";
import Layout from "../components/layout";
import { withRouter } from "next/router";
import Map from "../components/map";

class Near extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unidades: [{"planos_atendidos":["Assim","Unimed","Bradesco","Sulamérica","SUS"],"_id":"5cd4612a48f0b77129a5c3ff","nome":"Amacor","especialidades_atendidas":["Administração em Saúde","Alergia e Imunologia","Alergia e Imunologia Pediátrica"],"endereco":"Ed. Largo da Carioca, R. Uruguaiana, 10 - 1906 - Centro","estado":"RJ","latitude":-22.9061338,"longitude":-43.1806796,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","__v":0},{"planos_atendidos":["Assim","Unimed","Bradesco","Sulamérica"],"_id":"5cd4617c48f0b77129a5c400","nome":"Hospital da Ordem do Carmo","especialidades_atendidas":["Cirurgia Vascular","Anestesiologia","Acupuntura"],"endereco":"R. Riachuelo, 43 - Centro, Rio de Janeiro - RJ, 20230-010","estado":"RJ","latitude":-22.913755,"longitude":-43.181488,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","__v":0},{"planos_atendidos":["Unimed","Bradesco"],"_id":"5cd4667b48f0b77129a5c401","nome":"Centro Médico Pastore","especialidades_atendidas":["Cirurgia da Mão","Cirurgia do Aparelho Digestivo","Cirurgia Geral","SUS"],"endereco":"R. do Ouvidor, 191 - Centro, Rio de Janeiro - RJ, 20040-030","estado":"RJ","latitude":-22.9049583,"longitude":-43.1825501,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg","__v":0},{"planos_atendidos":["Golden Cross","Assim"],"_id":"5cd466e148f0b77129a5c402","nome":"Policlínica Geral do Rio de Janeiro","especialidades_atendidas":["Acupuntura","Administração em Saúde","Alergia e Imunologia Pediátrica"],"estado":"RJ","endereco":"Av. Nilo Peçanha, 38 - Centro (Castelo, Rio de Janeiro - RJ, 20020-100","latitude":-22.9063021,"longitude":-43.1770165,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Golden Cross","Assim","Unimed","SUS"],"_id":"5d40be96468c03620488e732","nome":"Clínica Médicos","especialidades_atendidas":["Acupuntura","Administração em Saúde","Alergia e Imunologia Pediátrica","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"Av. Rio Branco, 173 - A - Centro, Rio de Janeiro - RJ, 20040-007","latitude":-22.9131741,"longitude":-43.1841723,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","Unimed","Amil"],"_id":"5d40bf91468c03620488e789","nome":"Clínica de Medicina Nuclear Villela Pedras - Unidade Centro","especialidades_atendidas":["Acupuntura","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"R. México, 98 - 3º e 4º andares - Centro, Rio de Janeiro - RJ, 20031-141","latitude":-22.9092303,"longitude":-43.1770917,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","Unimed","Amil","SUS"],"_id":"5d40bfcc468c03620488e7a6","nome":"Clínica Interface","especialidades_atendidas":["Acupuntura","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"R. Sen. Dantas, 20 - sala 708 - Centro, Rio de Janeiro - RJ, 20031-203","latitude":-22.9115042,"longitude":-43.1787773,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","SUS"],"_id":"5d40c02e468c03620488e7d4","nome":"Dra. Bárbara Lúcia Costa","especialidades_atendidas":["Acupuntura","Administração em Saúde","Alergia e Imunologia Pediátrica","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"Av. Rio Branco, 277 - sala 1506 - Cinelândia, Rio de Janeiro - RJ, 20040-009","latitude":-22.9118962,"longitude":-43.1758815,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Golden Cross","Assim","Unimed","SUS"],"_id":"5d40c0b6468c03620488e80b","nome":"Instituto de Neurocirurgia","especialidades_atendidas":["Acupuntura","Administração em Saúde","Alergia e Imunologia Pediátrica","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"R. Santa Luzia, 206 - Centro, Rio de Janeiro - RJ, 20020-022","latitude":-22.9075369,"longitude":-43.1730081,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","Unimed","Amil","SUS"],"_id":"5d40c127468c03620488e835","nome":"Centro Oftalmológico de Tratamento e Exames","especialidades_atendidas":["Acupuntura","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"Av. Rio Branco, 185 - sl 506 - Centro, Rio de Janeiro - RJ, 20040-007","latitude":-22.9075451,"longitude":-43.1777179,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","Unimed","Amil","SUS"],"_id":"5d40c173468c03620488e859","nome":"Equilíbrio Corporal","especialidades_atendidas":["Acupuntura","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"Condomínio do Edifício Bokel - Av. Rio Branco, 245 - Centro, Rio de Janeiro - RJ, 20040-009","latitude":-22.910935,"longitude":-43.1773727,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","Unimed","Amil","SUS"],"_id":"5d40c1d5468c03620488e885","nome":"Clínica Benchimol","especialidades_atendidas":["Acupuntura","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"Rua Senador Dantas, no 7, 5o e 6 andar - Centro, Rio de Janeiro - RJ, 20031-202","latitude":-22.9119049,"longitude":-43.1788536,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0},{"planos_atendidos":["Bradesco","Unimed","Amil","SUS"],"_id":"5d40c238468c03620488e8b4","nome":"Hospital Piedade","especialidades_atendidas":["Acupuntura","Angiologia","Cirurgia Geral"],"estado":"RJ","endereco":"Av. Pres. Antônio Carlos, 10 - Centro, Rio de Janeiro - RJ, 20020-010","latitude":-22.9068467,"longitude":-43.1750852,"img":"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg","__v":0}]
    };

  }

  componentDidMount() {
    console.log('this unidades', this.state.unidades);
  }

  render() {
    return (
      <Layout>
        <div>
          <Map unidades={this.state.unidades}></Map>
          {this.state.unidades && (
            <div className="container">
              <div className="items-found">
                {this.state.unidades.map((unidade, index) => {
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
        </div>
      </Layout>
    );
  }
}

export default withRouter(Near);
