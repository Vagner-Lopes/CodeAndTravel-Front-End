import axios from 'axios';

const Api = axios.create({
    //baseURL: 'https://code-and-travel.herokuapp.com/api'
    baseURL: 'https://code-and-travel-api.herokuapp.com/api'
    //baseURL: 'http://localhost:8080/api'
  });

export default Api;