# react-bot-ui

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React component for customizable chatbot UI with Dialogflow integration

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-bot-ui

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Demo

Check out the live [demo](https://hboylan.github.io/react-bot-ui).

Take a look at the demo source [code](https://github.com/hboylan/react-bot-ui/blob/master/demo/src/index.js).

## Installation

#### NPM:
```
npm i --save react-bot-ui
```

#### Yarn:
```
yarn add react-bot-ui
```

## Features

- React component
- Override default CSS variables
- Integrate with [Dialogflow](https://dialogflow.com)
- Toggle chat window open/close
- Embed within existing page

## Usage

#### Minimum Dialogflow integration
```jsx
<ReactBotUI
	dialogflow={{accessToken: 'youshallnotpass'}} />
```

#### All optional property defaults
```jsx
<ReactBotUI
	dialogflow={null}
	dialogHeightMax={calculatedToFlex}
	isUserHidden={false}
	isVisible={true}
	title={'React Bot UI'} />
```

## Styling

Default styling can be overriden using CSS [variables](https://github.com/hboylan/react-bot-ui/blob/56dee38/css/main.css#L8)

## TODO

- Include default images as Base64
- Open chat in new window
- Add non-Dialogflow compatability
- Add prop-types integration