import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { animalData, catData, dogData } from '../constants';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  params?: {
    type?: string;
  };
}

const mock = new MockAdapter(axios, { delayResponse: 100 });

mock.onGet('/api/content').reply((config: CustomAxiosRequestConfig) => {
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

export default axios;