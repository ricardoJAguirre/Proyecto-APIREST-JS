//Variable API
peliculas='';


const Cargar=async()=>{
   
    const datos = await

    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d8b402ff5c8663c651124390d9b429e3&language=es-MX')
    if(datos.status==200){
        console.log(datos.data);
        datos.data.results.forEach(pel => {
            peliculas +=`
            <div class="col-md-4 bg-dark border border-1 d-flex justify-content-center">
            <div class="card" style="width: 20rem;"> 
            <img src="https://image.tmdb.org/t/p/w500${pel.poster_path}" class="card-img-top vh-40" height="400px"  alt="...">
            <div class="card-body pb-1 d-flex flex-column  align-items-start bg-dark text-light">
            <h5 class="card-title  fs-3 fw-bold  text-decoration-underline">${pel.title}</h5>
            <p class="fw-bold-50 fs-5">Titulo original: ${pel.original_title}</p>  
            <p class="fw-bold fs-5  text-decoration-line">Date: ${pel.release_date}</p>
            </div class="position-absolute bottom-0">
            <a href="https://image.tmdb.org/t/p/w500${pel.backdrop_path}" class="btn btn-primary btn-lg text-light">Ver Pelicula</a>
            </div>
            </div>
            </div>
            </div>
            `  ;       
        })
       
        document.getElementById('lista').innerHTML=peliculas;
    }

}

Cargar();
