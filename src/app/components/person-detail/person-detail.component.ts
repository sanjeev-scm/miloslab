import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from "@angular/core";
import { Person } from "src/app/models/Person";


@Component({
  selector: "person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetail implements OnInit {

  @Input() people: Person;

  constructor() {
  }

  ngOnInit(): void {
  }

}
