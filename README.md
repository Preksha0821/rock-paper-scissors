# RockPaperScissors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

This repository contains a simple server for playing Rock Paper Scissors. You will be building a client-side GUI to play the game against the server.

# Dependencies

To get the Angular CLI installed, run `npm install -g @angular/cli`

From the root, run `npm install` to install dependencies.

From server, run `npm install` to install dependencies for the server.

# Running the App in Development Mode

Write your Angular source code in the /src folder.

You can run the node server by moving to the server directory and running `npm start`

The Angular Development Server can be started by running `ng serve`

Endpoints are configured to proxy to the node server, which is running on http://localhost:3000. The Angular App will be running on http://localhost:4200 The proxy is setup to send `/api/[endpoint]` to the server. Keep this in mind while in development.

# Building

Build your project using `ng build` from the root

To start the server, run `npm start` in the server folder. You can access the game's GUI at `http://localhost:3000`

## The API

To play the game, make a POST request to `http://localhost:3000/match` with a single body parameter, `choice`, the value of which should be either "rock", "paper", or "scissors". The server will randomly choose one of those three options to play against your choice and return the results of the game as a JSON object with the following properties:

    playerChoice   : [your choice]
    computerChoice : [rock|paper|scissors]
    result         : [win|lose|tie]

The server will return a status of 400 if the `choice` parameter is omitted or does not equal "rock", "paper", or "scissors", Additionally, every request has a 1 in 10 chance of returning a 500 Internal Server Error.  Your application should deal with these responses gracefully.

You can test the API using cURL thusly:

    $ curl -X POST -d choice=[rock|paper|scissors] http://localhost:3000/match

## The GUI

All front end assets can be found in the `public` directory. Please use a AngularJS to build a single page application for playing the game. You may structure your Angular app as you like and you may add to or modify any of the code in here. Visually, the design does not have to be perfect, but the game should look presentable.

#### Requirements

* All requests to the server should be asynchronous. That is, there should never be a full page refresh.

* Play button should be disabled (with an appropriate graphical cue) until the player makes a choice.

* Player should see an indication of their choice before clicking the Play button

* Clicking the play button should submit the user's choice to the server, and the response should update the GUI with the computer's choice and the result of the game.

* "Computer Choice", "Result", and "Play Again" elements should be hidden until the response from the server is received and the game is over.

* Wins should increment the player's score and losses should increment the computer's score. Scores should not change for a tie.

* Your application should demonstrate a solid understanding of MVC and event-driven design patterns.

* Your application should deal with server errors gracefully.

## Questions?

If you have any questions while working on the test, feel free to contact Anthony Sgueglia <anthony@domandtom.com>.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
