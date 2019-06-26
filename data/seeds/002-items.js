exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("items").insert([
    {
      id: 1,
      users_id: 1,
      users_username: "test1",
      name: "samsung",
      image_url: "http://imugr.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "cameras"
    },
    {
      id: 2,
      users_id: 1,
      users_username: "test1",
      name: "korea",
      image_url: "http://imugr.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "monitors"
    },
    {
      id: 3,
      users_id: 1,
      users_username: "test1",
      name: "china",
      image_url: "http://imugr.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "lights"
    },
    {
      id: 4,
      users_id: 2,
      users_username: "test2",
      name: "philapino",
      image_url: "http://imugr.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "cdjs"
    },
    {
      id: 5,
      users_id: 2,
      users_username: "test2",
      name: "USA",
      image_url: "http://imugr.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "video cameras"
    },
    {
      id: 6,
      users_id: 2,
      users_username: "test2",
      name: "Mexico",
      image_url: "http://imugr.com",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "events"
    }
  ]);
};
