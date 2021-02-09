import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItboardComponent } from './itboard.component';

describe('ItboardComponent', () => {
  let component: ItboardComponent;
  let fixture: ComponentFixture<ItboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItboardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
