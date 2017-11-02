import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Campaign } from '../campaign.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  campaignId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
     this.route.params.forEach((urlParameters) =>{
       this.campaignId = parseInt(urlParameters['id']);
     })
  }

}
