import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  listTitle;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewList(title: string) {
    if(title.length == 0) {
      return;
    }
    this.taskService.createList(title).subscribe((response: any) => {
      console.log(response);
    })

    this.router.navigate(["/"]);
    
  }

}
