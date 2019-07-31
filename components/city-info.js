import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {info} = this.props;

    return (
      <div className="popup-container" style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img width={240} src={info.img} style={{ marginBottom: 15 }} />
        <div>
          <p className="popup-name" style={{ fontSize: 20, fontWeight: 'bold', margin: 0, textAlign: 'center' }}>{info.nome}</p>
          <p className="popup-address" style={{ fontSize: 16, margin: 0, textAlign: 'center' }}>{info.endereco}</p>
        </div>
      </div>
    );
  }
}