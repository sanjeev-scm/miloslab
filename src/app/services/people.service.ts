import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Response } from "../models/Response";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root',
})

export class PeopleService {
  url: string = "https://randomuser.me/api/?results=10";

  //constructor(private http: HttpClient) { }

  constructor() { }

  /*
   * Assuming that we call the server with the url to get the people results.
   * Returning the hardcoded results for this test
   */
  getPeople(): Response {
    //    return this.http.get(this.url, httpOptions);

    let response: Response = {
      results: [
        {
          name: "Carly",
          location: "Bangalore",
          phone: "9900000051",
          gender: "Female",
          email: "carly@gmail.com"
        },
        {
          name: "Adam",
          location: "Mysore",
          phone: "9900000052",
          gender: "Male",
          email: "adam@gmail.com"
        },
        {
          name: "Steve",
          location: "Hassan",
          phone: "9900000053",
          gender: "Male",
          email: "steve@gmail.com"
        },
        {
          name: "Jessi",
          location: "Chitradurga",
          phone: "9900000054",
          gender: "Female",
          email: "jessi@gmail.com"
        },
        {
          name: "Alan",
          location: "Dharwar",
          phone: "9900000055",
          gender: "Male",
          email: "alan@gmail.com"
        }
      ]
    }

    return response;
  }
}
