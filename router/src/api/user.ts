import { http } from "@/plugins/axios";

interface User {
    name: string,
    age:number,
    height:string
}

export async function info() {
   return http.request<User>({
        url:'/get',
        method:'GET'
    })
}
