import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';
import AuthService from './auth.service';
import { createAxiosBaseQueryGenerator } from '../axios/axios.base-query';
import DEFAULT_AXIOS_CONFIG from '../axios/default-axios.config';

export type CreateAxiosBaseQuery = (config: AxiosRequestConfig) => BaseQueryFn;
export type GenerateApiUrl = (route: string) => string;

export default class ServicesRegistry {
  public baseApiUrl: string;
  public static instance: ServicesRegistry;
  public authService: AuthService;

  private readonly axios: AxiosInstance;
  private readonly createAxiosBaseQuery: CreateAxiosBaseQuery;

  constructor() {
    this.baseApiUrl = '';

    this.axios = axios.create({
      ...DEFAULT_AXIOS_CONFIG,
      baseURL: this.baseApiUrl,
    });

    this.createAxiosBaseQuery = createAxiosBaseQueryGenerator(this.axios);

    this.authService = new AuthService(this.axios, this.createAxiosBaseQuery, this.generateApiUrl);

    ServicesRegistry.instance = this;
  }

  private readonly generateApiUrl: GenerateApiUrl = (route) => {
    return this.baseApiUrl + route;
  };
}

export const servicesInstance = new ServicesRegistry();
