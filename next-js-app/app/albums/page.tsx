async function Page()  {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
        next: { revalidate: 3600 } // odświeżanie co 1 godzinę
    });
    
    if(!response.ok) throw new Error("Failed to fetch data");
    const albums = await response.json();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
        {albums.map((album: {id: number, title: string}) => {
            return (
                <div key={album.id}
                     className="bg-white font-bold mb-2">
                    <h3> {album.title} </h3>
                </div>
            )
        })}
        </div>
    )
}

export default Page;