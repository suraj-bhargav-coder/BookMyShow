import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router";
import { Injectable } from '@angular/core';
import { CitiesEnum } from 'src/app/enums/cities.enum'
var routings = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
    {
        path: "login",
        loadChildren: () => import("../login/login.module").then(m => m.LoginModule),
    },

        {
			path: "activities",
			loadChildren: () => import("../master/activities/activity.module").then(m => m.ActivityModule)
		},
        {
			path: "bookings",
			loadChildren: () => import("../master/bookings/booking.module").then(m => m.BookingModule)
		},
        {
			path: "booking-type",
			loadChildren: () => import("../master/booking-type/booking-type.module").then(m => m.BookingTypeModule)
		},

		
		
		{
			path: "city",
			loadChildren: () => import("src/app/enums/cities.enum").then(m => m.CitiesEnum)
		},




        {
			path: "events",
			loadChildren: () => import("../master/events/event.module").then(m => m.EventModule)
		},
        {
			path: "invoices",
			loadChildren: () => import("../master/invoices/invoice.module").then(m => m.InvoiceModule)
		},
        {
			path: "monuments",
			loadChildren: () => import("../master/monuments/monument.module").then(m => m.MonumentModule)
		},
        {
			path: "movies",
			loadChildren: () => import("../master/movies/movie.module").then(m => m.MovieModule)
		},
        {
			path: "multiplexes",
			loadChildren: () => import("../master/multiplexes/multiplex.module").then(m => m.MultiplexModule)
		},
        {
			path: "offers",
			loadChildren: () => import("../master/offers/offer.module").then(m => m.OfferModule)
		},
        {
			path: "order-summaries",
			loadChildren: () => import("../master/order-summaries/order-summary.module").then(m => m.OrderSummaryModule)
		},
        {
			path: "otps",
			loadChildren: () => import("../master/otps/otp.module").then(m => m.OtpModule)
		},
        {
			path: "screenings",
			loadChildren: () => import("../master/screenings/screening.module").then(m => m.ScreeningModule)
		},
        {
			path: "screens",
			loadChildren: () => import("../master/screens/screen.module").then(m => m.ScreenModule)
		},
        {
			path: "seats",
			loadChildren: () => import("../master/seats/seat.module").then(m => m.SeatModule)
		},
        {
			path: "shows",
			loadChildren: () => import("../master/shows/show.module").then(m => m.ShowModule)
		},
        {
			path: "sports",
			loadChildren: () => import("../master/sports/sport.module").then(m => m.SportModule)
		},
        {
			path: "users",
			loadChildren: () => import("../master/users/user.module").then(m => m.UserModule)
		}]
//generated code
//])


export const ROUTES: Routes = routings;







console.log(ROUTES)

