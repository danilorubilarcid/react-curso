export const getGifs = async( category ) => {
    const apiKey = '86Qw6bA1PRR7rV9nFFWfvEEOm0nC3IqE';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    

    return gifs;
}