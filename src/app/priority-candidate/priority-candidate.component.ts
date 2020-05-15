import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../candidate_services/candidate.service';

import { Candidate } from '../class_candidate/candidate';


@Component({
  selector: 'app-priority-candidate',
  templateUrl: './priority-candidate.component.html',
  styleUrls: ['./priority-candidate.component.scss']
})
export class PriorityCandidateComponent implements OnInit {

  candidats:Candidate[];
  emptyScore= false;
  constructor(private service: CandidateService, 
    private router:Router) { }
 
  ngOnInit() {

    this.service.getPriority().subscribe(

      data =>{
        this.candidats=data;
        //test

       // this.candidats.forEach((cand) =>{
       //   if (cand.score === 0)
       //   this.emptyScore=true;
       //   }) ;
      }
    )
  }
 


}
