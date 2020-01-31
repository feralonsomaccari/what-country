# What Country

Site where you can find the flag of any country in the world and read some summary about the one you like.
This is a front-end only app Made with ReactJs

Live site: https://feralonsomaccari.github.io/what-country/

------
### Why?
Here Im addressing an optimization problem that happens when you try to load in the DOM a large set of data. In this case we have 250 countries and each one of them has its own Component, so It will be very slow to rendem them all at once. So to address this Im only drawing the ones that are visibles in the screen.
The result its very smooth no matter the number of entries you could have.
Also, Im doing this for React practicing

API used https://restcountries.eu/.


------
# Local Setup

```sh
$ npm install
$ npm run start
```