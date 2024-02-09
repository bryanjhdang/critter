import { useNavigate } from 'react-router-dom';
import Header from '../utilities/Header';
 
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
            <h1 className="text-5xl font-pirata">My Characters</h1>
            <button onClick={goToSheetComponent}>
                character sheet
            </button>
            <button onClick={goToCreateComponent}>
                character creation
            </button>
        </div>
    );
}
 
export default Characters;