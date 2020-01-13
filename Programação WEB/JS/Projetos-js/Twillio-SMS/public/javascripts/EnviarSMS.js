
const accountSid = 'ACc337e0decdfb3eb55e4cfacca5ee0c90';
const authToken = 'df1756c46d93ae1bb6ca4f3d2450b79d';
const client = require('twillio')(accountSid, authToken);


client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+19153206787',
        to: '+5511959358729'
    })
    .then(message => console.log(message.sid));





