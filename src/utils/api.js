import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:5000/api"
});

const headers = {
    headers: {
      'Authorization': ''
    }
  }
  export {
    headers
  }