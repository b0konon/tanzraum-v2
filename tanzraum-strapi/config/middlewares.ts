export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'http://localhost:1337',
        process.env.FRONTEND_URL,
        process.env.SERVER_URL,
      ],
      methods: (ctx) => {
        const origin = ctx.request.header.origin;
        if (
          origin === 'http://localhost:1337' ||
          origin === process.env.SERVER_URL
        ) {
          return ['GET', 'POST', 'PUT', 'DELETE'];
        }
        return ['GET'];
      },
      headers: '*',
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
