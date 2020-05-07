import { Component, OnInit } from '@angular/core';
import {Resident} from "../resident";
import {MedicalMeasurementType} from "../health-model/medical-measurement-type";
import {MedicalMeasureService} from "../services/medical-measure.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Room} from "../room";
import {User} from "../user";
import {Residence} from "../residence";

@Component({
  selector: 'app-health-resident',
  templateUrl: './health-resident.component.html',
  styleUrls: ['./health-resident.component.scss']
})
export class HealthResidentComponent implements OnInit {

  resident: Resident = { idResident: null, idRoom: null, firstName: '', lastName: '', age: null , room : null ,user : null,
    residence: null};

  measurementTypes: MedicalMeasurementType[] = [];
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private medicalMeasureService: MedicalMeasureService, private router: Router) { }

  ngOnInit() {
    this.getResidentDetails(this.route.snapshot.params['id']);
    this.getMeasurementTypes();
  }




  getResidentDetails(id: any) {
    this.medicalMeasureService.getResident(id)
      .subscribe((data: any) => {
        this.resident = data;
        console.log(this.resident);
        this.isLoadingResults = false;
      });
  }

  getMeasurementTypes() {
    this.medicalMeasureService.getMeasurementTypes()
      .subscribe((res: any) => {
        this.measurementTypes = res;
        console.log(this.measurementTypes);
        this.isLoadingResults = false;
      });
  }
}
