import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    templateUrl: 'passenger-detail.component.html'
})
export class PassengerDetailComponent implements OnChanges {
    ngOnChanges(changes): void {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    
    constructor() {}

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }
}