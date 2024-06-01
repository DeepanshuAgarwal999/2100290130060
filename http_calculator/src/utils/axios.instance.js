import axios from "axios";

const getToken = localStorage.getItem("authcredentials");
let token = null;
if (getToken) {
  token = JSON.parse(getToken)?.access_token;
}
console.log(token);

const AxiosPrivateInstance = axios.create({
  baseURL: "http://20.244.56.144",
  timeout: 500,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});
export { AxiosPrivateInstance };
