const React = require('react')

function New(props) {
    return (
        <div>
            <h1>New Variety</h1>
            <form action="/fruits" method="POST">
                Variety: <input type="text" name="Variety" /><br />
                Skin Color: <input type="text" name="Skin Color" /><br />
                Flesh Color: <input type="text" name="Flesh Color" /><br />
                Breed: <input type="text" name="Breed" /><br />
                Leaf Type: <input type="text" name="Leaf Type" /><br />
                Plant Type: <input type="text" name="Type" /><br />
                Plant Height: <input type= "number" name="Height" /><br />
                Fruit Shape: <input type="text" name="Shape" /><br />
                <input type="submit" value="Add New Variety" /><br/> 
            </form>

        </div>
    )
}

module.exports = New