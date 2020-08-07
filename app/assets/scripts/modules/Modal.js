class Modal{
    constructor(){
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events(){
        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        // pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeTheModal()
        }
    }

    noScroll(){
      window.scrollTo(0,0);
    }

    openTheModal(){
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal(){
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML(){
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
    <div class="modal__inner">
    <div class="wrapper wrapper--narrow">
      
    <img class="items__image" src="'+ val.images.hidpi +'">

    </div>
    </div>
    <div class="modal__close">X</div>
  </div>
        `)
    }
}

export default Modal;