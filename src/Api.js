import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://code-and-travel.herokuapp.com/api'
  });

export default Api;