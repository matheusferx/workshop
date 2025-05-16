/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.up = async function(knex) {
  await knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('descricao').notNullable();
    table.string('marca').notNullable();
    table.decimal('valor', 10, 2).notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
module.exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('products');
};
