import axios from "axios";
import { API_CONFIG } from "../config/api";

const api = axios.create(API_CONFIG);

export default api;
