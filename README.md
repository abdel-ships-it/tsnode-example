# NodeJS typescript starter 
This is repository is an example of how to use [ts-node](https://github.com/TypeStrong/ts-node) programmatically

It also has nodemon as a dependecy which will watch the lib directory and restart the server on save.

## Scripts

To start the server, all you need to do is `npm run start` right now. This will use nodemon and restart the server whenever anything under `lib` changes


## nvmrc

If you are not using [`nvm`](https://github.com/creationix/nvm) yet. You should do so asap! Its the defacto solution to developing multiple node.js projects without the different node versions headache.

If you already have, just run the `nvm use` command and it will use the version listen in `.nvmrc` if you don't, checkout their repo! This project uses `8.9.4` but you can change that version to something that fits your needs !