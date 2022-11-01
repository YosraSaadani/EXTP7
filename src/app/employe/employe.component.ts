import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employeForm!:FormGroup;
  fonctions:string[]=["Ingénieur", "Directeur", "PDG", "Secrétaire", "Technicien"];
  constructor(private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.employeForm = this.formBuilder.nonNullable.group({
      matricule:[0],
      nom: [''],
      fonction: ['Ingénieur'],
      departement: ['IT'],
      })
      

  }
}
