/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('group_code').del()
  await knex('group_code').insert([
    {id: 1, code: "ST111", col: "3", row: "B"},
    {id: 2, code: "ST131", col: "1", row: "E"},
    {id: 3, code: "ST151", col: "6", row: "G"}
  ]);
};
