import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AP, // Replace with your API base URL
});
