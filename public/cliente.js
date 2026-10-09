const URL_API = "/books";

const catalogo = document.getElementById("catalogo");

function crearFicha(libro) {
    const ficha = document.createElement("article");
    ficha.className = "ficha";

    const numero = document.createElement("span");
    numero.className = "numero";
    numero.textContent = "N.º " + String(libro.id).padStart(3, "0");

    const autor = document.createElement("p");
    autor.className = "autor";
    autor.textContent = libro.author;

    const titulo = document.createElement("h2");
    titulo.className = "titulo";
    titulo.textContent = libro.name;

    const anio = document.createElement("p");
    anio.className = "anio";
    anio.textContent = libro.year;
    
    const image = document.createElement("img");
    image.className = "imagen";
    image.src = libro.image;
    image.alt = "Portada de " + libro.name;
    image.loading = "lazy";

    ficha.append(numero, autor, titulo, anio, image);
    return ficha;
}

async function cargarLibros() {
    try {
        const respuesta = await fetch(URL_API);
        if (!respuesta.ok) throw new Error("Error " + respuesta.status);
        const datos = await respuesta.json();

        catalogo.replaceChildren(...datos.map(crearFicha));
    } catch (error) {
        catalogo.innerHTML =
            '<p class="aviso">No se pudo cargar el catálogo. Revisa la URL de la API o abre la página con Live Server.</p>';
        console.error(error);
    }
}

cargarLibros();