const React = require('react')

function Edit (props) {
    const { 
            variety,
            skinColor,
            fleshColor,
            breed,
            leafType,
            plantType,
            plantHeight,
        fruitShape,
        } = props.tomatoes
    // const { 
 
    //         rootShape,
    //     } = props.potatoes
    return (
       <>
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/tomatoes'>Index Page</a>
            <form action={`/tomatoes/${_id}?_method=PUT`} method="POST">
                    variety: <input type="text" name="variety" defaultValue={variety} /><br/>
                    skinColor: <input type="text" name="variety" defaultValue={skinColor} /><br/>
                    fleshColor: <input type="text" name="variety" defaultValue={fleshColor} /><br/>
                    breed: <input type="text" name="variety" defaultValue={breed} /><br/>
                    leafType: <input type="text" name="variety" defaultValue={leafType} /><br/>
                    plantType: <input type="text" name="variety" defaultValue={plantType} /><br/>
                    plantHeight: <input type="text" name="variety" defaultValue={plantHeight} /><br/>
                    fruitShape: <input type="text" name="variety" defaultValue={fruitShape} /><br/>
                <input type="submit" value="Update Variety" />
            </form>
        </div>
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/potatoes'>Index Page</a>
            <form action={`/potatoes/${_id}?_method=PUT`} method="POST">
                    variety: <input type="text" name="variety" defaultValue={variety} /><br/>
                    skinColor: <input type="text" name="variety" defaultValue={skinColor} /><br/>
                    fleshColor: <input type="text" name="variety" defaultValue={fleshColor} /><br/>
                    breed: <input type="text" name="variety" defaultValue={breed} /><br/>
                    leafType: <input type="text" name="variety" defaultValue={leafType} /><br/>
                    plantType: <input type="text" name="variety" defaultValue={plantType} /><br/>
                    plantHeight: <input type="text" name="variety" defaultValue={plantHeight} /><br/>
                    rootShape: <input type="text" name="variety" defaultValue={rootShape} /><br/>
                <input type="submit" value="Update Variety" />
            </form>
            </div>
        </> 
    
    )
}

module.exports = Edit