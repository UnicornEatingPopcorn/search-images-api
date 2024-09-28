import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID go6_DQnKEQ5pMxsHpEhxwG5UdfjIQ3PzvtW3ebIinXk",
  },
});
