
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Cantankerous', price: 17.00, inventory: 1},
        {name: 'Ubermench', price: 34.00, inventory: 2},
        {name: 'Hank Hill', price: 51.00, inventory: 3}
      ]);
    });
};
