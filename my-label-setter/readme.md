# Update label wizard

Update Github repository label with this package. This package is useful for developers who would like to keep a consistent labeling style for multiple repositories. 

For example, one's repo named javascript-study might have following issue labels.

```
algorithm
framework
web
```

And the one might have python-study as followings. 


```
machine learning
numpy
algorithm
framework
web
```

It is a tedius job to recreate issues per repository. This package will solve this painpoint by setting a label template once and re-use it multiple times.

## Install

This package is deployed to [npmjs](https://www.npmjs.com/). Run below command to install.

```sh
npm i my-label-setter
```

Also, git clone works.

```shell
git clone https://github.com/developerasun/myCodeBox-openSource.git
```

## Run

Create your app.js like below. 

```js
const myLabelSetter = require('my-label-setter/config')

myLabelSetter.ShowInstruction()

myLabelSetter.UpdateSetup(
    "Enter repository name here",
    "Enter access token here",
    "Enter username here"
)

myLabelSetter.LogCommand()
```

And then run below command.

```shell 
npm run label
```

Follow instructions from there.

## Configuration

Configurate as below. 

1. Updating label requires your repository permission. Generate your github personal access token [here](https://github.com/settings/tokens/new).
1. Fix a labels.json file in your project root. Provide a color to label by hex code without prefixed hash. Default label color is black. 
1. Enter your info in config.js to set label command : token, username, and repository name. That's it.

```json
    {
    "name": "research",
    "color": "000000",
    "description": "digging out for more details"
    },
```

Note that the labels.json file should be in the project root, meaning you have to copy and paste it.

## Future improvements

- Interactive terminal for UX
- Update labels in several repos

## Creator

- [DeveloperAsun](https://github.com/developerasun)