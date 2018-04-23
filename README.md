# LeafIT

Allows genreation of Leafs for different Microcontrollers or Chips. Most popular example would be the Raspberry Pi

## Setup

* Make sure nodeJS is correctly setup
* create a `config.json` file in `./js/` (use `./js/config.example.json` to understand config)
* Install dependencies
    ```bash
    npm i
    ```
* Run application
    ```bash
    npm start
    ```
* for developing run
    ```bash
    npm run live
    ```

## Distribute

To generate all necessary files run

```bash
npm run build
```

The created files are located in `./docs`

If you want to run an http server run `npm start`, this will run `build` before start