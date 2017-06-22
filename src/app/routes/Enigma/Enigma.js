import React from 'react';

import { Card, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Avatar from 'react-toolbox/lib/avatar';

class Enigma extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      phone: '',
      email: '',
      hint: '',
    };
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  //  TODO: Take first letter of name to populate icon
  //  TODO: Take passphrase component out
  //  TODO: Take card styles out
  render() {
    return (
      <Card style={{ width: '350px', padding: '0px 15px 0px 15px' }}>
        Tovias Enigma
        <div>
          <Input
            type="text"
            label="Name"
            required
            onChange={this.handleChange.bind(this, 'hint')}
            icon={<Avatar icon={<span>S</span>} />}
          />
        </div>
        <Input
          type="text"
          multiline
          label="Message"
          required
          maxLength={120}
          value={this.state.multiline}
          onChange={this.handleChange.bind(this, 'multiline')}
        />
        <Input
          type="text"
          value={this.state.hint}
          label="Expiration Date"
          required
          onChange={this.handleChange.bind(this, 'hint')}
        />
        <CardActions>
          <Button label="ENCRYPT" />
          <Button label="DECRYPT" />
        </CardActions>
      </Card>
    );
  }
}

export default Enigma;
