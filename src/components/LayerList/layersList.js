const layersList = [
    {
        'id':'input-layer',
        'index': 0,
        "title":"Input Layer",
        "desc":"Test and Training Images",
    },
    {
        'id':'convo-layer',
        'index': 1,
        "title":"Convolutional Layer",
        "desc":"Ouput: (None, 0, 32, 32)",
    },
    {
        'id':'max-layer',
        'index': 2,
        "title":"Max Pooling Layer",
        "desc":"Ouput: (None, 0, 32, 32)",
    },
    {
        'id':'dense-layer',
        'index': 3,
        "title":"Dense Layer",
        "desc":"Ouput: (None, 0, 32, 32)",
    },
    {
        'id':'flatten-layer',
        'index': 4,
        "title":"Flatten Layer",
        "desc":"Ouput: (None, 0, 32, 32)",
    },
    {
        'id':'output-layer',
        'index': 5,
        "title":"Output Layer",
        "desc":"Labeled Images",
    },
]

export default layersList;