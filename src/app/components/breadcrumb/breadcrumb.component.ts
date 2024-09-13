import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  pageTitle = "";
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.pageTitle = data.name;
  
    });
  }

}
