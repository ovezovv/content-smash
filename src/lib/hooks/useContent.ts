import { AxiosError } from "axios";
import axios from "../api"

export const useContent = () => {

  const getContentData = async (type: string) => {
    try {
      const data = axios("/api/content", {
        method: "GET",
        params: {
          id: type
        }, 
      });

      if(data){
        console.log(data, 999);
      }

      return data;
    } catch (error) {
      const e = error as AxiosError;
      console.log(e.message);
    }
  }

  return {
    getContentData
  }
}