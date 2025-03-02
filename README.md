# next-freeports

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [CLI](#cli)
- [Contributing](#contributing)
- [License](#license)

## Install
next-freeports works without installation using npx.

run it directly:

`` npx next-freeports list ``

for faster execution, install it globally:

`` npm i -g next-freeports ``

## Usage
list active ports:

`` npx next-freeports list ``

kill a specific port:

`` npx next-freeports kill --port 3000 ``

use interactive mode to kill ports:

`` npx next-freeports kill ``

## CLI

| Command | Description |
|---------|-------------|
| ``npx next-freeports list`` | list all active ports. |
| ``npx next-freeports kill`` | interactive mode to select ports to terminate. |
| ``npx next-freeports kill --port <port_number>`` | instantly kill a specific port. |
| ``npx kp list`` | alias for listing ports. |
| ``npx killport list`` | alias for listing ports. |
| ``npx kp kill`` | alias for interactive port killing. |
| ``npx killport kill --port <port_number>`` | alias for killing a specific port. |

## Contributing
contributions are welcome. fork the repo, create a branch, and submit a pull request.

## License
MIT License © 2025 [Mohammed Ufraan](https://github.com/moroii69)
