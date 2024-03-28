# Hono & neon Postgresql db (drizzle orm)


## Create project
### Create project with wrangler cli
```
# install wrangler
$ npm install -g wrangler

# check wrangler version
$ wrangler --version

# init project
$ wrangler init 9oapi
```

### Install Hono
```
$ npm install hono
```

### Install neon & drizzle orm
```
$ npm install neon

$ npm install drizzle-kit

$ npm install drizzle-orm -D
```

## Deployment
```
# login to Cloudflare 
$ npx wrangler login

# deploy
npm run deploy
```

---
docs:
- [Wrangler]('https://developers.cloudflare.com/workers/wrangler/')
- [Hono]('https://hono.dev/')
- [Neon]('https://neon.tech/')
- [Drizzle ORM]('https://orm.drizzle.team/')