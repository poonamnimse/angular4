import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Home} from '../home/home';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Apiresponse} from '../apiresponse.interface'
import {Router} from '@angular/router';
import {User}from './service'
@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.css'],
    providers: [ConfigService]
})
export class ServiceComponent{
    constructor() {}
//    user: User[];
    user: User = {
        id: 1,
        name: 'windstorm'
        }
    //model = new User(18,'Chuck Overstreet');

    submitForm(user){
     console.log("=============",user);
    }
}

//    selected = 1;
//    heroes: string[] = [];
//    dest: string;
//    date = new FormControl(new Date());
//    serializedDate = new FormControl((new Date()).toISOString());
//        State: number[]=[];
//    //    setTimeout(function() {
//    //        console.log("setTimeout called!");
//    //    }, 1000);
//    states: State[] = [];
//    home: Home = {
//        id: 10,
//        name: 'service information',
//        address: 'pune',
//        age: 33,
//        education: 'MCA'
//    }
//
//    goBusList() {
//        console.log("in buslist===============");
//        this.router.navigate(['/buslist', 1, 2, '2017-12-14', 'pune', 'nagar']);
//    }
//    myControl: FormControl = new FormControl();
//    options = [];
//    filteredOptions: Observable<string[]>;
//    ngOnInit() {}
//    stateCtrl: FormControl;
//    destCtrl: FormControl;
//    filteredStates: Observable<any[]>;
//    filteredDest: Observable<any[]>;
//
//    constructor(public http: HttpClient, private _configService: ConfigService, private router: Router) {
//        this.stateCtrl = new FormControl();
//        this.filteredStates = this.stateCtrl.valueChanges
//            .pipe(
//            startWith(''),
//            map(state => state ? this.filterStates(state) : this.states.slice())
//            );
//    }
//    myfun() {
//        this.filteredOptions = this.myControl.valueChanges
//            .pipe(
//            startWith(''),
//            map(val => this.filter(val))
//            );
//    }
//    filter(val: string): string[] {
//        return this.options.filter(option =>
//            option.city_name.toLowerCase().indexOf(val.toLowerCase()) === 0);
//    }
//    selectedCity(source) {
//        //        if (source) {
//        this.cityId = source.id;
//        this.sourceCity = source.city_name;
//        //        }
//    }
//    myMethod(state) {
//        let url = this._configService.config.url + 'Trips/getCities';
//        const body = {"city_id": 0, "search_city": state, "city_type": "source"};
//        this._configService.postRequest(url, body);
//        this.http.post<Apiresponse>(url, body, {
//            headers: new HttpHeaders().set('authorization', '54d5dsfds87f7fsd78f7ds8f5dsr7wmk0l').set('Content-Type', 'text/plain', ),
//        }).subscribe(data => {
//            this.states = data.data;
//            this.filterStates(state);
//        });
//    }
//    cityId: number;
//    sourceCity: string;
//    destCity(dest) {
//        if (dest) {
//            if (dest.length >= 2) {
//                let url = this._configService.config.url + 'Trips/getCities';
//                var params = {city_id: this.cityId, search_city: dest, city_type: 'destination'};
//                this.http.post<Apiresponse>(url, params, {
//                    headers: new HttpHeaders().set('authorization', '54d5dsfds87f7fsd78f7ds8f5dsr7wmk0l').set('Content-Type', 'text/plain', ),
//                }).subscribe(data => {
//                    console.log(data.data);
//                    //                    this.options = data.data;
//                    this.myfun();
//                })
//            }
//        }
//    }
//
//    filterStates(name: string) {
//        return this.states.filter(state =>
//            state.city_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
//    }
//}

