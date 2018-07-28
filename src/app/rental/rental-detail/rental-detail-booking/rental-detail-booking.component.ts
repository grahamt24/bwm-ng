import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.scss']
})
export class RentalDetailBookingComponent implements OnInit {

  @Input() price: number;

  daterange: any = {};

  options: any = {
    locale: { format: 'MM-DD-YYYY' },
    alwaysShowCalendars: false,
    opens: "left"
  };

  constructor() { }

  ngOnInit() {
  }

  selectedDate(value: any, datepicker?: any) {
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manipulate your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

}