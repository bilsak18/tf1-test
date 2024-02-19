# Project setup

It is easy to setup the project and run it, all you have is to run these two commands:

- `yarn install` or `yarn` for short, to install all dependencies
- `yarn dev` to run the app on your local environment

# Questions

## Figma

- How should the elemens of the UI behave upon user interaction ? (hover, focus, click...)
- Is the card clickable ? and is it different that the click on the plus button ?
- How should the UI display on different viewport sizes ? (responsive)
- If the name of the card is more than two lines, how should it be displayed ?

## Data

- There is no need in nesting thumnail information. With such a simple use-case, it could have been simpler to have all data at the same level.

```
{
  id
  name
  alt
  url
}
```
