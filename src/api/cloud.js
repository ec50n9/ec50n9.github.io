import { Cloud } from "laf-client-sdk";
import * as R from "ramda";

export default new Cloud({
  baseUrl: "https://rnnlb9.laf.run",
  dbProxyUrl: "/proxy/client",
  getAccessToken: () => localStorage.getItem("access_token"),
  environment: "h5",
});
