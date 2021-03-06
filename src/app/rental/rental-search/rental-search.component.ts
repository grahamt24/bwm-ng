import { Component, OnInit } from '@angular/core';
import { RentalService } from "../shared/rental.service";
import { ActivatedRoute } from "@angular/router";
import { Rental } from "../shared/rental.model";

import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'bwm-rental-search',
  templateUrl: './rental-search.component.html',
  styleUrls: ['./rental-search.component.scss']
})
export class RentalSearchComponent implements OnInit {

  city: string;
  rentals: Rental[] = [];
  errors: any[] = [];

  constructor(private rentalService: RentalService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.city = params["city"];
      this.getRentalsInCity();
    });
  }

  getRentalsInCity(){
    this.errors = [];
    this.rentals = [];
    const rentalObservable = this.rentalService.getRentalsByCity(this.city);

    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      }
      ,
      () => {

      }
    );
  }

}
