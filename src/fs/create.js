const fs = require('fs').promises;
const path = require('path');

const create = async () => {
    const dir = path.join(__dirname, 'files');
    const filePath = path.join(dir, 'fresh.txt');
    const content = 'I am a fresh and young';
    try {
        try {
            await fs.mkdir(dir, {
                recursive: true });
        } catch (err) {
            console.error('Error creating directory:', err);
        }
        try {
            await fs.access(filePath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }
        await fs.writeFile(filePath, content, 'utf8');
        console.log('File created successfully');
    } catch (error) {
        console.error(error.message);
    }
};

await create();
