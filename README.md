# Treebank Virtual Reality

Web application for exploring treebanks in 3D.

## Try it Out

[https://apps.perseids.org/treebank-vr/](https://apps.perseids.org/treebank-vr/)

## Installation

`yarn install`

## Running the development server

`yarn start`

## Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/vr` then run
`PUBLIC_URL='./vr' yarn build`.

## Running tests

`yarn test` (Note: `docker` and `docker-compose` are required)

## Linting the code

`yarn lint`

## Deploying a new version to github.io

`yarn deploy`

## Deploying a new version to Perseids

`yarn deploy-perseids`
