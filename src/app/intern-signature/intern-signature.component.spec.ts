import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternSignatureComponent } from './intern-signature.component';

describe('InternSignatureComponent', () => {
  let component: InternSignatureComponent;
  let fixture: ComponentFixture<InternSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternSignatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
