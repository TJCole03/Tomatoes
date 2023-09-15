const React = require('react')

function Show(props) {
    return (
        <div>
            <h1>{props.tomato.variety}</h1> //curly braces magically turns the content into JS code
            <a href='/tomatoes'>Index Page</a>
            <p>
                {props.tomato.skinColor}
                {props.tomato.fleshColor}
                {props.tomato.breed}
                {props.tomato.leafType}
                {props.tomato.plantType}
                {props.tomato.plantHeight}
                {props.tomato.fruitShape}
            </p>
        </div>
    )
}

module.exports = Show 