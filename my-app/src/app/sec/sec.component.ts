import { Component } from '@angular/core';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.component.html',
  styleUrls: ['./sec.component.css']
})
export class SecComponent {
  title = 'Displaying Secondary Component';
  people = ["John","Jack","James","Jordan"];
  frameworks = ["Vue","Angular","React"];
  carsList = [
   {carsBrand: 'Mercedes', carsCountry:'Germany'},
   {carsBrand: 'BMW', carsCountry:'Germany'},
   {carsBrand: 'Ferrari', carsCountry:'Italy'},
   {carsBrand: 'Fiat', carsCountry:'Italy'},
   ];
}
