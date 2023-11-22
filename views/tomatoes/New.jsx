const React = require('react')
import styles from './New.modules.scss'

function New(props) {
    return (
      <>  
        <div className={styles.tomDiv}>
            <h1 className={styles.h1}>New Tomato Variety</h1>
            <a href='/tomatoes' className={styles.a}>To Index</a>
            <form action="/tomatoes/" method="POST" className={styles.form}>
                Variety: <input type="text" name="Variety" /><br />
                Skin Color: <input type="text" name="Skin Color" /><br />
                Flesh Color: <input type="text" name="Flesh Color" /><br />
                Breed: <input type="text" name="Breed" /><br />
                Leaf Type: <input type="text" name="Leaf Type" /><br />
                Plant Type: <input type="text" name="Type" /><br />
                Plant Height: <input type= "number" name="Height" /><br />
                Fruit Shape: <input type="text" name="Shape" /><br />
                <input type="submit" value="Add New Variety" className={styles.input} /><br/> 
            </form>
        </div>
        <div className={styles.potDiv}>
            <h1 className={styles.h1}>New Potato Variety</h1>
            <a href='/potatoes' className={styles.a}>To Index</a>
            <form action="/potatoes/" method="POST" className={styles.form}>
                Variety: <input type="text" name="Variety" /><br />
                Skin Color: <input type="text" name="Skin Color" /><br />
                Flesh Color: <input type="text" name="Flesh Color" /><br />
                Breed: <input type="text" name="Breed" /><br />
                Leaf Type: <input type="text" name="Leaf Type" /><br />
                Plant Type: <input type="text" name="Type" /><br />
                Plant Height: <input type= "number" name="Height" /><br />
                Root Shape: <input type="text" name="Shape" /><br />
                <input type="submit" value="Add New Variety" className={styles.input} /><br/> 
            </form>
        </div>
      </>  
    )
}

module.exports = New