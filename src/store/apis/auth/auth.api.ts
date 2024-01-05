import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../config";
import {
  LoginReq,
  RegisterReq,
  Res,
  ResendReq,
  ConfirmReq,
  ResetConfirmReq,
  StoreTokenReq,
  AdditionalReq,
  UpdateReq,
  PasswordChangeReq,
} from "./auth.types";
import { getBaseQueryArgs } from "../../../utils";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery("/auth"),
  tagTypes: ["auth"],
  endpoints: ({ query, mutation }) => ({
    register: mutation<Res, RegisterReq>({
      query: ({ locale, ...body }) => ({
        ...getBaseQueryArgs<typeof body>("/register", "POST", body),
        headers: { locale },
      }),
    }),
    login: mutation<Res, LoginReq>({
      query: (body) => getBaseQueryArgs<LoginReq>("/login", "POST", body),
    }),
    resend: mutation<Res, ResendReq>({
      query: (body) => getBaseQueryArgs<ResendReq>("/resend", "POST", body),
    }),
    confirm: mutation<Res, ConfirmReq>({
      query: (body) => getBaseQueryArgs<ConfirmReq>("/confirm", "POST", body),
    }),
    reset: mutation<Res, ResendReq>({
      query: (body) => getBaseQueryArgs<ResendReq>("/reset", "POST", body),
    }),
    resetConfirm: mutation<Res, ResetConfirmReq>({
      query: (body) =>
        getBaseQueryArgs<ResetConfirmReq>("/reset/confirm", "POST", body),
    }),
    logout: mutation<Response, void>({
      query: () => ({ url: "/logout", method: "POST" }),
    }),
    history: query<Res, void>({ query: () => "/history" }),
    me: query<Response, void>({ query: () => "/me" }),
    storeToken: mutation<Res, StoreTokenReq>({
      query: (body) =>
        getBaseQueryArgs<StoreTokenReq>("/store-token", "POST", body),
    }),
    additional: mutation<Response, AdditionalReq>({
      query: (body) =>
        getBaseQueryArgs<AdditionalReq>("/additional", "POST", body),
    }),
    update: mutation<Res, UpdateReq>({
      query: (body) => getBaseQueryArgs<UpdateReq>("/update", "PUT", body),
    }),
    passwordChange: mutation<Res, PasswordChangeReq>({
      query: (body) =>
        getBaseQueryArgs<PasswordChangeReq>("/password/change", "POST", body),
    }),
  }),
});

export const {
  useHistoryQuery,
  useMeQuery,
  useRegisterMutation,
  useLoginMutation,
  useResendMutation,
  useConfirmMutation,
  useResetMutation,
  useResetConfirmMutation,
  useLogoutMutation,
  useStoreTokenMutation,
  useAdditionalMutation,
  useUpdateMutation,
  usePasswordChangeMutation,
} = authApi;
