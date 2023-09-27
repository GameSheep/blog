import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PageListComponent {
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  constructor(private http: HttpClient, private msg: NzMessageService) {}

  async ngOnInit(): Promise<void> {
    const urls = ['assets/json/data_1.json'];
    const fetchJSON = async (url: RequestInfo | URL) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };
    try {
      const responses = await Promise.all(urls.map(fetchJSON));
      responses.forEach((data) => {
        console.log(data);
        this.data= data;
      });
      console.log(this.data);
    } catch (error) {
      console.log('Error:', error);
    }
  }

    
  onLoadMore(): void {
    // this.loadingMore = true;
    // this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    // this.http
    //   .get(fakeDataUrl)
    //   .pipe(catchError(() => of({ results: [] })))
    //   .subscribe((res: any) => {
    //     this.data = this.data.concat(res.results);
    //     this.list = [...this.data];
    //     this.loadingMore = false;
    //   });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
