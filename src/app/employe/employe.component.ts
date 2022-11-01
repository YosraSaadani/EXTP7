import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employeForm!:FormGroup;
  fonctions:string[]=["Ingénieur", "Directeur", "PDG", "Secrétaire", "Technicien"];
  constructor(private formBuilder:FormBuilder, private employeService:EmployeService) { }


  ngOnInit(): void {
    this.employeForm = this.formBuilder.nonNullable.group({
      matricule:[0],
      nom: [''],
      fonction: ['Ingénieur'],
      dep: ['IT']
      })
      
      

  }
  onSubmitForm()
  {
    this.employeService.addNewEmploye(this.employeForm.value);
  }
  onReset()
      {
        this.employeForm.reset();

      }
}
