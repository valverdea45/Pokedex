# Pokedex
Pokedex is a web app that users can do the following:

1. Find wild pokemon
2. Catch pokemon
3. See a record of caught/uncaught pokemon.
4. Add more pokemon to find in the wild.

## Installation and Start Up

Pokedex runs on a json-server follow these steps to get it running

1. Install json-server package

```bash
npm install -g json-server
```

2. Start json-server

In a new terminal run the following command

```bash
json-server --watch Data/db.json
```
3. Start app

In another new terminal run the following command to start the app

```bash
npm start
```

## Usage

Upon loading the web app users will see a Navigation bar with the following features available to them

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

## License

MIT License

Copyright (c) [2023] [Adrian E Valverde]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
