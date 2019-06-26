exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("items").insert([
    {
      id: 1,
      users_id: 1,
      users_username: "test1",
      name: "Rustic Granite Bike",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "243.00",
      category: "monitors"
    },
    {
      id: 2,
      users_id: 1,
      users_username: "test1",
      name: "Fantastic Fresh Car",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "206.00",
      category: "monitors"
    },
    {
      id: 3,
      users_id: 1,
      users_username: "test1",
      name: "Handmade Soft Chicken",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "0.00",
      category: "monitors"
    },
    {
      id: 4,
      users_id: 1,
      users_username: "test1",
      name: "Ergonomic Metal Hat",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "433.00",
      category: "monitors"
    },
    {
      id: 5,
      users_id: 2,
      users_username: "test2",
      name: "Small Concrete Cheese",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "458.00",
      category: "monitors"
    },
    {
      id: 6,
      users_id: 2,
      users_username: "test2",
      name: "Practical Fresh Pizza",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "104.00",
      category: "monitors"
    },
    {
      id: 7,
      users_id: 2,
      users_username: "test2",
      name: "Awesome Rubber Bike",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "926.00",
      category: "monitors"
    },
    {
      id: 8,
      users_id: 2,
      users_username: "test2",
      name: "Rustic Soft Shoes",
      image_url:
        "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "461.00",
      category: "monitors"
    },
    {
      id: 9,
      users_id: 1,
      users_username: "test1",
      name: "Unbranded Wooden Car",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "91.00",
      category: "cameras"
    },
    {
      id: 10,
      users_id: 1,
      users_username: "test1",
      name: "Rustic Granite Shoes",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "315.00",
      category: "cameras"
    },
    {
      id: 11,
      users_id: 1,
      users_username: "test1",
      name: "Handmade Wooden Tuna",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "789.00",
      category: "cameras"
    },
    {
      id: 12,
      users_id: 1,
      users_username: "test1",
      name: "Handcrafted Metal Bacon",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "318.00",
      category: "cameras"
    },
    {
      id: 13,
      users_id: 1,
      users_username: "test1",
      name: "Awesome Metal Table",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "753.00",
      category: "cameras"
    },
    {
      id: 14,
      users_id: 1,
      users_username: "test1",
      name: "Licensed Metal Car",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "24.00",
      category: "cameras"
    },
    {
      id: 15,
      users_id: 1,
      users_username: "test1",
      name: "Awesome Granite Chips",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "469.00",
      category: "cameras"
    },
    {
      id: 16,
      users_id: 1,
      users_username: "test1",
      name: "Practical Frozen Bacon",
      image_url:
        "https://images.unsplash.com/photo-1474138452695-d27840ebf07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "639.00",
      category: "cameras"
    },
    {
      id: 17,
      users_id: 2,
      users_username: "test2",
      name: "Licensed Wooden Mouse",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "148.00",
      category: "lights"
    },
    {
      id: 18,
      users_id: 2,
      users_username: "test2",
      name: "Small Fresh Bike",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "688.00",
      category: "lights"
    },
    {
      id: 19,
      users_id: 2,
      users_username: "test2",
      name: "Tasty Concrete Mouse",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "235.00",
      category: "lights"
    },
    {
      id: 20,
      users_id: 2,
      users_username: "test2",
      name: "Fantastic Frozen Computer",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "240.00",
      category: "lights"
    },
    {
      id: 21,
      users_id: 2,
      users_username: "test2",
      name: "Sleek Frozen Sausages",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "505.00",
      category: "lights"
    },
    {
      id: 22,
      users_id: 2,
      users_username: "test2",
      name: "Generic Fresh Fish",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "441.00",
      category: "lights"
    },
    {
      id: 23,
      users_id: 2,
      users_username: "test2",
      name: "Rustic Fresh Keyboard",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "993.00",
      category: "lights"
    },
    {
      id: 24,
      users_id: 2,
      users_username: "test2",
      name: "Refined Wooden Fish",
      image_url:
        "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "893.00",
      category: "lights"
    },
    {
      id: 25,
      users_id: 1,
      users_username: "test1",
      name: "Tasty Metal Chicken",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "800.00",
      category: "cdjs"
    },
    {
      id: 26,
      users_id: 1,
      users_username: "test1",
      name: "Unbranded Granite Bike",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "112.00",
      category: "cdjs"
    },
    {
      id: 27,
      users_id: 1,
      users_username: "test1",
      name: "Handcrafted Soft Chicken",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "997.00",
      category: "cdjs"
    },
    {
      id: 28,
      users_id: 1,
      users_username: "test1",
      name: "Awesome Plastic Table",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "652.00",
      category: "cdjs"
    },
    {
      id: 29,
      users_id: 1,
      users_username: "test1",
      name: "Rustic Cotton Keyboard",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "19.00",
      category: "cdjs"
    },
    {
      id: 30,
      users_id: 1,
      users_username: "test1",
      name: "Handmade Soft Table",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "685.00",
      category: "cdjs"
    },
    {
      id: 31,
      users_id: 1,
      users_username: "test1",
      name: "Handmade Cotton Towels",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "284.00",
      category: "cdjs"
    },
    {
      id: 32,
      users_id: 1,
      users_username: "test1",
      name: "Small Fresh Bike",
      image_url:
        "https://images.unsplash.com/photo-1494214838014-b52af3638ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "735.00",
      category: "cdjs"
    },
    {
      id: 33,
      users_id: 2,
      users_username: "test2",
      name: "Rustic Granite Soap",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "486.00",
      category: "video"
    },
    {
      id: 34,
      users_id: 2,
      users_username: "test2",
      name: "Ergonomic Plastic Bike",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "185.00",
      category: "video"
    },
    {
      id: 35,
      users_id: 2,
      users_username: "test2",
      name: "Refined Metal Shoes",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "122.00",
      category: "video"
    },
    {
      id: 36,
      users_id: 2,
      users_username: "test2",
      name: "Rustic Rubber Chair",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "502.00",
      category: "video"
    },
    {
      id: 37,
      users_id: 2,
      users_username: "test2",
      name: "Generic Soft Shoes",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "503.00",
      category: "video"
    },
    {
      id: 38,
      users_id: 2,
      users_username: "test2",
      name: "Small Soft Table",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "196.00",
      category: "video"
    },
    {
      id: 39,
      users_id: 2,
      users_username: "test2",
      name: "Small Plastic Gloves",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "196.00",
      category: "video"
    },
    {
      id: 40,
      users_id: 2,
      users_username: "test2",
      name: "Fantastic Cotton Pants",
      image_url:
        "https://images.unsplash.com/photo-1530832227153-9276cf1d19af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "89.00",
      category: "video"
    },
    {
      id: 41,
      users_id: 1,
      users_username: "test1",
      name: "Gorgeous Cotton Bike",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "240.00",
      category: "events"
    },
    {
      id: 42,
      users_id: 1,
      users_username: "test1",
      name: "Rustic Soft Pants",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "190.00",
      category: "events"
    },
    {
      id: 43,
      users_id: 1,
      users_username: "test1",
      name: "Generic Metal Hat",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "662.00",
      category: "events"
    },
    {
      id: 44,
      users_id: 1,
      users_username: "test1",
      name: "Gorgeous Rubber Shirt",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "485.00",
      category: "events"
    },
    {
      id: 45,
      users_id: 1,
      users_username: "test1",
      name: "Refined Plastic Table",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "201.00",
      category: "events"
    },
    {
      id: 46,
      users_id: 1,
      users_username: "test1",
      name: "Incredible Granite Chips",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "600.00",
      category: "events"
    },
    {
      id: 47,
      users_id: 1,
      users_username: "test1",
      name: "Intelligent Rubber Shoes",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "635.00",
      category: "events"
    },
    {
      id: 48,
      users_id: 1,
      users_username: "test1",
      name: "Rustic Steel Sausages",
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: "273.00",
      category: "events"
    }
  ]);
};
