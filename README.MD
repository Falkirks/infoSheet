# infoSheet

This is a hacked together step-by-step tutorial web app for girlsmarts2018. It runs a butchered React starter template, with an express backend, and webpack magic.


# Installation
Just clone this repo or download the zip file. `cd` into the directory and run

    npm install

## Developing App with [Hot Reload]
To develop your own react application, you can take advantage of React Hot Loader and Webpack Dev Server. To develop app with hot reload:

    npm run dev

Now you can access your react application on http://localhost:8080

## Production build and Deploy
To make a production build of your project, run the following commands

    npm run build
  
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`.

`server.js` will be used for serving the application on port 3000 and `index.js` is the actual react app itself.

Finally run

    npm start

The you will be able to access this app from http://localhost:3000.


## Deploy to Heroku
To deploy to heroku, you must run, this will allow Heroku to run webpack and build the application itself

```sh
heroku config:set NPM_CONFIG_PRODUCTION=false
```