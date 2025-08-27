import axios from "axios";
import { TApiResponse } from "@/types";

const api = axios.create({
  baseURL: "https://randomuser.me",
  timeout: 10000,
});

export const userApi = {
  getRandomUser: async (): Promise<TApiResponse> => {
    const response = await api.get<TApiResponse>("/api/?results=1&nat=us");
    return response.data;
  },
};
