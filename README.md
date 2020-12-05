# Żółta Biblioteczka (The Yellow Bookcase)

This is the backend service for the Żółta Biblioteczka website. The service is based on the open-source headless CMS
called [Strapi](https://strapi.io/). Read more about using
Strapi [here](https://strapi.io/documentation/v3.x/getting-started/introduction.html).

## Local installation

```
git clone https://github.com/pmiara/yellow-bookcase-backend.git
cd yellow-bookcase-backend
npm install
npm run develop
```

After a successful installation, you will be prompted to create an admin account. You can use a fake email address for
it, because there is no email confirmation step.

If you get errors about node version, make sure your node version complies with the "engines" field specified
in [package.json](package.json). I recommend using [Node Version Manager](https://github.com/nvm-sh/nvm) to get it
right.

## Endpoints

- /books
- /bookshelves
- /website-configuration

Read more about accessing Strapi endpoints in
the [documentation](https://strapi.io/documentation/v3.x/content-api/api-endpoints.html).

## Deployment

This service is meant to be deployed to Heroku. The production setup differs from the development one in the database
they use, and the way of storing media files. The development setup uses SQLite with the whole database stored in
.tmp/data.db file, and it uploads the media files to [public/uploads](public/uploads) directory. For production, we use
PostgreSQL and store the media files in AWS S3. Their details are kept in the environmental variables described below:

- ADMIN_JWT_SECRET
- JWT_SECRET
- AWS_REGION, AWS_BUCKET - S3 bucket details
- AWS_ACCESS_KEY_ID, AWS_ACCESS_SECRET - AWS user credentials, it must have read/write permissions for the bucket
- DATABASE_URI - a string containing: host, port, database name, username, and password. It is later destructed using
  `pg-connection-string` package.

Both secrets can be generated using `node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"`

In order to run the service in the production mode use `npm run start` instead of `npm run develop`.

## Active deployment

- https://yellow-bookcase-api.herokuapp.com
- http://api.zolta-biblioteczka.pl (http only)

The admin panel is available at `/admin`.

The deployment is automatically triggered by changes on the main branch.
