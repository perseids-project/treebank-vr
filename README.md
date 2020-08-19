# Treebank Word Cloud Explorer

Web application for creating word clouds from treebanks.
It breaks the treebanks up according to the `subDoc` and generates
a word cloud for each section.

## Try it Out

[https://apps.perseids.org/treebank-wordcloud/](https://apps.perseids.org/treebank-wordcloud/)

## Installation

`yarn install`

## Running the development server

`yarn start`

## Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/wordcloud` then run
`PUBLIC_URL='./reasoning' yarn build`.

## Running tests

`yarn test` (Note: `docker` and `docker-compose` are required)

## Linting the code

`yarn lint`

## Deploying a new version to github.io

`yarn deploy`

## Deploying a new version to Perseids

`yarn deploy-perseids`
