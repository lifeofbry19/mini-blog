migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("se31hn8qhzctpvh")

  // remove
  collection.schema.removeField("prkgwlua")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("se31hn8qhzctpvh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prkgwlua",
    "name": "author",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
