import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {
lesemployes!:Employe[];

  constructor(private serviceEmployee:EmployeService) { }

  ngOnInit(): void {
this.lesemployes=this.serviceEmployee.getEmployes();
  }

}
