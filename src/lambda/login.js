const { SiteClient } = require('datocms-client');
const { DATO_CMS_FULL_ACCESS_TOKEN } = process.env;

const createUser = async (client) => {
  try {
    const record = await client.items.create({
      name: "Joe Taylor",
      email: "joe@taylor.com"
    })
    console.log('record created', record)
  } catch (e) {
    throw e
  }
}

exports.handler = async (event, context) => {
  const client = new SiteClient(DATO_CMS_FULL_ACCESS_TOKEN)
  await createUser(client)
};
