import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {"personel": [], "selectedCountry": null};
    this.changeCountry = this.changeCountry.bind(this);
  }

  componentDidMount() {
    axios.get(this.props.endpoint + '/personel.json')
      .then(response => {
        this.setState({"personel": response.data, "selectedCountry": response.data[0].country})
      });
  }

  countries() {
    return this.state.personel ? [...new Set(this.state.personel.map(p => p.country))] : [];
  }

  names() {
    return this.state.selectedCountry
      ? this.state.personel.filter(a => a.country == this.state.selectedCountry).map(a => a.name)
      : [];
  }

  changeCountry(country) {
    this.setState({"selectedCountry": country.target.value});
  }

  render() {
    const countries = this.countries().map(c => <option key={c} value={c}>{c}</option>);
    const names = this.names().map(n => <option key={n} value={n}>{n}</option>);

    return (
      <main>
        <h2>Omegapoint Personel</h2>
        <div style={{"float": "left", "marginRight": "20px"}}>
          <label htmlFor="country" style={{"display": "block"}}>Country</label>
          <select id="country" style={{"display": "block"}} onChange={this.changeCountry}>
            {countries}
          </select>
        </div>
        <div style={{"float": "left", "marginRight": "20px"}}>
          <label htmlFor="name" style={{"display": "block"}}>Name</label>
          <select id="name" style={{"display": "block"}}>
            {names}
          </select>
        </div>
        <label htmlFor="fire" style={{"display": "block"}}>Action</label>
        <button id="fire" onClick={() => alert("FIRED!")} style={{"display": "block"}}>Fire!
        </button>
      </main>
    )
  }
}

axios.get("settings.json").then(settings => {
  ReactDOM.render(<App endpoint={settings.data["REST_ENDPOINT"]}/>,
    document.getElementById('content'));
});
