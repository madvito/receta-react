import React,{useState} from 'react'

const API_KEY='329d62a723e7420b6536499f5f3add7d'
const APP_ID='72d040d9'

export const SearchForm=({onResults})=>{
    const [inputRecipe,setInputRecipe]=useState('');

    const _handleChange=(e)=>{
        setInputRecipe(e.target.value);
    }

    const _handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${inputRecipe}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
            .then(res=>res.json())
            .then(res=>{
                const {hits}=res;
                console.log('console',hits);
                onResults(hits);
            })
    }
    const _pickButton=(e)=>{
        setInputRecipe(e.target.innerText)
    }
    

    return(
        <form onSubmit={_handleSubmit}>
            <div className="main">
                <div className="div">
                    <input type="text" name="input" placeholder="Receta a buscar" onChange={_handleChange}/>
                </div>
                
                <div className="botonera">
                    <ul className="botonera-lista">
                    <li className="filter" onClick={_pickButton}>Chicken</li>
                    <li className="filter" onClick={_pickButton}>Sushi</li>
                    <li className="filter" onClick={_pickButton}>Bread</li>
                    <li className="filter" onClick={_pickButton}>Risotto</li>
                    <li className="filter" onClick={_pickButton}>Pasta</li>
                    <li className="filter" onClick={_pickButton}>Soup</li>
                    <li className="filter" onClick={_pickButton}>Dessert</li>
                    <li className="filter" onClick={_pickButton}>Salad</li>
                    <li className="filter" onClick={_pickButton}>Eggs</li>
                    <li className="filter" onClick={_pickButton}>Pizza</li>
                    <li className="filter" onClick={_pickButton}>Fish</li>
                    <li className="filter" onClick={_pickButton}>Grill</li>
                    </ul>
                </div>
                <div>
                    <input type="submit" value="Buscar"/>
                </div>
            </div>
        </form>
    )
}


