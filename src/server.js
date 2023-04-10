import { belongsTo, createServer, hasMany, Model } from "miragejs";
import shoesData, { lists } from "./data";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    models: {
      shoe: Model.extend({
        list: belongsTo(),
      }),
      list: Model.extend({
        shoes: hasMany(),
      }),
    },
    seeds(server) {
      lists.forEach((list) => server.create("list", { name: list.name }));
      shoesData.forEach((shoe) => {
        // const list = server.schema.lists.all().find(
        //   (shl) => shl.name === shoe.list
        // );
        console.log(server.schema.lists.find(shoe.list))
        // console.log(list)
        // server.create("shoe", { ...shoe, list });
      });
    },
    routes() {
      // Get all shoes
      this.get("/api/shoes", (schema) => {
        return schema.shoes.all();
      });
      // Get shoes based on their name
      this.get("/api/shoes/name/:nameSearch", (schema, request) => {
        const { nameSearch } = request.params;
        return schema.shoes
          .all()
          .filter((shoe) =>
            shoe.name.toLowerCase().includes(nameSearch.toLowerCase())
          );
      });
      // Get shoes lists
      this.get("/api/lists", (schema, request) => {
        return schema.lists.all();
      });
      // Get shoes based on their list
      this.get("/api/lists/:id/shoes", (schema, request) => {
        const categoryId = request.params.id;
        const list = schema.lists.find(categoryId);
        return list.shoes;
      });
    },
  });

  return server;
}
