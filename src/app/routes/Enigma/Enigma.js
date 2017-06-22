import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';


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
  render() {
    return (
      <Card style={{ width: '350px'}}>
        Tovia's Enigma
        <Input
          type="text"
          label="Name"
          required
          onChange={this.handleChange.bind(this, 'hint')}
          icon={<span>S</span>}
        />
        <Input
          type="text"
          multiline
          label="Message *"
          maxLength={120}
          value={this.state.multiline}
          onChange={this.handleChange.bind(this, 'multiline')}
        />
        <Input
          type="date"
          value={this.state.hint}
          label="Expiration Date *"
          hint="With Hint"
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
