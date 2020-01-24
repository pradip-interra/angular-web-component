import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebComponent } from './my-web-component.component';

describe('MyWebComponentComponent', () => {
  let component: MyWebComponent;
  let fixture: ComponentFixture<MyWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
