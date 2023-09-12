const requestHeaders = {};

let csrfTokenMeta = document.querySelector("meta[name=\"csrf-token\"]");

if(csrfTokenMeta != undefined) {
  requestHeaders['X-CSRF-TOKEN'] = csrfTokenMeta.getAttribute("content");
}

const mediaConfig = {
  
  fileInputId: 'file',
  url: '/upload',
  headers: requestHeaders,
  started: function(fileList) {
    console.log('Upload started!');
  },
  progress: function(fileId, progress) {
    console.log(`Uploading... ${progress}%`, fileId);
  },
  completed: function(fileId) {
    console.log(`File uploaded! ${fileId}`);
  },
  error: function(fileId, error) {
    console.error(`${error} ${fileId}`);
  },
}

new Uploader(mediaConfig);