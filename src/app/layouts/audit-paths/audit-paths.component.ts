import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Audit } from 'src/app/services/audit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit-paths',
  templateUrl: './audit-paths.component.html',
  styleUrls: ['./audit-paths.component.scss']
})
export class AuditPathsComponent implements OnInit {

  braceletId : number;
  areaId : number;
  areaName : string;
  audit: Audit [] = new Array<Audit>()

  constructor(private activatedroute: ActivatedRoute) { }

  @ViewChild('auditPathInput', {static: false}) auditPathInput : ElementRef<HTMLInputElement>;
  ngOnInit(): void {

  }

  getAudit(){
    
  }

}
