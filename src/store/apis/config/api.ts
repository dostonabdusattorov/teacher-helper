import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Auth } from "../../../constants";
import { BASE_URL } from "./api.constants";
import { TBaseQuery } from "./api.types";
import { getLSItem } from "../../../utils";

export const baseQuery = (url: string = ""): TBaseQuery =>
  fetchBaseQuery({
    baseUrl: `${BASE_URL}/${url}`,
    prepareHeaders: (headers) => {
      try {
        const token = getLSItem(Auth.Token);
        const authorization = headers.get(Auth.Authorization);
        if (token && authorization === null) {
          headers.set(Auth.Authorization, `Bearer Bearer ${token}`);
        }
      } catch (e) {
        // console.error(e);
      }
      return headers;
    },
  });
