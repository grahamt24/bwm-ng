import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { NgPipesModule } from "ngx-pipes";

import { ManageComponent } from "./manage.component";
import { ManageBookingComponent } from "./manage-booking/manage-booking.component";
import { ManageRentalComponent } from "./manage-rental/manage-rental.component";
import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';
import { FormatDatePipe } from "../common/pipes/format-date.pipe";

import { RentalService } from "../rental/shared/rental.service";
import { BookingService } from "../booking/shared/booking.service";

import { AuthGuard } from "../auth/shared/auth.guard";

const routes: Routes = [
  {path: "manage", component: ManageComponent,
    children:[
    {path: "bookings", component: ManageBookingComponent, canActivate: [AuthGuard]},
    {path: "rentals", component: ManageRentalComponent, canActivate: [AuthGuard]}
  ]}
];

@NgModule({
  declarations: [
    ManageComponent,
    ManageBookingComponent,
    ManageRentalComponent,
    FormatDatePipe,
    ManageRentalBookingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgPipesModule
  ],
  providers: [
    RentalService,
    BookingService
  ]
})

export class ManageModule {}

