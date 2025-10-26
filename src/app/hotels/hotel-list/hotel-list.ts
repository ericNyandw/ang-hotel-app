import {Component, OnInit} from '@angular/core';


import {HotelService} from '../../services/hotel-service';
import {catchError, map, Observable, of} from 'rxjs';
import {AppState} from '../../shared/models/app-state';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.html',
  standalone: false,
  styleUrl: './hotel-list.css',
})
export class HotelList implements OnInit {
  public  myTiltet:string = 'List of Hotels ';
  appState$!:Observable<AppState>;
  constructor(private readonly hotelService:HotelService) {}

  ngOnInit(): void {
    this.appState$ = this.hotelService.getHotels().pipe(
      map(hotels => ({hotels, loading: false, error: null})),
      catchError(error => of({hotels: null, loading: false, error}))
    );
  }

}
