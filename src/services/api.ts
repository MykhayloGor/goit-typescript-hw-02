import axios from "axios";
import type { AxiosInstance } from "axios";
import type { ImageResponse } from "../components/App/App.types";

const API_KEY = "70Pa9QmjMm5Wq9zL7SQcHaEHnqWu-sd94C6D30OS3Xs";

const unsplashApi: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetchImages = async (
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<ImageResponse> => {
  const response = await unsplashApi.get<ImageResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};
