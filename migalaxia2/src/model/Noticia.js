class Noticia {

    constructor(index, elemento) {
        this.id = index;
        this.titulo = elemento.title;
        this.img = elemento.urlToImage;
        this.descripcion_imagen = "";
        this.secciones = [{contenido: elemento.description}];
        
        this.state = {
            // 0: neutral, 1: like, -1: dislike
            user_feedback: 0,
            likes: 0,
            dislikes: 0
        }
    }
    
    like() {
        if (this.state.user_feedback === -1) {
            // Cambiar de dislike a like    
            this.state.likes++;
            this.state.dislikes--;
            this.state.user_feedback = 1;
        }
        else if (this.state.user_feedback === 0) {
            // Poner un like    
            this.state.likes++;
            this.state.user_feedback = 1;
        }
        else if (this.state.user_feedback === 1) {
            // Deshacer like
            this.state.likes--;
            this.state.user_feedback = 0;
        }
        // En otro caso no hacemos nada
    }

    dislike() {
        if (this.state.user_feedback === 1) {
            // Cambiar de like a dislike    
            this.state.dislikes++;
            this.state.likes--;
            this.state.user_feedback = -1;
        }
        else if (this.state.user_feedback === 0) {
            // Poner un dislike    
            this.state.dislikes++;
            this.state.user_feedback = -1;
        }
        else if (this.state.user_feedback === -1) {
            // Deshacer dislike
            this.state.dislikes--;
            this.state.user_feedback = 0;
        }
        // En otro caso no hacemos nada
    }

    getLikes() {
        return this.state.likes;
    }

    getDislikes() {
        return this.state.dislikes;
    }

    getUserFeedback() {
        return this.state.user_feedback;
    }

}
export default Noticia;