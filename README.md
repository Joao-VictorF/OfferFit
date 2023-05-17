# Web/Full Stack Home Assignment

Note: I was using Node.js v17.7.1 and the template was not running because of some ssl error (yep, strange, right?), so downgrading to Node.js v16 using `nvm use 16.18.0` worked for me.

You can see repository [here](https://github.com/Joao-VictorF/OfferFit) =)

First run
----
```shell
npm install
```

### Compiles and hot-reloads for development
```shell
npm run dev
```
After a while you should open http://localhost:8080/ to see the dashboard.

To replace API server there are two endpoints with mock data.
You can test it by opening http://localhost:8080/api/dashboard/widgets or http://localhost:8080/api/dashboard/chart
They are available only in dev mode.


----
### Run components tests
```shell
npm run test:unit
```
It will run jest tests


### Compiles and minifies for production
```shell
npm run build
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
