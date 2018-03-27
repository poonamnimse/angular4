import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contact = "in contact";
    constructor() {}
    ngOnInit() {
    }
    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
        {text: 'Five', cols: 4, rows: 1, color: 'lightgreen'},
        {text: 'six', cols: 1, rows: 1, color: 'lightblue'},
        {text: 'seven', cols: 2, rows: 1, color: 'yellow'},
        {text: 'eight', cols: 1, rows: 1, color: 'red'},
        {text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt', cols: 4, rows: 1, color: 'lightblue'},
    ];

}
