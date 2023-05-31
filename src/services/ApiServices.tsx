import axios from "axios";

export const dataFetching = (url: string) => {
  return axios.get(url, {
    headers: {
      accept: "application/json",
    },
  });
};
