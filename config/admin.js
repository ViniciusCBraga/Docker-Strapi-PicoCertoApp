module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','aMYgWUfrp7TuxEj4hTPB/iq+mJrkrvM/fYpAqFtXvxs='),
  },
  apiToken: {
    salt: 'i6Q1M8XzVHIKK41GRX+zdlfdv4jl546C3NOz7xVe8Wg=',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
