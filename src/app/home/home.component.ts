import {Component, OnInit} from '@angular/core';
import {Home} from './home';
import {Homes} from './mock-home';
import {FormGroupDirective, FormControl} from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {HeroService} from '../hero.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive <=> active', animate('100ms ease-out'))
        ]),
    ]
})
export class HomeComponent implements OnInit {
    title = 'home component';
    home: Home = {
        id: 1,
        name: 'windstorm',
        age: 34,
        address: 'pune',
        education: 'MCA'
    };
    hero: Hero = {
        id: 1,
        name: 'pooja',
        state: 'active'
    };
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());

    fullName: string = "Bob Bobbington";
    sentense: string = "this is my classRoom";
    //        heroes = HEROES;
    heroes: Hero[];
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    public state = 'inactive';
    toggleState(hero) {
        hero.state = hero.state === 'active' ? 'inactive' : 'active';
    }
    constructor(private heroService: HeroService) {}
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero) {
        console.log("in function", hero);
    }
}
