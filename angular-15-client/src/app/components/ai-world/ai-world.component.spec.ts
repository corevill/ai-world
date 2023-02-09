import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiWorldComponent } from './ai-world.component';

describe('AiWorldComponent', () => {
  let component: AiWorldComponent;
  let fixture: ComponentFixture<AiWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
