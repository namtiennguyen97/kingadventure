const backgroundModel1 = document.getElementById('background1');
class Background {
    constructor(posX, posY, imgModel) {
        this.position = {
            x : posX,
            y: posY
        }
        this.model = imgModel
    }

    drawBackground(){
        drawingCanvas.drawImage(this.model, this.position.x, this.position.y)
    }
}