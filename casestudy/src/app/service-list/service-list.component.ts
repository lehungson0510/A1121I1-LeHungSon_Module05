import {Component, OnInit} from '@angular/core';
import {IService} from "../model/IService";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  serviceList: IService[] = [{
    id: 1,
    name: 'OCEAN SUITE',
    area: 85.8,
    image: 'https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr-1047x563.jpg'
  },
    {
      id: 2,
      name: 'OCEAN DELUXE',
      area: 30.7,
      image: 'https://onedanang.vn/Content/UserUploads/Images/Hotels/5/6/Rooms/medium_Vietnam_Danang_Furama_Ocean%20Studio%20Suite.jpg'
    },
    {
      id: 3,
      name: 'LAGOON SUPERIOR',
      area: 40.1,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M-1047x563.jpg'
    },
    {
      id: 4,
      name: 'GARDEN SUPERIOR',
      area: 40.1,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M-1047x563.jpg'
    },
    {
      id: 5,
      name: 'GARDEN DELUXE',
      area: 43.7,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1_M2-1047x563.jpg'
    },
    {
      id: 6,
      name: 'PRESIDENTIAL SUITE',
      area: 130,
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-M2-1047x563.jpg'
    },
    {
      id: 7,
      name: 'BEACH FRONT VILLAS',
      area: 900,
      image: 'https://dulichbiendanang.net/wp-content/uploads/2020/12/gioi-thieu-ve-furama-resort-Da-Nang-1.jpg'
    },
    {
      id: 8,
      name: 'POOL VILLAS',
      area: 320,
      image: 'http://cdn.home-designing.com/wp-content/uploads/2015/11/glass-house-with-pool.jpg'
    },
    {
      id: 9,
      name: 'OCEAN STUDIO SUITE',
      area: 40.1,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/159963011.jpg?k=5c0da3bc6f3713139c1d631115a1feab2c13e75f13890aac64d86d044ab41ddb&o=&hp=1'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
