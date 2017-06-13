import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        channel: {
          icon: 'assets/img/server1.png',
          name: 'Server Health',
          color: '#27ae60'
        },
        timestamp: 'November 5, 1955',
        resource: 'assets/img/advance-card-bttf.png',
        details: 'High CPU utilization, 89%.',
        source: 'http://kartau.com',
        title: 'High CPU utilization.',
        type: 'assets/img/alert.png'
      },
      {
        channel: {
          icon: 'assets/img/server2.png',
          name: 'Home Automation',
          color: '#f39c12'
        },
        timestamp: '07/07/2017 04:10:12',
        resource: 'assets/img/advance-card-tmntr.jpg',
        details: 'Living room status: Temp - 20C, Humidity 12%.',
        source: 'pi',
        title: 'Living room status',
        type: 'assets/img/notification.jpg'
      },
      {
        channel: {
          icon: 'assets/img/server1.png',
          name: 'Server Health',
          color: '#27ae60'
        },
        timestamp: '07/06/2017 14:12:22',
        resource: 'assets/img/advance-card-jp.jpg',
        details: 'Confirmation email send has encountered an issue and failed to send. Stack trace: blah blah.',
        source: 'jerseysmadeeasy.com',
        title: 'Email send exception thrown',
        type: 'assets/img/error.png'
      }
    ];

  }
}
