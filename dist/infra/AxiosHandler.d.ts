declare const callAPI: (url: string, params?: {}) => Promise<import("axios").AxiosResponse<any, any>>;
export { callAPI };
