import {refs} from './HTMLelements'
import {form} from "./form.js"

export const animations={
    clear(){
        refs.container.innerHTML=''
    },
    done(){
        refs.container.innerHTML=''
        setTimeout(()=>{refs.container.classList.add('message')}, 500)
        setTimeout(()=>{refs.container.classList.remove('message')},2000)
    },
    addForm(e){
        this.clear()
        refs.container.insertAdjacentHTML('beforeend', form)
    }
}
