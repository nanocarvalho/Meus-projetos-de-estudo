### A simple TODO like api

Built using:
- Express
- Sequelize
- Sqlite3


## Api docs

#### Return all notes

```http
  GET /
```


#### Return a single note

```http
  GET /id
```

| Param   | Type       | description
| :---------- | :--------- | :---------
| `id`      | `number` | You need to provide a valid id

#### Add a new note

```http
  POST /new
```
 You need to provide a json body with the key/pair `{content: Your note text}`


#### Edit a note

```http
  PUT /edit/id
```

| Param   | Type       |
| :---------- | :--------- |
| `id`      | `number` |

#### Delete a note

```http
  DELETE /delete/id
```

| Param   | Type       |
| :---------- | :--------- |
| `id`      | `number` |




