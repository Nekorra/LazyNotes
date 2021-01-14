import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MynotesPage } from './mynotes.page';

describe('MynotesPage', () => {
  let component: MynotesPage;
  let fixture: ComponentFixture<MynotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MynotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
