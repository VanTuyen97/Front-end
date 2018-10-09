import { Component } from '@angular/core';

// tell angular where to get the major building block (component and view).
// associates a template with the component, either directly with inline code, or by reference.
@Component({
  // tell angular to create and insert an instance of this compomnent in template html.
  // in this case is <app-root></app-root>
  selector: 'app-root',

  // associate to this componment's template html.
  templateUrl: './app.component.html',

  // associate to this componment's css.
  styleUrls: ['./app.component.css'],

  // array of providers for services that the componment requires.
  providers: []
})
export class AppComponent {
  title = 'Angular';
}
