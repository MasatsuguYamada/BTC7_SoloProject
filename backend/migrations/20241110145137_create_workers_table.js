/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("workers", function(table){
        table.increments("id").primary();
        table.string("name", 64).notNullable();
        table.integer("code_id").notNullable();

        table.foreign("code_id").references("group_code.id").onDelete("CASCADE")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("workers")
};
