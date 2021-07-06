import { Router } from 'express';
import { getSuggestionsForType } from './suggestions.js';
import { numberOfSuggestedEntries } from './config.js';

export const router = Router();

router.get('/suggest/tracks', async (request, response) => {
    const prefix = request.query['prefix'];
    if (!prefix) {
        return response.status(400).json({ errors: ['Missing prefix'] });
    }

    const suggestions = await getSuggestionsForType('tracks', prefix, numberOfSuggestedEntries);
    return response.json({ suggestions });
});

router.get('/suggest/artists', async (request, response) => {
    const prefix = request.query['prefix'];
    if (!prefix) {
        return response.status(400).json({ errors: ['Missing prefix'] });
    }

    const suggestions = await getSuggestionsForType('artists', prefix, numberOfSuggestedEntries);
    return response.json({ suggestions });
});

router.get('/suggest/releases', async (request, response) => {
    const prefix = request.query['prefix'];
    if (!prefix) {
        return response.status(400).json({ errors: ['Missing prefix'] });
    }
    const suggestions = await getSuggestionsForType('releases', prefix, numberOfSuggestedEntries);
    return response.json({ suggestions });
});

router.get('/suggest/all', async (request, response) => {
    const prefix = request.query['prefix'];
    if (!prefix) {
        return response.status(400).json({ errors: ['Missing prefix'] });
    }
    const artists = await getSuggestionsForType('artists', prefix, numberOfSuggestedEntries);
    const tracks = await getSuggestionsForType('tracks', prefix, numberOfSuggestedEntries);
    const releases = await getSuggestionsForType('releases', prefix, numberOfSuggestedEntries);
    return response.json({ artists, tracks, releases });
});
