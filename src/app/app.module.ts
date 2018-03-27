import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModules} from './material.module';
import {YourcomponentnameComponent} from './yourcomponentname/yourcomponentname.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
import {ContactComponent} from './contact/contact.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Homes} from './home/mock-home';
import {BuslistComponent} from './buslist/buslist.component';
import {HighlightDirective} from './highlight.directive';
import {HeroService} from './hero.service';
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {title: 'Home List'}
    },
    {
        path: 'service',
        component: ServiceComponent,
        data: {title: 'Service'}
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {title: 'contact'}
    },
    {
        path: 'buslist/:sid/:did/:date/:sname/:dname',
        component: BuslistComponent,
        data: {title: 'buslist'}
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: '**', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        YourcomponentnameComponent,
        HomeComponent,
        ServiceComponent,
        ContactComponent,
        BuslistComponent,
        HighlightDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModules,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {}
