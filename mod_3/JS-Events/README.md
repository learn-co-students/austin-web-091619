# JavaScript Events
---
## But First... a review!
- General Q & A
    - truthy/falsy?
    - querySelector
- Callbacks
    - a function that gets passed as an argument (to another function)

## What is an "event"?
- user-interaction with our page
- a "happening" on the page
- *Examples*:
    - click
    - mouseover
    - keydown

## Let's work with Events!
- explore our codebase
- *objectives*:
    - click on document and explore events object
    - submit our form

## .addEventListener() on a DOM node
- takes in a string for the name of the event, and a callback function to be invoked when the event happens
- (optional) argument for the callback function is the event itself

## When to add an event Listener
- on load of page?
- on creation of element?

## Some events have default behavior
- event.preventDefault()

## event.currentTarget vs. event.target
- event.currentTarget: the HTML element addEventListener is attached to
- event.target: the innermost node that triggers the event
