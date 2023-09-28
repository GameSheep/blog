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
        url:'https://github.com/GameSheep'  
      },
      {
        title:'QQ',
        icon:'qq',
        url:'https://www.baidu.com'
      }
    ]
  }
  constructor(private router: Router) { }
}
