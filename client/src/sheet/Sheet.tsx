import { Link } from 'react-router-dom';
import Header from '../utilities/Header';
import { Inventory } from "@critter/common" 

function Sheet(inv : Inventory) {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>This is the character sheet component where it loads information based on the info passed in, and you can edit values (needs to take in params)</p>
                <Link to="/">Go back</Link>
            </header>
        </div>
    );
}

export default Sheet;