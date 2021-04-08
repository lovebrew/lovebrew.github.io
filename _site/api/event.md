# love.event

<b><i>
It is possible to define new events by appending the table `love.handlers`.<br>
Such functions can be invoked as usual, via love.event.push using the table index as an argument
</b></i>

## Functions

| Name                                              | Args                       | Description                       |
|---------------------------------------------------|----------------------------|-----------------------------------|
| [clear](https://love2d.org/wiki/love.event.clear) |                            | Clear the event queue             |
| [pump](https://love2d.org/wiki/love.event.pump)   | `name`, `a`, `b`, `c`, ... | Pump events into the event queue  |
| [push](https://love2d.org/wiki/love.event.push)   |                            | Adds an event to the event queue  |
| [quit](https://love2d.org/wiki/love.event.quit)   |                            | Exits or restart the LÖVE program |