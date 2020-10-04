module.exports = async(client) => {
    console.log('Ready!');
    client.user.setActivity(`on the server.`, {
      type: 'WATCHING'
    });
}