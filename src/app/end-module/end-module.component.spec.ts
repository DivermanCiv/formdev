import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndModuleComponent } from './end-module.component';

describe('EndModuleComponent', () => {
  let component: EndModuleComponent;
  let fixture: ComponentFixture<EndModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
