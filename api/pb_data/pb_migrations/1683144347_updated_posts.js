migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("se31hn8qhzctpvh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xgzizmmb",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("se31hn8qhzctpvh")

  // remove
  collection.schema.removeField("xgzizmmb")

  return dao.saveCollection(collection)
})
