import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';



@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit {

  actor:          any;
  actorId:        any;

  isLoading:      boolean = true;

  maleActor:      ActorGender;
  femaleActor:    ActorGender;

  constructor(private route: ActivatedRoute, private movieService: MoviesService<any>) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.actorId = params.get('id');
      this.loadActorDetails(this.actorId);
    });

  }

  loadActorDetails(id: string) {
    this.movieService.getOne('Actors', id).subscribe((data) => {
      this.actor      = data;
      this.isLoading  = false;
      debugger
      this.maleActor       =  new ActorGender(false, "Male");
      this.femaleActor     =  new ActorGender(true, "Female");

    });
  }

}


export class ActorGender {
  key:        boolean;
  value:      string;

  constructor(key: boolean, value: string) {
    this.key = key;
    this.value = value;
  }
}
