import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcomponentnameComponent } from './yourcomponentname.component';

describe('YourcomponentnameComponent', () => {
  let component: YourcomponentnameComponent;
  let fixture: ComponentFixture<YourcomponentnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourcomponentnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourcomponentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
