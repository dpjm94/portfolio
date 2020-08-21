class Modal {
    constructor() {
      this.injectHTML()
      this.modal = document.querySelector(".modal")
      this.closeIcon = document.querySelector(".modal__close")
      this.openModalButtons = document.querySelectorAll(".open-modal")
      this.events()
    }
  
    events() {
      // listen for open click
      this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
  
      // listen for close click
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
  
      // pushes any key
      document.addEventListener("keyup", e => this.keyPressHandler(e))
    }
  
    keyPressHandler(e) {
      if (e.keyCode == 27) {
        this.closeTheModal()
      }
    }
  
    openTheModal(e) {
      e.preventDefault()
      this.modal.classList.add("modal--is-visible")
    }
  
    closeTheModal() {
      this.modal.classList.remove("modal--is-visible")
    }
  
    injectHTML() {
      document.body.insertAdjacentHTML('beforeend', `
      <div class="modal">
      
      <div class="modal__inner">
      
        <div class="wrapper modal__pull-left">
        <div class="modal__title">About Me</div>
        <h1>I'm Developer, Artist & Footballer.</h1>
          
        <p class="modal__subtitle">I was born with a severe hearing loss and subsequently had a cochlear implant which greatly improved my hearing.
        I enjoy turning complex problems into simple beautiful and intuitive designs. When I am not coding, you'll find me playing football, walking or drawing.<p>
        
        <h2 class="modal__skill_title">My Skills</h2>

        <p>HTML</p>
            <div class="modal__container">
                <div class="modal__skills modal__html">90%</div>
            </div>

            <p>CSS</p>
                <div class="modal__container">
                    <div class="modal__skills modal__css">90%</div>
                </div>

            <p>JavaScript</p>
                <div class="modal__container">
                    <div class="modal__skills modal__js">65%</div>
                </div>

            <p>PHP</p>
                <div class="modal__container">
                    <div class="modal__skills modal__php">70%</div>
                </div>

            <p>Mobile design</p>
                <div class="modal__container">
                    <div class="modal__skills modal__mobile">85%</div>
                </div>

                <p>Photoshop</p>
                <div class="modal__container">
                    <div class="modal__skills modal__photo">85%</div>
                </div>

                <p>JAVA</p>
                <div class="modal__container">
                    <div class="modal__skills modal__java">50%</div>
                </div>
                
        </div>

      </div>
      <div class="modal__close">X</div>
    </div>
      `)
    }
  }
  
  export default Modal