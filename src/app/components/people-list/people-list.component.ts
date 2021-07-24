import { Component, OnInit } from "@angular/core";
import { Person } from "src/app/models/Person";
import { PeopleService } from "src/app/services/people.service";

@Component({
  selector: "people-list",
  templateUrl: "./people-list.component.html",
  styleUrls: ["./people-list.component.css"]
})
export class PeopleList implements OnInit {

  results: Person[];

  isLoading: boolean;

  constructor(private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
  }

  fetchPeople() {

    // Deliberately introduce delay.
    this.isLoading = true;

    setTimeout(() => {
      // Get the people list
      this.results = this.peopleService.getPeople().results;
      this.isLoading = false;
    }, 1000);

    console.log(this.results);
  }

}
