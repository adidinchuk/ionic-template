import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "icon": "assets/img/speakers/bear.jpg",
    "description": "Burt is a Bear.",
    "priority": "High",
    "notificationTypes": "Warining"
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Burt Bear",
        "icon": "assets/img/speakers/bear.jpg",
        "description": "Burt is a Bear.",
        "priority": "High",
        "notificationTypes": "Warining"
      },
      {
        "name": "Charlie Cheetah",
        "icon": "assets/img/speakers/cheetah.jpg",
        "description": "Charlie is a Cheetah.",
        "priority": "High",
        "notificationTypes": "Warining"
      },
      {
        "name": "Donald Duck",
        "icon": "assets/img/speakers/duck.jpg",
        "description": "Donald is a Duck.",
        "priority": "High",
        "notificationTypes": "Warining"
      },
      {
        "name": "Eva Eagle",
        "icon": "assets/img/speakers/eagle.jpg",
        "description": "Eva is an Eagle.",
        "priority": "High",
        "notificationTypes": "Warining"
      },
      {
        "name": "Ellie Elephant",
        "icon": "assets/img/speakers/elephant.jpg",
        "description": "Ellie is an Elephant.",
        "priority": "High",
        "notificationTypes": "Warining"
      },
      {
        "name": "Molly Mouse",
        "icon": "assets/img/speakers/mouse.jpg",
        "description": "Molly is a Mouse.",
        "priority": "High",
        "notificationTypes": "Warining"
      },
      {
        "name": "Paul Puppy",
        "icon": "assets/img/speakers/puppy.jpg",
        "description": "Paul is a Puppy.",
        "priority": "High",
        "notificationTypes": "Warining"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
