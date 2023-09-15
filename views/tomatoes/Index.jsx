const React = require('react')

function Index(props) {
    return (
        <>
        <div>
            <h1>Index Tomatoes Page</h1>
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
        <div>
            <h1>Index Potatoes Page</h1>
            <a href="/potatoes/new">Add New Variety</a>
            <ul>
                {
                    props.potatoes.map((potato) => {
                        return (
                            <li key={potato._id}>
                                <a href={`/potatoes/${potato._id}`}></a> 
                            </li>
                        )
                    })
                }
            </ul>
            </div>
     </>
    )
}

module.exports = Index 