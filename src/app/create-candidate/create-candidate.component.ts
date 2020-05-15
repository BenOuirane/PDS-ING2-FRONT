import { Component, OnInit } from '@angular/core';
import { Candidate } from '../class_candidate/candidate';
import { CandidateService } from '../candidate_services/candidate.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.scss']
})
export class CreateCandidateComponent implements OnInit {

  show = false;
  public Coupleshow ;
  hide = false;


  toggleShow() {
    // this.show = true;
    this.Coupleshow = true;
  }

  toggleHidden() {
    // this.show = false;
    this.Coupleshow = false;
  }



  Show() {
    this.hide = true;
  }

  Hidden() {
    this.hide = false;
  }

  



  private candidate = new Candidate();
  private candidateError: Candidate;
  private isCreated: boolean = false;
  private candidateExist: boolean = false;

  constructor(private _candidateService: CandidateService) { }

  ngOnInit() {
  }

  postCandidate() {
    this._candidateService.postCandidate(this.candidate).subscribe(
      data => {
        console.log(data);
        this.candidate = new Candidate();
        this.isCreated = true;
        this.candidateExist = false;
        this.candidateError = new Candidate();
        (<HTMLFormElement>document.getElementById("ben_form")).reset();
        
       
        this.Coupleshow = false;
        this.hide = false;
      },
      error => {
        this.candidateError = error.error;
        this.isCreated = false;
        if (error.status == 409) {
          this.isCreated = false;
          this.candidateExist = true;
        }
        console.log(error);

      }

    )
  }


}
