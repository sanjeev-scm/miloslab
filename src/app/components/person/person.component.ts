import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})

/*
 * Not using this component.
 * Instead using person-detail which is equvivalent to avoid name collision between 
 * Person Interface and Person Component
 */
export class Person implements OnInit {

  @Input() people;


  ngOnInit(): void {
    console.log(typeof (this.people));
    console.log(this.people.name);
  }

}
