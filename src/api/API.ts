import request from "./core/core";

export class API{
    getUsersInfo = () : Promise<any> =>{
        return request({url: 'http://localhost:3001/user'});
    }
}



