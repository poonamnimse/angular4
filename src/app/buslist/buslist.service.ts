import {Injectable} from '@angular/core';

@Injectable()
export class BuslistService {

    constructor() {}
    busListObj = {
        "source_city_id": "1",
        "destination_city_id": "2",
        "travel_date": "2017-12-14",
        "avg_rating": null,
        "departure_time": null,
        "fare": null, "ac": "",
        "seat_type": "", "travels": [],
        "boarding_points": [],
        "dropping_points": [],
        "bus_with_amenities": [],
        "high_rating": 2,
        "bus_with_live_tracking": false,
        "cabs": false, "hot_deals": false,
        "on_time": false, "time_range": [],
        "record_type": "data"
    };
    busdetailObj = {
        "source_city_id": "1",
        "destination_city_id": "2",
        "travel_date": "2017-12-14",
        "bus_id": "1"
    };
    car={
        'first': 'Asim', 
        'last': 'Hussain',
        'age': 39
    }
}
