# create-top-navbar

# About

Module to create a top navigation bar

# Install

`npm i install create-top-navbar --save`

# Usage

```
// div to add navbar to
let menuDiv = document.getElementById("menu-div");

// function call returns HTML element
let navbar = createNavBar(
  "Example Title",
  "Example Dropdown Item 1",
  "Example Dropdown Item 2,
  "Example Dropdown Item 3"
);

// add to the div
menuDiv.appendChild(navbar);
```
