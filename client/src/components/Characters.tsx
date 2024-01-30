import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
function Characters() {
    const [backendData, setBackendData] = useState({ users: []})

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    const navigate = useNavigate();
 
    const goToAboutComponent = () => { 
        navigate('/about'); 
    };
    
    const goToSheetComponent = () => { 
        navigate('/sheet');
    };
    
    const goToCreateComponent = () => { 
        navigate('/create');
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>this is the main page where you view all your characters</p>

                <button onClick={goToAboutComponent}>
                    about page
                </button>
                <button onClick={goToSheetComponent}>
                    character sheet
                </button>
                <button onClick={goToCreateComponent}>
                    character creation
                </button>
            </header>

            <div>
                <p>test data from backend</p>
                {(typeof backendData.users === 'undefined') ? (
                    <p>Loading...</p>
                ): (
                    backendData.users.map((user,i) => (
                        <p key={i}>{user}</p>
                    ))
                )}
            </div>
        </div>
    );
}
 
export default Characters;