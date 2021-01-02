# AngularAtm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Current Startup Users for Testing

|          User Name          |  Password  |    User Type     | Account Balance |
|-----------------------------|------------|------------------|-----------------|
| Doctor.Strange@gmail.com    |  abc123!!  |  UserType.basic  | 125043          |
| Scott.Lang@gmail.com        |  abc123!!  |  UserType.basic  | 12354           |
| Tony.Stark@gmail.com        |  abc123!!  |  UserType.admin  |                 |
| Bruce.Banner@gmail.com      |  abc123!!  |  UserType.admin  |                 |
| Steve.Rogers@gmail.com      |  abc123!!  |  UserType.super  |                 |
| Natasha.Romanoff@gmail.com  |  abc123!!  |  UserType.super  |                 |

## Change Log

* ~~Complete Coding Challenge requirements~~

* ~~Create basic users experience flow~~

* ~~Create admin users experience flow~~

* ~~Create super users experience flow~~

* ~~Update all experience flows to perform basic checks~~

* Refactor/Cleanup improve user, admin, super experience
    * Refactor code to minimize code duplication
    * Better create shared components

* Finalize super basic experience with user add

* Styling CSS ( *CRY* )

* Unit tests

* tsLint rules check

* Update to Mobile First design pattern

* Update header navigation to dropdown selection

## Possible Further enhancements

* Handle change
* Handle other currencies

## Reddit Cleanup Suggestions

Big(ish) issues:

Don't use var unless you can't avoid it. use let instead. The reason is var is globally scoped, can read up more on it here: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

Services in HTML isn't considered a good practice, instead create an observable variable in your component typescript file. The reason for this is has to do with separation of concerns/design principles

Some of your code doesn't work as intended. Locally when the ATM was fully stocked I wasn't able to withdraw $1111. I didn't take the time to look into why this was happening, but I think it has something to do with not adding 2 x 50 to make up for the extra 100

Deposit doesn't seem to do much but in your docs you don't mention it working so I assume this is still a WIP

I am not sure if you have disabled the linter or not, but every company I have worked at there have been linting rules, an angular project comes with a set of rules by default, run ng lint in the command line and fix the errors, can sometimes fix unseen bugs but mostly for project consistency.

Remove untouched generated test files. A potential employer might get exciting at the sight of unit tests only to be met by disappointment when they just auto-generated code.

Visually:

Take the time to align stuff (I know its a pain), the first thing that jumped out was the show password checkbox text wasn't aligned with the checkbox. I then thought to myself, "hmmm maybe this is a Mozilla thing", but on chrome it looked the same.

Some things could use some padding/margin, I don't like how on the deposit into account page things are right up to the screen edge. (Personal preference)

This is me nitpicking:

Lots of redundant files/code

If your component ngOnInit is empty why not remove it.

If your component .scss file is empty why not remove it

Typos stick out. If you can see if you can set it up with the IDE you are using (if you are using an IDE)

I assume this is just from lack of knowledge but you can utilize Angular's Reactive form functionality for a lot cleaner code. As an example in your user-deposit.component.ts you have a reset() function where you set each formControl value to 0. Setting the value doesn't reset the formControl state (this might be intentional), but you could clean it up by using formControl.reset(0) instead. Or better still go up one level and do it on the formGroup. So it would become: this.depositForm.reset({ amountHundred: 0, amountFifty: 0, amountTwenty: 0, amountTen: 0, amountFive: 0, amountTwo: 0, amountOne: 0 });

You might want to change the page not found error/message. Someone without a sense of humor might take it personally :)

Put your dummy user accounts in a JSON file.

Since we were looking for a new Angular developer lately, I spent a lot of time reading CVs and reviewing portfolio projects during the last weeks. I assume that angular-atm is meant to be a portfolio project as well, so I'd like to give you a general feedback based on your app and what I've learned by sitting on the other side of the interview table. This is not meant to be an in depth code review since there are already good answers that do exactely that. It is meant to give you feedback on your app from the perspective of a potential employer.

While reviewing an applicants projects, I always tried to find out the following things:

Is this person proficient in all core technologies?

Is this person proficient in the most important libraries?

How is this persons' working ethos?

How experienced is this person?

1. Is this person proficient in all core technologies?
You're project shows that you know how to structure a small-sized Angular app and that you are proficient in Typescript, Angular, and HTML. What it does not show is how experienced you are in writing well-structured SCSS, unit tests, and e2e tests. You cannot overestimate how important it is that every team member knows this stuff well. So, as an interviewer, I would have an eye on that during the interview, if your project did not contain this stuff.

2. Is this person proficient in the most important libraries?
This is of course very project specific and it depends on where you apply. In our case, we defined RxJS and NgRx/NgXs as the most crucial libraries. For every portfolio-project, I would actively look if the person was using these libraries and how proficient the person was in these libraries, e.g. how higher-order Observables were handled. Currently, your apps' state is handled by services. That's fine. As your app grows, think about handling the state with a popular state management framework instead, just to show that you know how to use this stuff.

3. How is this persons' working ethos?
In your team, you want people on who you can rely on. You want people whose contributions are not only well written but also well tested and well integrated. If our customer wants us to add a second component with similar functionality as an existing one, the perfect team member would not copy and paste the code from the existing component to the new one. He/she would take their time to refactor everything to comply with the DRY principle and he/she would make sure that all tests pass and everything is covered by tests. It is not easy to find that out in portfolio-projects due to their small size, but I would usually look if the person wrote e2e and unit tests and if refactoring-commits also included changes in spec.ts files.

4. How experienced is this person.
Here, I would look if the person is proficient in those topics that usually arise after you spent some time with Angular, e.g. performance optimizations, architecture, accessibility, linting. Setting change-detection on-push and adding lazy-loading is something that you could do. Accessibility and linting is fine. As the app grows, I would expect to see the smart/dumb component pattern.

General notes
I like that you have a description which describes the use-case, features, road-map, etc.

As an interviewer, I would never have the time to clone and build your project. If you want me to try it out, host it on Firebase or somewhere similar. Don't even expect me to find the authentication details in the project description.

I like that you aim to do one large project instead of multiple small ones. The large ones are not only more impressive, they give a much better understanding about how you work and what your skillset is and, therefore, build trust.

Don't be overwhelmed by all of this! In our case, not a single applicant scored high in all four aspects. A lot of them only had a few Hello World projects that they probably created during the attendance of a crash course on Youtube. Your project on the other hand already shows that you know what you're doing. Also, we invited some people with very little knowledge just because we had the impression that they were very motivated and that they were able to learn new stuff fast.

Lastly, I wish you all the best for your further career. Every time life strikes you down and you stand up again, you're stronger. Of course, we should be thankful for all the positive things in life but probably even more for all the setbacks, disappointments, and challenges we face, since they allow us to grow the most. After all, life is just a series of experiences.

## ~~Challenge Requirements~~

Application Requirements:

* The ATM should initially be stocked with 10 of each of the following denominations: $100, $50, $20, $10, $5, $1.

* Users should be able to withdraw cash and the ATM should be able to track bills remaining.

* The ATM should tell the user if it was able/unable to dispense the requested amount.

* The ATM needs to keep track of the current quantities of each of its denominations.

* The ATM needs to keep track of each transaction that happens.

Application Pages

* Withdraw Page

Users should be able to enter a dollar amount and press a withdraw button when desired dollar amount has been entered.
Withdraw button should remain disabled until the user enters an amount.
Once with withdrawn button is pressed, display message whether or not transaction was successful (“Dispensed $<amount>” or failure “Insufficient Funds”).

* Restock Page

User should be able to enter quantities for each of the following denominations: $100, $50, $20, $10, $5, $1.
Once the restock button is pressed, the total quantity of each denomination should be updated.
Once the restock button is pressed, display a successful message to the user.

* ATM Overview Page

Display the quantities of each denomination currently in the ATM.
Display a transaction history of withdraw messages (“Dispensed $(amoun)” or failure “Insufficient Funds”).
