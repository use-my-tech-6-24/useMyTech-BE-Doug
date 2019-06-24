exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("rentable").insert([
    {
      id: 1,
      item_id: 1,
      user_id: 2,
      username: "test2",
      message: "test message"
    },
    {
      id: 2,
      item_id: 2,
      user_id: 2,
      username: "test2",
      message: "test messag"
    },
    { id: 3, item_id: 3, user_id: 2, username: "test2", message: "test messa" }
  ]);
};
