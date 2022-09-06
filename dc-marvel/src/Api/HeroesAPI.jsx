import axios from 'axios'

const baseURL='https://fakeapiheroes.herokuapp.com';
const heroAPI = axios.create({baseURL});


 
 export {heroAPI}