import React from 'react'

const Recipe = ({label,url,image,ingredients}) => {
    return(
        <div>
            <div className="card">
                <figure className="card-image">
                    <a href={url}><img src={image} alt=""/></a>
                </figure>
                <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <a href={url}><h3>{label}</h3></a>
                        <p>{ingredients}</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Recipe;

