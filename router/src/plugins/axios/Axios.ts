import axios, { AxiosRequestConfig } from "axios"

export default class Axios {
    private instance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }
    public async request<T, D = ResponseResult<T>>(config :AxiosRequestConfig){
        const response = await this.instance.request<D>(config)
        return new Promise((resolve,reject)=>{
            try {
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        }) as Promise<D>
       
    }

    private interceptors() {
        this.interceptorRequest()
        this.interceptorResponse()
    }

    private interceptorRequest(){
        this.instance.interceptors.request.use(config => {
            // Do something before request is sent
            return config;
          }, error => {
            // Do something with request error
            return Promise.reject(error);
          });
    }

    private interceptorResponse(){
        this.instance.interceptors.response.use(response =>{
            // Do something with response data
            return response;
          },  error => {
            // Do something with response error
            return Promise.reject(error);
          });
    }
}