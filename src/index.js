import f from './functions'
import {refs} from './HTMLelements'
import {animations} from './animations'
import filmTpl from './filmTpl.handlebars'

refs.postMovie.addEventListener('click', ()=>{
    animations.addForm()
    setTimeout(()=>{
        const form = document.querySelector('.form')
        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            const newMovie={
                title:e.currentTarget.elements.title.value,
                genre:e.currentTarget.elements.genre.value,
                director:e.currentTarget.elements.director.value,
                year:e.currentTarget.elements.year.value
            }
            f.postMovie(newMovie)
            animations.done()
    })
    }, 1)
})

refs.getAllMovies.addEventListener('click', ()=>{
    animations.clear()
    f.getAllMovies().then(movies=>{
    const markUp = filmTpl(movies)
    refs.container.insertAdjacentHTML('beforeend', markUp)
    })
})

refs.deleteMovie.addEventListener('click', animations.done)