import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any[];
  tasks: any[];

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // GET TASKS
      this.taskService.getTasks(params.listId).subscribe((tasks: any[]) => {
        this.tasks = tasks;
      })
    })
    // GET LISTS
    this.taskService.getLists().subscribe((lists: any[]) => {
      this.lists = lists;
    })
    
  }



}
