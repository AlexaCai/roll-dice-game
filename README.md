# *Guess the number* web app

**Table of content**

- [Project description](#project-description)
- [User interface](#user-interface)
- [Technical aspects](#technical-aspects)


## Project description

This game web app was created to allow users to compete in a simple two-players game. 

Objectives:

- Each player must accumulate as many points as possible. 
- The first player to reach a total of 100 points wins the game.

Specific rules:

- During their turn, each player can roll the dice as many times as desired, and accumulate points accordingly, as long as the number obtained is superior to 1.
- The points are calculated by adding the result obtained on each dice roll to the previous amount of points cumulated.
- If a player rolls a 1, all the points accumulated by this player in the round are lost and the turn passes to the next player.
- When players wish to save their points because they believe they will roll a 1 shortly, they can stop their turn, keep their accumulated points, and pass the dice to the next player.

## User interface

The interface is separated in 2 parts, each user having their half. Users can interact with three buttons:

-Button 'New game', which restarts the game to its initial default state.

-Button 'Roll dice', which rolls the dice on each click.

-Button 'Hold', which ends the player's turn and allows him/her to keep the points accumulated during the round.
  
## Technical aspects

The game is built with HTML, JavaScript, and CSS and is [hosted on GitHub gh-pages](https://alexacai.github.io/roll-dice-game/).


