import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service';

import {HotelService} from '../../services/hotel-service';
import {Hotel} from '../../shared/models/hotel';
import {catchError, map, Observable, of} from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.html',
  standalone: false,
  styleUrl: './hotel-list.css',
})
export class HotelList implements OnInit {
  public  myTiltet:string = 'List of Hotels ';

  hotels$!: Observable<Hotel[] | null>; // Observable pour les hôtels
  error: any;
  loading = true; // Ajout d'une variable pour l'état de chargement
  constructor(private readonly dataService: DataService, private readonly hotelService:HotelService) {}


  ngOnInit(): void {
    this.hotels$ = this.hotelService.getHotels().pipe(
      map(hotels => {
        this.loading = false; // Arrête l'état de chargement en cas de succès
        return hotels;
      }),
      catchError(error => {
        this.loading = false; // Arrête l'état de chargement en cas d'erreur
        this.error = error; // Stocke l'erreur pour affichage
        return of(null); // Retourne un observable de null pour continuer le flux
      })
    );
  }

}
