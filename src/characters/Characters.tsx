import { useNavigate } from 'react-router-dom';
import Header from '../utilities/Header';
import './Characters.css'
 
function Characters() {
    const navigate = useNavigate();
    
    const goToSheetComponent = () => { 
        navigate('/sheet');
    };
    
    const goToCreateComponent = () => { 
        navigate('/create');
    };

    return (
        <div className="App">
            <Header/>
            <div className="text-center">
                <h1 className="text-4xl font-pirata">My Characters</h1>
                <p className="barlow-condensed">this is the main page where you view all your characters</p>
                
                <button onClick={goToSheetComponent}>
                    character sheet
                </button>
                <button onClick={goToCreateComponent}>
                    character creation
                </button>
            </div>
        </div>
    );
}
 
export default Characters;