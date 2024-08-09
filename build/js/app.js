document.addEventListener('DOMContentLoaded', function(){
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})


function crearGaleria(){

    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++ ) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/${i}.webp`
        imagen.alt =  'Imagen Galería'

        // Event Handler

        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)    
    }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/${i}.webp`
        imagen.alt =  'Imagen Galería'


    // Generar Modal
    const  modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal


    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add ('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)


    // Agregar al HTML 

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

    // Cerrar las imagenes

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove() // significa que si existe el modal que lo borre

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500);
}


function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}
