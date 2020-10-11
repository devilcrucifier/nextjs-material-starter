import Cookies from "js-cookie";
import axios from "axios";

const timeout = 60000;

export default function makeAjaxRequest(params) {
  let accessToken = Cookies.get("access_token");

  switch (params.method) {
    case "GET":
      return axios({
        url: params.url,
        method: "get",
        timeout: timeout,
        headers: {
          ...(params.auth && { Authorization: accessToken })
        },
        params: params.queryParams
      });

    case "POST":
      return axios({
        url: params.url,
        method: "post",
        timeout: timeout,
        headers: {
          ...(params.auth && { Authorization: accessToken }),
          ...(params.customHeaders && params.customHeaders)
        },
        data: params.data
      });

    case "PATCH":
      return axios({
        url: params.url,
        method: "patch",
        timeout: timeout,
        headers: {
          ...(params.auth && { Authorization: accessToken }),
          ...(params.customHeaders && params.customHeaders)
        },
        data: params.data
      });

    default:
      return false;
  }
}
