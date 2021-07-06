import fs from 'fs';
import { mapExtraArtists } from './config.js';

let isIndexed = false;
const indexedData = {
    tracks: {},
    artists: {},
    releases: {},
};

const indexTrackList = (trackList, release) => {
    trackList.forEach((x) => {
        const title = x.Title;
        const duration = x.Duration;
        const uniqueId = `${title}_${duration}_${release.Id}`;
        indexedData.tracks[uniqueId] = {
            title,
            duration,
            release,
        };
    });
};

const indexArtistsList = (artistList, release) => {
    artistList.forEach((x) => {
        const id = x.Id;
        const name = x.Name;
        const uniqueId = `${name}_${id}`;
        const existingArtist = indexedData.artists[uniqueId];
        if (!existingArtist) {
            indexedData.artists[uniqueId] = {
                id,
                name,
                releases: [release],
            };
        } else {
            const hasReleaseSet = existingArtist.releases.some((y) => y.id === release.id);
            if (!hasReleaseSet) {
                existingArtist.releases.push(release);
            }
        }
    });
};

const indexData = (data) => {
    for (const index in data) {
        const element = data[index];

        const title = element.Title;
        const release = {
            id: element.Id,
            title,
            notes: element.Notes,
        };
        const artists = element.Artists;
        let extraArtists = element.ExtraArtists;
        if (!mapExtraArtists) {
            extraArtists = [];
        }
        const allArtists = artists.concat(extraArtists).map((x) => {
            return {
                id: x.Id,
                name: x.Name,
            };
        });
        indexedData.releases[title] = {
            ...release,
            artist: allArtists,
        };

        indexTrackList(element.TrackList, release);
        indexArtistsList(artists, release);
        indexArtistsList(extraArtists, release);
    }
};

export const getIndexedData = () => {
    try {
        if (isIndexed) {
            return indexedData;
        } else {
            const { releases } = JSON.parse(fs.readFileSync('./data.json'));
            indexData(releases);
            isIndexed = true;
            return indexedData;
        }
    } catch (error) {
        console.error(error);
    }
};
