import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class ConfigService {

    constructor(public http: HttpClient) {}
    config =
    {
        'url': 'http://redbus-api.wideinfosystems.com/appApi/',
    }
    postRequest(url,params) {
        console.log(url,params,'params============');
    return this.http.post(url, params, {
            headers: new HttpHeaders().set('authorization', '54d5dsfds87f7fsd78f7ds8f5dsr7wmk0l').set('Content-Type', 'text/plain', ),
        }).subscribe(data => {
           return data;
        });
    }
}
