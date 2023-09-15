const React = require('react')

function Index(props) {
    return (
        <div>
            <h1>Index Page</h1>
            <a href="/tomatoes/new">Add New Variety</a>
            <ul>
                {
                    props.tomatoes.map((tomato) => {
                        return (
                            <li key={tomato._id}>
                                <a href={`/tomatoes/${tomato._id}`}></a> 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index 