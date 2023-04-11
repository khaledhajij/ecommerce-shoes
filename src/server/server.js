import { belongsTo, createServer, hasMany, Model } from 'miragejs'
import shoesData, { listsArr } from '../server/data'
export function makeServer ({ environment = 'test' } = {}) {
  let server = createServer({
    models: {
      shoe: Model.extend({
        list: belongsTo()
      }),
      list: Model.extend({
        shoes: hasMany()
      })
    },
    seeds (server) {
      // create lists
      const lists = listsArr.map(list =>
        server.create('list', { name: list.name })
      )
      // create shoes and associate them with their corresponding category
      shoesData.map(shoe => {
        const matchingList = lists.find(list => list.name === shoe.list)
        server.create('shoe', {
          ...shoe,
          list: matchingList || null
        })
      })
    },
    routes () {
      this.namespace = 'api'
      // Get all shoes
      this.get('/shoes', schema => {
        return schema.shoes.all()
      })
      // Get shoes based on their name
      this.get('/shoes/name/:nameSearch', (schema, request) => {
        const { nameSearch } = request.params
        return schema.shoes
          .all()
          .filter(shoe =>
            shoe.name.toLowerCase().includes(nameSearch.toLowerCase())
          )
      })
      // Get shoes lists
      this.get('/lists', (schema, request) => {
        return schema.lists.all()
      })
      // Get shoes based on their list
      this.get('/lists/:id/shoes', (schema, request) => {
        const categoryId = request.params.id
        const list = schema.lists.find(categoryId)
        return list.shoes
      })
      this.post('https://tl.ytlogs.ru/timesince', () => {
        return
      })
      this.get('https://cdnmc.global-cache.online/cfgsi_5b.json', () => {
        return {
          // your response data here
        };
      });
    }
  })

  return server
}
