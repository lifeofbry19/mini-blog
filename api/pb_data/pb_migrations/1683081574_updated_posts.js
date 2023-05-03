migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("se31hn8qhzctpvh")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("se31hn8qhzctpvh")

  collection.createRule = null

  return dao.saveCollection(collection)
})
