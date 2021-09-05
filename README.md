
The goal of this project is to build an auto-suggest REST api for a music application. There is a data file (./service/data.json) that contains 10,000 album entries from discogs.com.

There should be four endpoints in the the service:

1. `http://service/suggest/tracks?prefix=:prefix`
2. `http://service/suggest/artists?prefix=:prefix`
3. `http://service/suggest/releases?prefix=:prefix`
4. `http://service/suggest/all?prefix=:prefix`

With outputs shaped as follows:

## `http://service/suggest/tracks?prefix=:prefix`
```
{
  "suggestions": [
    {
      "title": <track_title>,
      "duration": <duration>,
      "release": {
        "id": <release_id>,
        "title": <release_title>,
        "notes": <release_notes>
      }
    }
  ]
}
```

## `http://service/suggest/artists?prefix=:prefix`
```
{
  "suggestions": [
    {
      "id": <artist_id>,
      "name": <artist_name>,
      "releases": [
        {
          "id": <release_id>,
          "title": <release_title>,
          "notes": <release_notes>
        }
      ]
    }
  ]
}
```

## `http://service/suggest/releases?prefix=:prefix`
```
{
  "suggestions": [
    {
      "id": <release_id>,
      "title": <release_title>,
      "notes": <release_notes>,
      "artist": [
        {
          "id": <artist_id>,
          "name": <artist_name>
        }
      ]
    }
  ]
}
```

## `http://service/suggest/all?prefix=:prefix`
```
{
  "artists": [
    {
      "id": <artist_id>,
      "name": <artist_name>,
      "releases": [
        "id": <release_id>,
        "title": <release_title>,
        "notes": <release_notes>
      ]
    }
  ],
  "tracks": [
    {
      "title": <track_title>,
      "duration": <duration>,
      "release": {
        "id": <release_id>,
        "title": <release_title>,
        "notes": <release_notes>
    }
  ],
  "releases": [
    {
      "id": <release_id>,
      "title": <release_title>,
      "notes": <release_notes>,
      "artist": [
        {
          "id": <artist_id>,
          "name": <artist_name>
        }
      ]
    }
  ]
}
```

Each suggestion collection should return no more than 5 entries.

The test code is a node.js project.

To test your service, ensure it is running and enter the following commands:

```
cd test
npm i
npm run test
```


