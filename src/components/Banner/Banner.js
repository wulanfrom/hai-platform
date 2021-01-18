import React from 'react'
import '../../App.css'

export default function Banner() {
    return (
        <div className="banner-wrapper p-4">
            <h1>Welcome to the XAI Platform</h1>
            <p>This platform allows you to upload pictures and apply explainability models to it. You will work with methods for explaining model predictions in image classification tasks. Such explanations help users resolve questions around what’s happening inside of the classification model and why. As users explore these explanations, they may come up with additional questions about the model, which possibly requires other kinds of explanations.</p>
        </div>
    )
}
