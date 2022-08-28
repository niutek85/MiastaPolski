import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiastaComponent } from './miasta.component';

describe('MiastaComponent', () => {
  let component: MiastaComponent;
  let fixture: ComponentFixture<MiastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiastaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
