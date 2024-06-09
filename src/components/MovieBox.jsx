
function MovieBox({pa1, sinister, wows, blackphone,movie,posterURL,title}) {
    function preventDragginIsue(e) {
        e.preventDefault()
    }
    return( 
        <div>
            <img src={posterURL} title={title} className='poster' onDragStart={preventDragginIsue}></img>
        
        </div>
    )

}

export default MovieBox