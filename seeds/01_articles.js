
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {title:'What a world', body:"isn't it wonderful", author:'Brahda Iz', urltitle:'Chee'},
        {title:'Got Milk', body:"Milk man be coming", author:'Parks and Palaces', urltitle:'Gotcha'},
        {title:"Fish don't fry in the kitchen", body:"Ohh lala", author:'Bloodhound Gang', urltitle:'FoxtrotUnicornCharlieKilo'}
      ]);
    });
};
