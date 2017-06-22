import React from 'react';
import generatePassword from 'password-generator';

//  TODO: decrease font size
class Passphrase extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  componentWillMount() {
    const x = generatePassword();
    console.log('x: ', x);
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px 0px 20px 0px' }}>
        Your Passphrase - <a href=''>XYZUH</a>
        <br/>
        <br/>
        <a href="">Generate new Passphrase</a>
      </div>
    );
  }
}

export default Passphrase;
