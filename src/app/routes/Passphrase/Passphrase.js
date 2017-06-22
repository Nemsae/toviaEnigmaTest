import React from 'react';
import generatePassword from 'password-generator';

//  TODO: decrease font size
class Passphrase extends React.Component {
  constructor() {
    super();

    this.state = {
      passphrase: '',
    };

    // this.createNewPassphrase = this.createNewPassphrase.bind(this)
  }

  componentWillMount() {
    this.createNewPassphrase();
  }

  createNewPassphrase(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    const passphrase = generatePassword(5, false);
    this.setState({ passphrase });
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px 0px 20px 0px' }}>
        Your Passphrase - <a href="">{this.state.passphrase}</a>
        <br />
        <br />
        <a href="" onClick={this.createNewPassphrase.bind(this)}>
          Generate new Passphrase
        </a>
      </div>
    );
  }
}

export default Passphrase;
