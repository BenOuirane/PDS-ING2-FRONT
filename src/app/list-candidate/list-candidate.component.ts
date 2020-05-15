import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate_services/candidate.service';
import { Candidate } from '../class_candidate/candidate';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.scss']
})
export class ListCandidateComponent implements OnInit {



  candidates:Candidate[];
 
  constructor(private service: CandidateService, private router:Router) { }

  ngOnInit() {

    this.service.getCandidate().subscribe(

      data =>{
        this.candidates=data;
      }
    )

 
  }




}
