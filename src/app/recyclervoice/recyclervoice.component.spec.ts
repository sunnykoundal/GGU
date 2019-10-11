import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclervoiceComponent } from './recyclervoice.component';

describe('RecyclervoiceComponent', () => {
  let component: RecyclervoiceComponent;
  let fixture: ComponentFixture<RecyclervoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclervoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclervoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
