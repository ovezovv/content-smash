import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { animalData, catData, dogData } from '../constants';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  params?: {
    type?: string;
  };
}

const api = axios.create();

const mock = new MockAdapter(api, { delayResponse: 100 });

mock.onGet('http://localhost:5000/api/content').reply((config: CustomAxiosRequestConfig) => {
  switch (config.params?.type) {
    case "dog":
      return [200, {
        type: "dog",
        data: dogData
      }];
    case "cat":
      return [200, {
        type: "cat",
        data: catData
      }];
    case "animal":
      return [200, {
        type: "animal",
        data: animalData
      }];
    default:
      return [400, {result: "Couldn't found that type"}]
  }
});

export default api;