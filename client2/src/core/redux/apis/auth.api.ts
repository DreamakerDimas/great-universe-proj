import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { servicesInstance } from '../../services/services-registry';
import APIS_NAMES from '../../constants/apis/apis-names.constant';

export const authApi = createApi({
  reducerPath: APIS_NAMES.authApi,
  baseQuery: servicesInstance.authService.getBaseQuery(),
  endpoints: (build) => ({
    signIn: servicesInstance.authService.getSignInQuery(build),
  }),
});

export const { useSignInQuery } = authApi;
