# express-typescript-node20-template

This is a template to allow developers to quickly hook up a expressJS server.

It includes the following:

| Installed  | Explanation |
| ---------- | ----------- |
| TypeScript |             |
| Eslint     |             |
| Prettier   |             |
| Nodemon    |             |
| Swagger    |             |
| Changelog  |             |
| Logging    |             |

## Folder Structure

This template follows the three layered architecture. This folder structure is just a general guide, change the folder structure to suit your project needs

```bash
Client <-> Router Layer <-> Service Layer <-> Data Access Layer <-> Database
```

1. **Router layer**: responsible for exposing client routes, parsing and validating data from params and body before forwarding it to methods in the service layer

2. **Service layer**: encapsulate applications' domain specific business logic; interacts with data access layer or external services.

3. **Data access layer**: abstracts database client logic for service layer to interact with.

The current folder structure is structured as follows:

| Layer       | Folder        | Explanation                                                                                                                                                                                                              |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Router      | `/routes`     | describes all available api endpoints for clients to interact with the server                                                                                                                                            |
| Router      | `/controller` | delegates complex business logic tasks to the service layer                                                                                                                                                              |
| Service     | `/services`   | contains business logic for the application                                                                                                                                                                              |
| Data access | `/models`     | abstracts database code for the service layer to interact with. Usually contains ORM libraries for CRUD operations with the database. Folder name can be changed to `/database` or `/data-access` if it makes more sense |

Other folders that are included in this repository includes:

| Folder         | Explanation                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------ |
| `/configs`     | non-sensitive application constants are stored here. This constants have the same value regardless of environments |
| `/interfaces`  | typescript interfaces that are shared is stored in this folder                                                     |
| `/middlewares` | generic middlewares such as validation, error handling, authentication that are shared is stored in this folder    |
| `/utils`       | utility functions that are shared is stored in this folder                                                         |

File examples are stored in each folder described above, each marked with `/** <-- DELETE THIS FILE --> */` comment at the top of the file. Delete these files or modify them accordingly when needed.
