import axios from "axios";

const API_URL = 'https://ds-deliver-production.up.railway.app';

export default function fetchDelivered(id: number) {
    return axios.put(`${API_URL}/orders/${id}/delivered`)
}