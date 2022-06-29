import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInfosModuleComponent } from './detailed-infos-module.component';

describe('DetailedInfosModuleComponent', () => {
  let component: DetailedInfosModuleComponent;
  let fixture: ComponentFixture<DetailedInfosModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedInfosModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedInfosModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
