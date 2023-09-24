import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>details works! {{ housingLocationId }}</p> `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  // route: ActivatedRoute = Inject(ActivatedRoute); // not working !!
  housingLocationId = 0;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
  }
}
