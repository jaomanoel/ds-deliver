import axios from "axios";

const API_URL = 'https://ds-deliver-production.up.railway.app';

export default function featchOrders() {
    return axios.get(`${API_URL}/orders`)
}