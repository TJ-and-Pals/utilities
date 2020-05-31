require('dotenv').config();
const spawn = require('cross-spawn');
const fs = require('fs');
const os = require('os');
const path = require('path');

const cmd = process.argv[2];

const localPath = path.resolve(process.env.MEDIA_PATH);
const CloudStorageOrigin = process.env.CLOUD_STORAGE_ADDR;

console.log(`Syncing ${cmd}`);
console.log(`From ${localPath}`);
console.log(`To ${CloudStorageOrigin}`);

if(cmd === "--hard") {
    spawn.sync("gsutil", ["-m", "rsync", "-d", "-r", localPath, CloudStorageOrigin]);
} else if(cmd === "--soft") {
    spawn.sync("gsutil", ["-m", "rsync", "-r", localPath, CloudStorageOrigin]);
} else {
    console.log("must choose hard or soft sync mode!");
}

