import axios from 'axios';
import ServerActions from './actions/ServerActions';

const API = {
  sendEncrpytion(encryptionPackage) {
    console.log('encryptionPackage: ', encryptionPackage);
    // console.log('sender:API.js ', encryptionPackage.sender);
    // console.log('message:API.js ', encryptionPackage.message);
    // console.log('expirationDate:API.js ', encryptionPackage.expirationDate);
    // console.log('key:API.js ', encryptionPackage.key);
  },
  receiveSearchResults(searchTerm) {
    axios.get(`https://kitsu.io/api/edge//anime?filter[text]=${searchTerm}`, {
      headers : {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    })
    .then((res) => {
      ServerActions.receiveSearchResults(res.data.data);
    })
    .catch((err) => {
      console.log('ERROR! API.receiveSearchResults', err);
    });
  },
};

export default API;
