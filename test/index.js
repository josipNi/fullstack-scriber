const chakram = require('chakram')
const expect = chakram.expect

describe('suggest', () => {
  it("madonna returns ray of light", async () => {
    const response = await chakram.get('http://localhost/suggest/artists?prefix=madon')
    expect(response).to.have.status(200)
    await expect(response).to.comprise.of.json({
      "suggestions": [
        {
          "id": 8760,
          "name": "Madonna",
          "releases": [
            {
              "id": "14423",
              "title": "Ray Of Light",
              "notes": "The catalogue number on the spine is different from that on the label.\n\nSome copies have a sticker on front cover (applied on the shrinkwrap).\nMatte cover.\nTransparent inner sleeves."
            }
          ]
        }
      ]
    })
    return chakram.wait()
  })
  it("world tracks", async () => {
    const response = await chakram.get('http://localhost/suggest/tracks?prefix=world')
    const worldTracks = {
      "suggestions": [
        {
          "title": "World Domination",
          "duration": "6:46",
          "release": {
            "id": "884",
            "title": "The Fruity Green",
            "notes": null
          }
        },
        {
          "title": "World Too Mean",
          "duration": "",
          "release": {
            "id": "1086",
            "title": "Deep South Experience",
            "notes": null
          }
        },
        {
          "title": "World Unknown",
          "duration": "",
          "release": {
            "id": "2255",
            "title": "151 (The Remixes)",
            "notes": "℗ 1992 Djax Records \n\n"
          }
        },
        {
          "title": "World In My Eyes (Oil Tank Mix)",
          "duration": "7:29",
          "release": {
            "id": "2299",
            "title": "World In My Eyes / Happiest Girl / Sea Of Sin",
            "notes": "Comes in a plain white paper inner sleeve.\n\nMastering and pressing credits are not listed on this issue though recognized in the runouts\n\nVariations of this UK 12\"\n\n1) Pressed by P.R. Records Limited (this one)\n[url=http://www.discogs.com/release/14342907] 2) Pressed by MPO  [/url]  \n[url=http://www.discogs.com/release/1662861] 3) Repress with \">\" in barcode  [/url]  \n"
          }
        },
        {
          "title": "Worldcup",
          "duration": "3:05",
          "release": {
            "id": "3425",
            "title": "Techno Methods Vol .02",
            "notes": "Track 13, the current song is \"(Intro) Version II\" [url=http://www.discogs.com/Surgeon-Basictonal-remake/release/1214299]Basictonal-remake[/url].\nTrack 17, This is not \"Be Straight\" the current song is \"Mad Situation\" A-Side single of the same: [url=http://www.discogs.com/TNI-Mad-Situation-Be-Straight/release/44910]Mad Situation / Be Straight[/url].\nTrack 18, renamed \"Echo Final\" is a misprint. The current song is \"Style Wars\"\nTrack 23, Is a mix of \"Original Mix\" release in 1990 and \"Light City Mix\" mixed by Terrace, release in 1992.\n"
          }
        }
      ]
    }
    expect(response).to.have.status(200)
    await expect(response).to.comprise.of.json(worldTracks)
    return chakram.wait()
  })
  it("dream releases", async () => {
    const dreamReleases = {
      "suggestions": [
      {
        "id": "471",
        "title": "Dreaming (Dahlbäck And Hulkkonen Remixes)",
        "notes": null,
        "artist": [
          {
            "id": 50,
            "name": "ADNY"
          }
        ]
      },
      {
        "id": "722",
        "title": "Dream Sequence",
        "notes": "Recorded in Berlin, Nov. 1991.\nDistributed by EFA Distribution.\nRe-released in 2000 as [url=http://www.discogs.com/release/723]Tresor 149[/url] with additional tracks.\n",
        "artist": [
          {
            "id": 1100,
            "name": "Blake Baxter"
          }
        ]
      },
      {
        "id": "2381",
        "title": "Dream Girl",
        "notes": null,
        "artist": [
          {
            "id": 2695,
            "name": "Pierre's Pfantasy Club"
          }
        ]
      },
      {
        "id": "2596",
        "title": "Dreaming Of Electro She e.p.",
        "notes": "©2000 Trama Industries ℗2000 Trama Industries",
        "artist": [
          {
            "id": 572,
            "name": "Decal"
          }
        ]
      },
      {
        "id": "4212",
        "title": "Dreams Of Elsewhere",
        "notes": "Jewel case version with 4 page booklet",
        "artist": [
          {
            "id": 173,
            "name": "Common Factor"
          }
        ]
      }
    ]
    }
    const response = await chakram.get('http://localhost/suggest/releases?prefix=dream')
    expect(response).to.have.status(200)
    await expect(response).to.comprise.of.json(dreamReleases)
    return chakram.wait()
  })
  it("all zz should give us zzonked and zzino", async () => {
    const zz = {
      "artists": [
      {
        "id": 8871,
        "name": "Zzino vs. Filterheadz",
        "releases": [
          {
            "id": "16429",
            "title": "African Bulldozer / Sparadrap",
            "notes": "Recorded at Borderland Studio\nPublished by Headroom Music"
          }
        ]
      }
    ],
      "tracks": [
      {
        "title": "Zzonked",
        "duration": "7:21",
        "release": {
          "id": "4475",
          "title": "Intelligent Univers",
          "notes": null
        }
      },
      {
        "title": "ZZZzz9",
        "duration": "",
        "release": {
          "id": "6679",
          "title": "Machine Component 2",
          "notes": "Comes in a plastic zip-lock bag.\n\nLimited to 600.\n\nThe Machine components were all designed to be intermixable, thus from the components you could create your own machine. Each one is only discernable from the other by the hand written markings on the back of the sleeve.\n"
        }
      }
    ],
      "releases": []
    }
    const response = await chakram.get('http://localhost/suggest/all?prefix=zz')
    expect(response).to.have.status(200)
    await expect(response).to.comprise.of.json(zz)
    return chakram.wait()
  })
})
