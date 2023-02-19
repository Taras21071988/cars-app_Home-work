import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['',Validators.required],
    phone: ['',Validators.required],
    car: ['',Validators.required],
  });
  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      gear: "полный",
      engine: 5.2,
      places: 2
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      gear: "полный",
      engine: 6.2,
      places: 2
    },
  ];
  constructor(private fb:FormBuilder) {
  }

  goScroll(target: HTMLElement){
    target.scrollIntoView({behavior: "smooth"});
  }
  onSubmit(){
    if(this.priceForm.valid){
      alert("Спасибо за заявку");
      this.priceForm.reset();
    }
  }

}
