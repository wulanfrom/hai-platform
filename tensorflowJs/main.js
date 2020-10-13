//Configure RequireJs

requirejs.config({
    baseUrl:"",
    paths: {
        mobilenetmodel: [
            'https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.0.4/dist/mobilenet.min.js',
            'mobilenetmodel',
        ],
    }
});
