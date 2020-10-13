// define(function(require){
//   // console.log('hello')
//   async function loadAndPredict() {
//     const img = document.getElementById('cat');  
//     // const mobilenet = require('@tensorflow-models/mobilenet')
//     // global.fetch = require('node-fetch')
//     const mobilenet = require('@tensorflow-models/mobilenet')
//     global.fetch = require('node-fetch')
//     // const model = await mobilenet.load()
//     const path = "mobilenet/model.json"
//     const mn = new mobilenet.MobileNet(1, 1);
//     mn.path = `https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json`
//     await mn.load()

//     // Classify the image.
//     const predictions = await model.classify(img);

//     console.log('Predictions: ');
//     console.log(predictions);

//     // Display the prediction result.
//     const preds = document.getElementById('predictions');
//     preds.innerHTML = predictions.map((p) => {
//       return p['className'];
//     }).join('<br>');
//   }
//   return loadAndPredict();
// });

// // async function loadAndPredict() {
// //   const img = document.getElementById('cat');  
// //   // const mobilenet = require('@tensorflow-models/mobilenet')
// //   // global.fetch = require('node-fetch')
// //   const mobilenet = require('@tensorflow-models/mobilenet')
// //   global.fetch = require('node-fetch')
// //   const model = await mobilenet.load()
// //   const path = "mobilenet/model.json"
// //   const mn = new mobilenet.MobileNet(1, 1);
// //   mn.path = `https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json`
// //   await mn.load()

// //   // Classify the image.
// //   const predictions = await model.classify(img);

// //   console.log('Predictions: ');
// //   console.log(predictions);

// //   // Display the prediction result.
// //   const preds = document.getElementById('predictions');
// //   preds.innerHTML = predictions.map((p) => {
// //     return p['className'];
// //   }).join('<br>');
// // }

// // loadAndPredict();

// // define(['mobilenet'], function(mobilenet){
// //   mobilenet.loadAndPredict();
// // })

// Note: you do not need to import @tensorflow/tfjs here.

// import * as mobilenet from '@tensorflow-models/mobilenet';

async function loadAndPredict() {
  const img = document.getElementById('cat');

  // As usual, the model is loaded asynchronously. 
  const model = await mobilenet.load();

  // Classify the image. We can pass DOM element directly.
  const predictions = await model.classify(img);

  console.log('Predictions: ');
  console.log(predictions);

  // Display the prediction result.
  const preds = document.getElementById('predictions');
  preds.innerHTML = predictions.map((p) => {
    return p['className'];
  }).join('<br>');
}

loadAndPredict();

