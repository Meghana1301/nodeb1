exports.handler = async (event, context) => {
    const jsonData = require('../public/api/index.json'); // Load your JSON file
    return {
        body: JSON.stringify(jsonData),
    };
};
