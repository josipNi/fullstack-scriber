import express from 'express';
import { getIndexedData } from './data-indexer.js';
import { router } from './router.js';
import { port } from './config.js';

export async function startServer() {
    try {
        getIndexedData();
        const application = express();
        application.use(express.json());
        application.use(router);
        const server = await new Promise((resolve) => {
            const server = application.listen(port, () => {
                console.log(`Server listening on port ${port}`);
                resolve(server);
            });
        });

        return { server, application };
    } catch (error) {
        console.error(`Exception occured during server startup.`, error);
    }
}
