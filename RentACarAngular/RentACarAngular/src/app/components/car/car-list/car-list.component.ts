import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../services/car.service';
import {Car} from '../../../models/entityModels/car';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  dataLoaded = false;
  removedCar: Car;

  constructor(private carService: CarService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setSelectedCar(car: Car) {
    this.removedCar = car;
  }

  removeCar() {
    this.carService.removeCar(this.removedCar).subscribe(response => {
      this.toastrService.success(response.message);
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    });
  }
}
