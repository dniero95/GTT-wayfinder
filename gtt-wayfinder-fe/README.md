# GttWayfinderFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Requirements

Si vuole realizzare un sito per una società di trasporto pubblico (es. la GTT) che permetta la ricerca dei percorsi tra diverse fermate dei mezzi. Il sito fornirà l’indicazione delle linee che collegano le fermate, e del percorso completo di ciascuna delle linee di mezzi.

1. Una pagina mediante la quale l’utente possa scegliere la fermata di partenza e la fermata di arrivo del proprio viaggio. La pagina dovrà contenere due menu a tendine, rispettivamente per la partenza e l’arrivo, ciascuna delle quali contiene l’intero elenco (alfabetico) di tutte le fermate esistenti. Dopo aver selezionato le fermate di interesse, l’utente selezionerà un bottone di “Invio” per passare alla pagina successiva.

2. La seconda pagina contiene le informazioni su tutte le linee che collegano le due fermate indicate. La pagina dovrà contenere informazioni di questo tipo, opportunamente formattate: “Le linee che portano dalla fermata ____ alla fermata ___ sono le seguenti: 10, 13, 1”. Nel caso in cui non ci sia alcuna linea che collega le due fermate, si visualizzi un’indicazione di errore e si ri-propongano le due tendine per modificare la scelta.
