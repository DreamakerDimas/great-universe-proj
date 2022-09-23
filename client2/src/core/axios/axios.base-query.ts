import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export const createAxiosBaseQueryGenerator =
  (axios: AxiosInstance) =>
  (config: AxiosRequestConfig): BaseQueryFn =>
  async (requestOpts) => {
    try {
      const result = await axios({
        ...config,
        ...requestOpts,
      });

      return { data: result.data };
    } catch (reqError) {
      return { error: reqError };
    }
  };
