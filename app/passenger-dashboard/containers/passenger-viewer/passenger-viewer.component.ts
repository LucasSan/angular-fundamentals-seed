import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;
    constructor(private passengerService: PassengerDashboardService) {}

    ngOnInit() {
        this.passengerService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }
}