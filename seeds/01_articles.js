
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {title:'What a world', body:"isn't it wonderful", author:'Brahda Iz', urlTitle:'Chee'},
        {title:'Got Milk?', body:"Milk man be coming", author:'Parks and Palaces', urlTitle:'Gotcha'},
        {title:"Fish don't fry in the kitchen", body:"Ohh lala", author:'Bloodhound Gang', urlTitle:'FoxtrotUnicornCharlieKilo'}
      ]);
    });
};
