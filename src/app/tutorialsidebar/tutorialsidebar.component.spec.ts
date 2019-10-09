import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsidebarComponent } from './tutorialsidebar.component';

describe('TutorialsidebarComponent', () => {
  let component: TutorialsidebarComponent;
  let fixture: ComponentFixture<TutorialsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
