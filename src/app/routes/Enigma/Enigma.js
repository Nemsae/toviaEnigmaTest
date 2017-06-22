import React from 'react';

import { Card, CardActions } from 'react-toolbox/lib/card';
// import { Button } from 'react-toolbox/lib/button';
// import Input from 'react-toolbox/lib/input';
// import Avatar from 'react-toolbox/lib/avatar';
// import DatePicker from 'react-toolbox/lib/date_picker';

import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

import Passphrase from '../Passphrase';
import EncryptionModal from '../EncryptionModal';

import APIactions from '../../actions/APIactions';

const todaysDate = new Date(Date.now());
const minimumDate = new Date(todaysDate.setDate(todaysDate.getDate() - 1));

//  TODO: Take first letter of name to populate icon
//  TODO: Take passphrase component out
//  TODO: Take card styles out
//  TODO: Fix chevron icons of DatePicker
//  TODO: Take out console.logs()
//  TODO: Validate that inputs are filled before encrypting!

class Enigma extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      message: '',
      date: '',
      passphrase: '',
      dialogActive: false,
    };

    this.handlePassphrase = this.handlePassphrase.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(type, val) {
    this.setState({ [type]: val });
  }

  handlePassphrase(passphrase) {
    this.setState({ passphrase });
  }

  handleToggle(e) {
    const id = e.target.id;
    if (id === 'encrypt') {
      console.log('ENCRYPT ME!');
      this.sendEncrpytionRequest();
    }
    this.setState({ dialogActive: !this.state.dialogActive });
  }

  sendEncrpytionRequest() {
    const encryptionPackage = {
      sender: this.state.name,
      message: this.state.message,
      expirationDate: this.state.date,
      key: this.state.passphrase,
    };

    APIactions.encryptMessage(encryptionPackage);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '350px', padding: '15px 15px 0px 15px' }}>
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
            required
            value={this.state.date}
            sundayFirstDayOfWeek
          />
          <CardActions>
            <Button label="ENCRYPT" id="encrypt" onClick={this.handleToggle} />
            <Button label="DECRYPT" id="decrypt" onClick={this.handleToggle} />
          </CardActions>
        </Card>
        <EncryptionModal handleToggle={this.handleToggle} active={this.state.dialogActive} />
        <Passphrase handlePassphrase={this.handlePassphrase} />
      </div>
    );
  }
}

export default Enigma;
