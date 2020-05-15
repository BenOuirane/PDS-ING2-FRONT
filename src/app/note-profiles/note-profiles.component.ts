import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../Score_service/score.service';
import { Score } from '../class_score/score';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-profiles',
  templateUrl: './note-profiles.component.html',
  styleUrls: ['./note-profiles.component.scss']
})
export class NoteProfilesComponent implements OnInit {
 
  
 public  scoore:any=[];
   
  constructor( private router:Router , private services: ScoreService ) { }
  private score = new Score();
  
  ngOnInit() {
   this.scoore.push(Score);
  }


     
save(score:Score){
  this.services.createScore(score).subscribe(data=>{
    console.log(data);
    this.router.navigate(["prioritycandidate"]);
  })

}
 
postScore() {
  this.services.postScore(this.score).subscribe(
    data => {
      console.log(data);
      this.score = new Score();
      this.router.navigate(["prioritycandidate"]);
    
    },
   

  )
}

}
