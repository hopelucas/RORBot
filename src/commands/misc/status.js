module.exports = (client) => {
    console.log('Natsuki is online!');
    client.user.setActivity('my status', { type: 'PLAYING' })
}