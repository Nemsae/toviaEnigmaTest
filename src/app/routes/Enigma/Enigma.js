import React from 'react';

import { Card, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Avatar from 'react-toolbox/lib/avatar';
import DatePicker from 'react-toolbox/lib/date_picker';

// const datetime = new Date(2015, 10, 16);
// console.log('datetime: ', datetime);
// const minimumDate = new Date(new Date(datetime).setDate(8));
// console.log('minimumDate: ', minimumDate);

const todaysDate = new Date(Date.now());
const minimumDate = new Date(todaysDate.setDate(todaysDate.getDate() - 1));
console.log('minimumDate: ', minimumDate);

//  TODO: Take first letter of name to populate icon
//  TODO: Take passphrase component out
//  TODO: Take card styles out
//  TODO: Fix chevron icons of DatePicker

class Enigma extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      message: '',
      date: '',
    };
  }

  handleChange(name, value) {
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    // const minimumDate = Date.now();


    return (
      <Card style={{ width: '350px', padding: '0px 15px 0px 15px' }}>
        Tovias Enigma
        <Input
          type="text"
          label="Name"
          value={this.state.name}
          required
          onChange={this.handleChange.bind(this, 'name')}
          icon={<Avatar icon={<span>{this.state.name[0]}</span>} />}
        />
        <Input
          type="text"
          label="Message"
          value={this.state.message}
          multiline
          required
          maxLength={120}
          value={this.state.message}
          onChange={this.handleChange.bind(this, 'message')}
        />
        <DatePicker
          label="Expiration date"
          minDate={minimumDate}
          onChange={this.handleChange.bind(this, 'date')}
          value={this.state.date}
          sundayFirstDayOfWeek
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
