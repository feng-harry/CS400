import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoDisplayComponent } from './item-info-display.component';

describe('ItemInfoDisplayComponent', () => {
  let component: ItemInfoDisplayComponent;
  let fixture: ComponentFixture<ItemInfoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
