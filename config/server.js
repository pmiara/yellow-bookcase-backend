module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'P6WYKF2OKCx1/DC79cw4tDfCkQ6L5kqMb+w61X/pjUYHWK4ThoaevDE4Es4Kk2uvh65oL55Dq1xcLtEaLcARnQ=='),
    },
  },
});
