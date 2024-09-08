# Dinosaurs Manager

## Getting Started

Install dependencies:

```
npm install
```

Set the environment variables for your local environment:

```
cp .env.example .env.development
# then replace the values in .env.development
# Note: for local development, prepend variables with `VITE_` to make them accessible to the client
```

Generate the client-side Api to communicate with the server:

```
npm run api:gen
```

This Api provides you with convenient methods to communicate with the server, such as CRUD operations, as well as TS types matching the server's schema.

Start the development server:

```
npm run dev
```

## Testing

Set the environment variables for your local environment:

```
cp .env.example .env.test
# then replace the values in .env.test
```

Run the Cypress tests:

```
npm run test:e2e
```

Open the Cypress tests:

```
npm run test:e2e:open
```