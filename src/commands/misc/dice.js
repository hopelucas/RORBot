var array = [1, 2, 3, 4, 5];

module.exports = {
    name: 'roll',
    description: 'Replies with the bot ping!',


  get random_array_member() {
    return array[Math.floor(Math.random()*array.length)]
  }
}
    