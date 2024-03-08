import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';
import { By } from '@angular/platform-browser';
import { MyServiceService } from '../my-service.service';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentComponent,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    //  nameservice =TestBed.inject(MyServiceService);
     fixture.detectChanges();
      
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize value to 2', () => {
    expect(component.value).toEqual(2);
  });
  it('should  value to 3 after click the button  ', () => {
    let btn =fixture.debugElement.query(By.css("#btn"));
    btn.triggerEventHandler("click")
    expect(component.value).toEqual(3);
  });
  it('test that p bind correct value   ', () => {
    let content =fixture.debugElement.query(By.css("#content"));
    let btn =fixture.debugElement.query(By.css("#btn"));
   btn.triggerEventHandler("click")
    fixture.detectChanges();
    expect( content.nativeElement.textContent).toEqual("3");
   });
  
});