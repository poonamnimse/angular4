import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
@Injectable()
export class HeroService {
    //  constructor(public name: string, public state = 'inactive') {}
    constructor() {}
    public state = 'inactive';
    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }
}
