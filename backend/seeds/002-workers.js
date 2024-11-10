/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('workers').del()
  await knex('workers').insert([
    {id: 1, name: '山田', code_id:1},
    {id: 2, name: '鈴木', code_id:3},
    {id: 3, name: '大谷', code_id:2},
    {id: 4, name: '田中', code_id:2},
    {id: 5, name: 'マイケル・ジャクソン', code_id:3},
  ]);
};
