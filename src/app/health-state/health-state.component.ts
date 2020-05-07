import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MedicalMeasureService} from "../services/medical-measure.service";
import {Resident} from "../resident";
import {MedicalMeasurementType} from "../health-model/medical-measurement-type";


@Component({
  selector: 'app-health-state',
  templateUrl: './health-state.component.html',
  styleUrls: ['./health-state.component.scss'],
  inputs: ['columns: matHeaderRowDef']
})
export class HealthStateComponent implements OnInit{

  measurements : MedicalMeasureService[];
  resident: { firstName: string; lastName: string; idRoom: null; age: null; idResident: null } = { idResident: null, idRoom: null, firstName: '', lastName: '', age: null };
  measurementTypes: MedicalMeasurementType[] = [];

  displayedColumns: string[] = [ 'firstName','lastName'];
  data: Resident[] = [];
  isLoadingResults = true;


  constructor(private measurementService: MedicalMeasureService) { }

  ngOnInit(): void {

    this.measurementService.getResidents()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

  }

  onGetMeasures() {
    this.measurementService.getMedicalMeasures()
      .subscribe(data=>{
      this.measurements = data;
      },err=>{
        console.log(err)
    })
  }


}
