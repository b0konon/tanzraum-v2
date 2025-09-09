Redeploy with:

git pull
nano .env
export NODE_OPTIONS=--max-old-space-size=2048 (strapi only)
yarn build
pm2 restart (frontend or strapi) --update-env