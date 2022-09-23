import { AxiosInstance } from 'axios';
import { CreateAxiosBaseQuery, GenerateApiUrl } from './services-registry';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import APIS_NAMES from '../constants/apis/apis-names.constant';

export default class AuthService {
  private readonly axios: AxiosInstance;
  private readonly createAxiosBaseQuery: CreateAxiosBaseQuery;
  private readonly generateApiUrl: GenerateApiUrl;

  constructor(
    axios: AxiosInstance,
    createAxiosBaseQuery: CreateAxiosBaseQuery,
    generateApiUrl: GenerateApiUrl,
  ) {
    this.axios = axios;
    this.createAxiosBaseQuery = createAxiosBaseQuery;
    this.generateApiUrl = generateApiUrl;
  }

  public getBaseQuery() {
    return this.createAxiosBaseQuery({
      baseURL: this.generateApiUrl('/auth'),
    });
  }

  // requests
  public getSignInQuery(build: EndpointBuilder<BaseQueryFn, never, APIS_NAMES.authApi>) {
    return build.query<[], { login: string }>({
      query: (body) => ({
        url: '/login',
        method: 'post',
        body,
      }),
    });
  }
}
