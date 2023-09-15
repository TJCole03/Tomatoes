const React = require('react')

function New(props) {
    return (
      <>  
        <div>
            <h1>New Tomato Variety</h1>
            <a href='/tomatoes'>To Index</a>
            <form action="/tomatoes/" method="POST">
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
        <div>
            <h1>New Potato Variety</h1>
            <a href='/potatoes'>To Index</a>
            <form action="/potatoes/" method="POST">
                Variety: <input type="text" name="Variety" /><br />
                Skin Color: <input type="text" name="Skin Color" /><br />
                Flesh Color: <input type="text" name="Flesh Color" /><br />
                Breed: <input type="text" name="Breed" /><br />
                Leaf Type: <input type="text" name="Leaf Type" /><br />
                Plant Type: <input type="text" name="Type" /><br />
                Plant Height: <input type= "number" name="Height" /><br />
                Root Shape: <input type="text" name="Shape" /><br />
                <input type="submit" value="Add New Variety" /><br/> 
            </form>
        </div>
      </>  
    )
}

module.exports = New