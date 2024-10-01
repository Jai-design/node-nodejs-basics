const create = async () => {
    const fs = require('fs');
    const path = require('path');
function createFreshFile() {
    const dir = path.join(__dirname, 'files');
    const filePath = path.join(dir, 'fresh.txt');
    const content = 'I am fresh and young';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    if (fs.existsSync(filePath)) {
        throw new Error('FSoperation failed');
    }
    fs.writeFileSync(filePath, content, 'utf8');
}
    try {
        createFreshFile();
        console.log('File created successfully');
    } catch (error) {
        console.error(error.message);
    }
};

await create();
