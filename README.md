![logo friendship](https://raw.githubusercontent.com/NathanNeelis/Project-Tech/master/Styleguide/guide/Friendship_logo-full-RGB_2.jpg)

## Description

Friendship is a dating service, not meant for romantic relationships but for friendships. Do you feel alone sometimes and would you like to get in touch with people that have the same interests as you? Then Friendship is here to help! With friendship you’ll create a profile with your interests, for example, going to the gym, playing board games, or videogames, or gardening. After you have created your profile, you’ll be able to search other profiles for specific interests. Let’s say you would like to play a board game, in the filter function you will let our database know to filter out people that are also interested in board games. When you find some suitable matches based on age, location, you can get in contact with other “board gamers” and see if they’re up for a game.

## Job story

### Filtering

**When** I'm bored at home, at the beginning of the evening, watching cooking shows on Netflix, while I'm already done with all my homework  
**I want to** find people that have the same interests as me  
**So I** can ask them if they want to do something fun that is in both our interests.

### Login / register

**When** I am sitting at home all alone, **I want to** be able to create an account with ease at a dating website to be able to match with other people and finally find someone **So I** won't feel alone anymore. I want to be able to do this from anywhere and any device, and also with as little effort as possible

### Matching

**When** I am at home in the evening with my laptop on the couch and see a profile of a person that I like, **I want to** have a reason to talk to her. When she also likes me I would like to discuss philosophical questions **So we** can get to know each other better and might get to a relationship.

## Status

At this moment this is a work in progress.
Our goal is:

- Users are able to register an account **Must have**;
- Users are able to login and logout **Must have**;
- Users are able to filter for specific interests **Must have**;
- There are specific interest sections on various pages **Must have**;
- Users are able to like other users **Must have**;
- If users like each other they become a match **Must have**;

_Goal list should be updated_

## The application

_Image needs to be updated_
![Screenshots of early app version](https://github.com/NathanNeelis/Project-Tech/blob/master/Styleguide/app/app.jpg)

## Getting started

In this project, we used node.js and NPM to install packages.  
To install all the packages registered in the package.json file run the code below after downloading this project.

    $ npm install

#### This will install the following packages:

**Dependencies**

- [body-parser](https://www.npmjs.com/package/body-parser)
- [camelcase](https://www.npmjs.com/package/camelcase)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs](https://www.npmjs.com/package/ejs)
- [express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [mongodb](https://www.npmjs.com/package/mongodb)
- [multer](https://www.npmjs.com/package/multer)
- [path](https://www.npmjs.com/package/path)
- [slug](https://www.npmjs.com/package/slug)

_Update this list_

#### I also used the following packages while coding:

**Dev dependencies**

- [eslint](https://www.npmjs.com/package/eslint)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [prettier](https://www.npmjs.com/package/prettier)

_update this list_

### Templating engine

In our Friendship app, we made a lot of use of the templating engine EJS.  
We choose to use EJS because two out of three teammembers where already using EJS. Also it has a great documentation on how to get started.  
A other team member used handlebars but we felt most comfortable using EJS.

In the view folder, you will find our main pages like index, profile, matching, register, login, and search.  
These pages are build out of includes. Smaller bits of code that you will find in the folder **"includes"**.

![EJS](https://i0.wp.com/frontnet.eu/wp-content/uploads/2020/04/Javascript_Embedded.png?w=526&ssl=1)

### Linter

We choose to use ESlint to set up our code standards.  
These are:

- single quotes..?

_update with our code standards_

## Dataflow

_update with how our database looks like_
![Dataflow](https://raw.githubusercontent.com/NathanNeelis/Project-Tech/master/Styleguide/dataflow/dataflow.jpg)

## Wiki

A lot of our research has been documented in the wiki of this repository.  
Are you interested in our research, design choices, or learning progress?  
[**Check out our wiki here**](https://github.com/BVictorB/friendship/wiki)

## Planning

We used the GitHub projects feature for our planning.  
To see what steps we have taking in making this application please see our project page.
[Friendship planning board](https://github.com/BVictorB/friendship/projects/1)

## License

## Resources
