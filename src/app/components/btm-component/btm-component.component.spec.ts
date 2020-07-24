import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtmComponentComponent } from './btm-component.component';

describe('BtmComponentComponent', () => {
  let component: BtmComponentComponent;
  let fixture: ComponentFixture<BtmComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtmComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
