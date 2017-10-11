require('dotenv').config({ path: 'variables.env' });

module.exports = {
  NODE_ENV: `'${process.env.NODE_ENV}'`,
  MAPS_API_KEY: `'${process.env.MAPS_API_KEY}'`,
  GEOLOCATION_API_KEY: `'${process.env.GEOLOCATION_API_KEY}'`,
  SITE_URL: `'${process.env.SITE_URL}'`,
  SERVER_URL: `'${process.env.SERVER_URL}'`,
  API_URL: `'${process.env.API_URL}'`
}
