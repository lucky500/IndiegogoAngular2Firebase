import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Campaign } from '../campaign.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  campaigns: Campaign[] = [
    new Campaign("../../assets/images/s270.jpg", "S270: Portable Charging Station & Solar Generator", "Portable 1 AC Port & 4 DC Ports & 1 USB Fast-Charging Port & 3 USB Ports for Charging Everywhere!", "Energy & Green Tech", 50000, 1),
    new Campaign("../../assets/images/wifi.jpg", "VOLTA Charger: 1 Cable To Power All Your Devices", "VOLTA Charger, Your Singular Fast Magnetic Cable To Power All iPhone, Micro USB and USB C Devices", "Phones & Accessories", 3000, 2),
    new Campaign("../../assets/images/charge.png", "S270: Portable Charging Station & Solar Generator", "Portable 1 AC Port & 4 DC Ports & 1 USB Fast-Charging Port & 3 USB Ports for Charging Everywhere!", "Energy & Green Tech", 50000, 3)
  ]

  constructor(private router: Router) { }

  goToDetailPage(clickedCampaign: Campaign){
    this.router.navigate(['campaigns', clickedCampaign.id])
  }

  ngOnInit() {
  }

}
