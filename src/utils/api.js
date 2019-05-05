import axios from 'axios';

const host = process.env.REACT_APP_HOST;
const defaultHeaders = {

};

export default {
  getPublicKey: () => axios.get(`${host}/api/token`),
  login: (loginBody) => axios.post(`${host}/api/users/login`, loginBody)
}



