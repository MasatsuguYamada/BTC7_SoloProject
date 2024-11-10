/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('group_code').del()
  await knex('group_code').insert([
    {id: 1, code: "ST111", col: 3, row: 3},
    {id: 2, code: "ST131", col: 1, row: 5},
    {id: 3, code: "ST151", col: 6, row: 2}
  ]);
};
