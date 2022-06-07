import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/Services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {

    this.forecastService.forcast()
  .subscribe(res =>{
    console.log(res);
    
  })
  }

}
