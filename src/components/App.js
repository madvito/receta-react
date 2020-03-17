import React,{useState} from 'react';
import 'bulma/css/bulma.css';
import {RecipeList} from './RecipeList';
import {SearchForm} from './SearchForm'
import {Title} from './Title'



import '../App.css';

function App() {
  const[results,setResults]=useState([])
  const [usedSearch,setUsedSearch]=useState(false)

  const _handleResults=(res)=>{
    console.log(res);
    setResults(res);
    setUsedSearch(true)
  }

  const _renderResults=()=>{
    return results.length===0?<p>No se encontraron Recetas</p>:<RecipeList recipes={results}/>
  }

  return (
    <div className="App">
      <Title>Buscador de Recetas</Title>
      <div className="formulario">
        <SearchForm onResults={_handleResults}/>
      </div>    
      {
        usedSearch?_renderResults():<p>Usa el buscador para encontrar recetas</p>
      }
    </div>
  );
}

export default App;
