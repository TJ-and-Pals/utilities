const spawn = require('cross-spawn');
const fs = require('fs');
const os = require('os');
const path = require('path');

const cmd = process.argv[2];

const CloudStorageOrigin = `gs://tjandpals-cdn-eu/app/`;

let localPath = (() => {
    switch(os.platform()) {
        case "linux": return `/dropbox/container/Dropbox (Personal)/TJANDPALS/SA Test Pilot/Apps/Common/cdn/app`
        default: return `D:\\Dropbox (Personal)\\TJANDPALS\\SA Test Pilot\\Apps\\Common\\cdn\\app`
    }
})();

localPath = path.resolve(localPath);

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


  /*
if(process.env.NODE_ENV == "sync-soft") {
    child_process.execFileSync("gsutil", ["-m", "rsync", "-r", CommonConfig.GetLocalFolders().cdn, CommonConfig.GetCloudStorageCdnOrigin()]);
} else if(process.env.NODE_ENV == "sync-hard") {
    child_process.execFileSync("gsutil", ["-m", "rsync", "-d", "-r", CommonConfig.GetLocalFolders().cdn, CommonConfig.GetCloudStorageCdnOrigin()]);
}
*/
