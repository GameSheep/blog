import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent {
  data ={
    name:'春江潮水',
    image:'',
    menus:[
      {
        title:'归档',
        route:'all'
      },
      {
        title:'搜索',
        route:'search'
      },
      {
        title:'标签',
        route:'tags'
      },
    ],
    friends:[
      {
        title:'github',
        icon:'github',
        url:''
      },
      {
        title:'QQ',
        icon:'qq',
        url:''
      }
    ]
  }
  constructor(private router: Router) { }
}
