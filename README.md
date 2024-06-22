# How to Use
1. start dev server with docker compose
2. manually start dev server

## Migrations

### Generation
```
npm run migration-generate -- --name ${file_name}
```
### Running Migrations
migration
```
npm run migration-{env}
```
undo migration
```
npm run migration-{env}-undo
```

## Seeders
### Generation
```
npm run seeds-generate -- --name ${file_name}
```

### Running seeds
create seeder (file name needs extension)
```
npm run seeds-{env} -- --seed ${file_name}.js
```
undo seeder (file name needs extension)
```
npm run seeds-development-undo -- --seed ${file_name}.js
```

# TODO
1. test 
2. docker compose 
3. eslint
4. typescript