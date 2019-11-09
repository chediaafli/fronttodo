import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChedyaComponent } from './chedya.component';

describe('ChedyaComponent', () => {
  let component: ChedyaComponent;
  let fixture: ComponentFixture<ChedyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChedyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChedyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
