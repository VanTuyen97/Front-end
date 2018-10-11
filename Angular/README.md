# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.
## Required

1. Install angular Cli: `Npm install –g @angular/cli`

2. Download [Node.js](https://nodejs.org/en/) included [npm](https://www.npmjs.com/)

3. Install [Visual studio code](https://code.visualstudio.com/)

   - Install extension [Debug for chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
   
   - Install extension [Angular v6 snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
   
   - Install extension [Angular 6 snippets](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode)
   
   - Install extension [Angular language service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
   
   - Install extension [Angular essentials](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)
   
4. Install [in-memory Web API package](https://github.com/angular/in-memory-web-api) from npm: `npm install angular-in-memory-web-api --save`
## Run project
1. Clone project: `git clone https://github.com/VanTuyen97/Front-end.git`

2. Install the npm packages described in the package.json: `npm install`

3. Verify that it works: `ng build`

4. Run `ng serve`, `ng serve --open` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

1. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

2. Example Teting 
  <details>
  
  ```TypeScript
  import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { OrderService } from './order.service';

describe('OrderService', () => {// block tester
  let orderService: OrderService;

  beforeEach(() => {// perpeare module test
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // import module use for test (this is test @angular/common/http => @angular/common/http/testing)
      providers: [OrderService] // services was used to test
    });

    orderService = TestBed.get(OrderService); // get a instance of OrderServices
  });

  it('get order by id', () => {// block contain code test
    // orderService = TestBed.get(OrderService); can use alter
    orderService.getOrder('5ba8960179b6de243211329e').subscribe(order => {
      expect(order.renterId).toEqual('i sleep'); // expect value
    });
  });

});
  ```
  
  </details>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
