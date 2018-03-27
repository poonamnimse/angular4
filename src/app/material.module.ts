import {NgModule} from '@angular/core';
import {MatButtonModule, MatNativeDateModule, DateAdapter} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatSelectModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatSelectModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatGridListModule
    ],
    declarations: [],
})
export class AppMaterialModules {}
