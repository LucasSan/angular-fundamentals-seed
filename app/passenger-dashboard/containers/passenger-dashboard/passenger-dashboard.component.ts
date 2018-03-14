import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    // styleUrls: ['passenger-dashboard.component.scss'],
    templateUrl: 'passenger-dashboard.component.html'
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(private passengerService: PassengerDashboardService) {}
    ngOnInit(): void {
        this.passengers = this.passengerService.getPassengers();
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id;
        });
    }
}