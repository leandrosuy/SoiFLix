import axios from "axios";

const api = axios.create({
    baseURL: 'http://ec2-52-14-132-73.us-east-2.compute.amazonaws.com:443',
});

export {api};