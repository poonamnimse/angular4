import {Component, OnInit, Optional} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BuslistService} from './buslist.service';
import {ConfigService} from '../config.service';
import {Apiresponse} from '../apiresponse.interface'
// import {}
@Component({
    selector: 'app-buslist',
    templateUrl: './buslist.component.html',
    styleUrls: ['./buslist.component.css'],
    providers: [BuslistService, ConfigService]
})
export class BuslistComponent implements OnInit {
    mode = new FormControl('over');
    shouldRun = true;
    did: number;
    sid: number;
    date: string;
    sname: string;
    dname: string;
    private sub: any;
    busList; busdetail;
    panelOpenState: boolean = false;
    constructor(private route: ActivatedRoute, private _buslistService: BuslistService, private _configService: ConfigService, public http: HttpClient) {

    }
    ngOnChanges(){
        console.log("in ngOnChanges");
    }
    ngDoCheck()	{
        console.log("in ngDoCheck=========");
    }
    ngAfterViewChecked(){
        console.log("in ngAfterViewChecked=========");
    }
    ngOnInit() {
        console.log("call after creating component");
        this.sub = this.route.params.subscribe(params => {
            this.did = +params['did']; // (+) converts string 'id' to a number
            this.sid = +params['sid']; // (+) converts string 'id' to a number
            this.date = params['date'];
            this.sname = params['sname'];
            this.dname = params['dname'];
        });
        let url = this._configService.config.url + 'Trips/filterBuses';
        this.http.post<Apiresponse>(url, this._buslistService.busListObj, {
            headers: new HttpHeaders().set('authorization', '54d5dsfds87f7fsd78f7ds8f5dsr7wmk0l').set('Content-Type', 'text/plain', ),
        }).subscribe(data => {
            this.busList = data.data;
            console.log(this.busList);
        });
    }
    openRightPanel() {
        if (this.shouldRun) {
            this.shouldRun = false;
        } else {
            this.shouldRun = true;
        }
    }
    expandBusDetail(id) {
        if (this.panelOpenState) {
            this.panelOpenState = false;
            this.busdetail = [];
        } else {
            this.panelOpenState = true;
            this.viewDetail();
        }
    }
    viewDetail() {
        let url = this._configService.config.url + 'Seats/seatings';
        let params = {"source_city_id": "1", "destination_city_id": "2", "travel_date": "2017-12-14", "bus_id": "1"}
        this.http.post<Apiresponse>(url, params, {
            headers: new HttpHeaders().set('authorization', '54d5dsfds87f7fsd78f7ds8f5dsr7wmk0l').set('Content-Type', 'text/plain', ),
        }).subscribe(data => {
            this.busdetail = data.data;
            for (let i = 0; i < this.busdetail.length; i++) {
                this.busdetail[i].selected = false;
            }
        });
    }
    selectSeat(eachBus) {
        for (let i = 0; i < this.busdetail.length; i++) {
            if (this.busdetail[i].seat_id == eachBus.seat_id) {
                this.busdetail[i].selected = true;
            }
        }
    }
    custFun() {
        const f = this._buslistService.car;
        console.log(this._buslistService.car);
    }
    mydemo() {
        setTimeout(() => {
            console.log("setTimeout called!")
        }, 500);
        setTimeout(() => {
            console.log("setTimeout called 1!")
        }, 1000);
        setTimeout(()=>{
            console.log("setTimeout called 2!")
        },2000);
        setTimeout(()=>{
            console.log("setTimeout called 3!")
        },3000);
        setTimeout(()=>{
            console.log("setTimeout called 4!")
        },4000);
        setTimeout(()=>{
            console.log("setTimeout called 5!")
        },5000);
    }
}
//let asim = new BuslistComponent();
//asim.custFun();
//asim.mydemo();
