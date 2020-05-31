Utils for managing resources 

* cors: set/get cors settings on various cloud storage buckets
* cdn: sync from a local folder (e.g. dropbox) to cloud storage buckets

The following needs to be set in a `.env` file:

```
CLOUD_STORAGE_ADDR=gs://tjandpals-cdn-eu/
CLOUD_STORAGE_BUCKET=tjandpals-cdn-eu
MEDIA_PATH=D:\\Dropbox (Personal)\\TJANDPALS\\tj-cdn
```

Replace any of those as needed (e.g. MEDIA_PATH should be your local directory path)

And the [google cloud sdk](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe) must be installed as well (with [authentication setup properly](https://cloud.google.com/sdk/docs/initializing))
