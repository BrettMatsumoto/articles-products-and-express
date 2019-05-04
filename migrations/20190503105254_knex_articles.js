
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', (table) => {
    table.increments('id');
    table.string('title', 255).notNull();
    table.string('body', 255).notNull();
    table.string('author', 255).notNull();
    table.string('urltitle', 255).notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles');
};
