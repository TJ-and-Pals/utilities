require('dotenv').config();
const { execSync } = require('child_process');
const path = require('path');
const sh = require('shelljs');
const cwd = sh.pwd().toString();

const getConfig = bucket => {
    switch(process.argv[2]) {
        case "--app": return "storage-app-cors.json";
    }

    return null;
}

const getAction = () => {
    switch(process.argv[3]) {
        case "--get": return "get";
        case "--set": return "set";
    }

    return null;
}

const bucket = process.env.CLOUD_STORAGE_BUCKET;
const bucket = getBucket();
const configFile = getConfig();
const action = getAction();

if(bucket === null || configFile === null || action === null) {
    console.log("invalid command");
    return;
}

const configPath = path.resolve(cwd, "src", configFile);


if(action === "set") {
    execSync(`gsutil cors set ${configPath} gs://${bucket}`, {stdio:[0,1,2]});
} else {
    execSync(`gsutil cors get gs://${bucket}`, {stdio:[0,1,2]});
}

