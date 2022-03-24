import axios from 'axios';

const Api = axios.create({
    //baseURL: 'https://code-and-travel.herokuapp.com/api'
    baseURL: 'https://code-and-travel-api.herokuapp.com/swagger-ui/'
  });

export default Api;