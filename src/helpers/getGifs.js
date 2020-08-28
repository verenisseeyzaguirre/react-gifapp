//parte funcional

// peticion http para traer imagenes de la categoria
// encode sirve para cambiar los espacios por +,%20
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=6qkK31du1CIFUZrj7YjNZfPtDdJByNtW`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs)
    // setImages( gifs )
    return gifs;
}