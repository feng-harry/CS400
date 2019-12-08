import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoMainComponent } from './item-info-main.component';

describe('ItemInfoMainComponent', () => {
  let component: ItemInfoMainComponent;
  let fixture: ComponentFixture<ItemInfoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
