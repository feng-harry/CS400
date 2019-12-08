import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoGetComponent } from './item-info-get.component';

describe('ItemInfoGetComponent', () => {
  let component: ItemInfoGetComponent;
  let fixture: ComponentFixture<ItemInfoGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
