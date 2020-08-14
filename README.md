# AngularAtm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Challenge Requirements

Application Requirements:

• The ATM should initially be stocked with 10 of each of the following denominations: $100, $50, $20, $10, $5, $1.

• Users should be able to withdraw cash and the ATM should be able to track bills remaining.

• The ATM should tell the user if it was able/unable to dispense the requested amount.

• The ATM needs to keep track of the current quantities of each of its denominations.

• The ATM needs to keep track of each transaction that happens.

Application Pages

• Withdraw Page

Users should be able to enter a dollar amount and press a withdraw button when desired dollar amount has been entered.
Withdraw button should remain disabled until the user enters an amount.
Once with withdrawn button is pressed, display message whether or not transaction was successful (“Dispensed $<amount>” or failure “Insufficient Funds”).
 

• Restock Page

User should be able to enter quantities for each of the following denominations: $100, $50, $20, $10, $5, $1.
Once the restock button is pressed, the total quantity of each denomination should be updated.
Once the restock button is pressed, display a successful message to the user.
 

• ATM Overview Page

Display the quantities of each denomination currently in the ATM.
Display a transaction history of withdraw messages (“Dispensed $(amoun)” or failure “Insufficient Funds”).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
