exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("items").insert([
    {
      id: 1,
      users_id: 1,
      users_username: "test1",
      name: "samsung",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Monitor"
    },
    {
      id: 2,
      users_id: 1,
      users_username: "test1",
      name: "korea",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Monitor"
    },
    {
      id: 3,
      users_id: 1,
      users_username: "test1",
      name: "china",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Camera"
    },
    {
      id: 4,
      users_id: 2,
      users_username: "test2",
      name: "philapino",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Lights"
    },
    {
      id: 5,
      users_id: 2,
      users_username: "test2",
      name: "USA",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Lights"
    },
    {
      id: 6,
      users_id: 2,
      users_username: "test2",
      name: "Mexico",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "CDJS"
    },
    {
      id: 7,
      users_id: 2,
      users_username: "test2",
      name: "Mexico",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "CDJS"
    },
    {
      id: 8,
      users_id: 2,
      users_username: "test2",
      name: "Mexico",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Video"
    },
    {
      id: 9,
      users_id: 1,
      users_username: "test1",
      name: "Mexico",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Video"
    },
    {
      id: 10,
      users_id: 1,
      users_username: "test1",
      name: "Mexico",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Events"
    },
    {
      id: 11,
      users_id: 2,
      users_username: "test2",
      name: "Mexico",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Events"
    },
    {
      id: 12,
      users_id: 2,
      users_username: "test2",
      name: "china",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec. ",
      price: 22.5,
      category: "Camera"
    }
  ]);
};
