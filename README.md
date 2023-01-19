# Pokedex
Pokedex is a web app that users can do the following:

1. find wild pokemon
2. catch pokemon
3. see a record of caught/uncaught pokemon.
4. add more pokemon to find in the wild.

## Installation

Pokedex runs on a json-server follow these steps to get it running

1. Install json-server package

```bash
npm install -g json-server
```

2. start json server

```bash
json-server --watch Data/db.json
```

with these steps completed the server is be up and running run the following command to get the app running

```bash
npm start
```

## Usage

upon loading the web app users will see a Navigation bar with the following features available to them

1. Caught Pokemon

Here users will see a record of all the pokemon they caught thus far.

2. Uncaught Pokemon

Here users will see a record of all the pokemon that they may encounter in the wild.

3. Wild Pokemon

Here users will encounter wild pokemon in which they can catch.
When users click the catch button the pokemon has a chance to be caught or run away.
In some rare cases the pokemon may not be able to run away.
Upon pokemon running away a new wild pokemon will appear

4. Add Pokemon

Here users will see a form in which they can fill out and add a pokemon to uncaught pokemon record.
All added pokemon may have a chance to appear in the wild.


