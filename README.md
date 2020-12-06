# AngularAtm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Current Startup Users for Testing

|          User Name          |  Password  |    User Type     | Account Balance |
|-----------------------------|------------|------------------|-----------------|
| Doctor.Strange@gmail.com    |  abc123!!  |  UserType.basic  | 1000000         |
| Scott.Lang@gmail.com        |  abc123!!  |  UserType.basic  | 2000            |
| Tony.Stark@gmail.com        |  abc123!!  |  UserType.admin  | 1000000000      |
| Bruce.Banner@gmail.com      |  abc123!!  |  UserType.admin  | 500000          |
| Steve.Rogers@gmail.com      |  abc123!!  |  UserType.super  | 250000          |
| Natasha.Romanoff@gmail.com  |  abc123!!  |  UserType.super  | 6500000         |

## Future Changes

• Seperate out basic users and admin users

• Finalize basic users user experience

• Finalize admin users basic experience

• Update to Mobile First design pattern

• Update header navigation to dropdown selection

• Create Complaints Section

• Allow admin to add/remove users

• Handle change as well as dollars

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
