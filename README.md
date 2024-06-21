# How to Use
1. start server with docker compose
2. manually start dev server

## Migrations

### Generation
1. `npm run migration-generate -- --name ${NAME_OF_YOUR_MIGRATION}`
2. Change the file extension of the generated migration from `.js` to `.ts`

### Running Migrations
`npm run migration`