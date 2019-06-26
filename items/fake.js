let faker = require("faker");

function runSomething() {
  let newData = [];
  for (let i = 41; i <= 48; i++) {
    let newObj = {
      id: i,
      users_id: 1,
      users_username: "test1",
      name: faker.commerce.productName(),
      image_url:
        "https://images.unsplash.com/photo-1549046675-dd779977de88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2013&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper sed arcu ac pellentesque. Praesent porta ex ac risus mollis, ut convallis sapien rhoncus. Integer sit amet nunc maximus, imperdiet turpis eget, venenatis eros. Quisque ornare rhoncus velit, nec pellentesque metus consectetur nec.",
      price: faker.commerce.price(),
      category: "events"
    };
    newData.push(newObj);
  }

  return console.log(newData);
}

runSomething();
