import { redirect } from "react-router-dom";
import { getLSItem } from "../utils";
import { Auth, Routes } from "../constants";

export const homeLoader = async () => {
  if (!getLSItem(Auth.Token)) {
    return redirect(Routes.Login);
  }
  return null;
};

export const HomeRoute = () => {
  return <>Home</>;
};
