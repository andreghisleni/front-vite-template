import axios from 'axios';

// interface ICallback {
//   (access_token: string): void;
// }
// let isAlreadyFetchingAccessToken = false;
// let subscribers: ICallback[] = [];

const api = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL) || 'http://localhost:3333',
});

// const onAccessTokenFetched = (access_token: string): void => {
//   subscribers = subscribers.filter((callback: ICallback) =>
//     callback(access_token),
//   );
// };

// const addSubscriber = (callback: ICallback): void => {
//   subscribers.push(callback);
// };

// const refreshToken = async (): Promise<string> => {
//   const RToken = localStorage.getItem('@desbravatecAdminWeb:refreshToken');
//   const response = await api.post<{ token: string; refreshToken: string }>(
//     'sessions/refresh',
//     {
//       refreshToken: RToken,
//     },
//   );
//   localStorage.setItem('@desbravatecAdminWeb:token', response.data.token);
//   localStorage.setItem(
//     '@desbravatecAdminWeb:refreshToken',
//     response.data.refreshToken,
//   );

//   api.defaults.headers.authorization = `Bearer ${response.data.token}`;

//   return Promise.resolve(response.data.token);
// };

// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async error => {
//     if (error.response === undefined) return Promise.reject();
//     const {
//       config,
//       response: { status, data },
//     } = error;

//     const originalRequest = config;

//     if (status === 401 && data.message === 'Expired_JWT_token') {
//       if (!isAlreadyFetchingAccessToken) {
//         isAlreadyFetchingAccessToken = true;
//         refreshToken().then(access_token => {
//           isAlreadyFetchingAccessToken = false;
//           onAccessTokenFetched(access_token);
//         });
//       }

//       const retryOriginalRequest = new Promise(resolve => {
//         addSubscriber((access_token: string) => {
//           originalRequest.headers.authorization = `Bearer ${access_token}`;

//           resolve(axios(originalRequest));
//         });
//       });
//       return retryOriginalRequest;
//     }
//     if (status === 401 && data.message === 'Expired_JWT_Refresh_token') {
//       api.defaults.headers.authorization = ``;
//       localStorage.removeItem('@desbravatecAdminWeb:token');
//       localStorage.removeItem('@desbravatecAdminWeb:refreshToken');
//       localStorage.removeItem('@desbravatecAdminWeb:user');
//       window.location.reload();
//     }
//     return Promise.reject(error);
//   },
// );
// api.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error === undefined || !error.response || !error.status) {
//       console.log('Please check your internet connection.');
//     }
//     return Promise.reject(error);
//   },
// );

export default api;
