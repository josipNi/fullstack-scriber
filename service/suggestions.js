import { getIndexedData } from './data-indexer.js';

export const getSuggestionsForType = async (type, searchPrefix, numberOfSuggestedEntries) => {
    const indexedData = getIndexedData();

    const data = indexedData[type];
    const returnData = [];
    for (const key in data) {
        if (returnData.length === numberOfSuggestedEntries) {
            break;
        }
        const lowerCasedKey = key.toLowerCase();
        if (lowerCasedKey.startsWith(searchPrefix)) {
            returnData.push(data[key]);
        }
    }
    return returnData;
};
