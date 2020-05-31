# Setup

## .env
The following needs to be set in a `.env` file:

```
CLOUD_STORAGE_ADDR=gs://tjandpals-cdn-eu/
CLOUD_STORAGE_BUCKET=tjandpals-cdn-eu
MEDIA_PATH=D:\\Dropbox (Personal)\\TJANDPALS\\tj-cdn
```

Replace any of those as needed (e.g. MEDIA_PATH should be your local directory path)

## google cloud sdk

And the [google cloud sdk](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe) must be installed as well (with [authentication setup properly](https://cloud.google.com/sdk/docs/initializing))

# Commands

See [package.json](./package.json) for a full list.

* cors: set/get cors settings on various cloud storage buckets
* cdn: sync from a local folder (e.g. dropbox) to cloud storage buckets

The most common command will be `npm run cdn-sync:hard` to sync the local dropbox folder to the remote cloud storage.

"hard" means it will also delete files that are no longer referenced, whereas "soft" means it will only add new files without deleting those that are stale.

Note that due to a bug with the google sdk utilities, on windows you should run the commands in command prompt - not powershell