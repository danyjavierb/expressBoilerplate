# expressBoilerplate

Hello, in this API I used Mongo, Mongoose and mongodb-memory-server, to simplify the handling and persistence of data, I exposed several additional endpoints and wrote a small front end in Angular as an example that consumes the API endpoints.

Thanks for looking at my code.

## Install It
```
npm install
```

## Run It
#### Run in *development* mode:

```
npm run dev
```

#### Run in *production* mode:

```
npm compile
npm start
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push expressBoilerplate
```



### Try It
* Point you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/check-heatlh`


### Swagger
* Point you're browser to [http://localhost:3000/api-explorer/](http://localhost:3000/api-explorer/)
   
### Try frontend

```
cd  frontend
npm install
ng serve
```

