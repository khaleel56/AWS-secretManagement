const {SecretsManagerClient, GetSecretValueCommand  } = require('@aws-sdk/client-secrets-manager')

const client  = new SecretsManagerClient({
    region: 'eu-north-1',
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY
    }
  });

const secretName = 'testSecret';

async function getSecretString() {
    try {
      const command = new GetSecretValueCommand({ SecretId: secretName });
      const data = await client.send(command);
      const secretString = data.SecretString;
      console.log(secretString);
    } catch (err) {
      console.error(err);
    }
  }

getSecretString();
