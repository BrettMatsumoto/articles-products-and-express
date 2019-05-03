
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.string('name', 255).notNull();
    table.decimal('price').notNull();
    table.integer('inventory').notNull();
  })
}; 

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
