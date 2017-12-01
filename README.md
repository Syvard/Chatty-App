# Chatty Project

Chatty is a single page web app made using React, it is a chatroom where in users can communicate to one anoter as well as change their username.

Chatty uses websockets to communicate with the app, echoing messages to the websocket server and broadcasting them to the application for all to see. In a similar fashion it updates notifications for people who change their username, and displays the amount of users that are currently online.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. You will also need to start the websocket server in the `chatty_server`        folder. The app will be served at <http://localhost:3000/> for the application and <http://localhost:3001/> for the websocket      server.
4. Go to <http://localhost:3000/> in your browser.

## Dependencies

- Babel-core
- Babel-loader
- Babel-preset-es2015
- Babel-preset-react
- Babel-preset-stage-0
- Css-loader
- Eslint
- Eslint-plugin-react
- Node-sass
- React
- React-Dom
- Sass-loader
- Sockjs-client
- Style-loader
- UUID
- Webpack
- Webpack-dev-server