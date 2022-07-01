const catModel = document.getElementById('catDemo');

class Player {
    constructor(posX, posY, imageModel) {
        this.position = {
            x : posX,
            y: posY
        }
        this.model = imageModel

        //kích thước model
        this.shape = {
            width: 100,
            height: 100
        }
        //trọng lực rơi xuống
        this.gravity = 5
        this.speed = {
            x: 0,
            y: 0
        }
    }

    drawCharacter() {
        drawingCanvas.drawImage(this.model,this.position.x, this.position.y,this.shape.width, this.shape.height)
    }

    updateSelf() {
        this.drawCharacter();
        this.position.y += this.speed.y;
        this.position.x += this.speed.x;

        if (this.position.y + this.shape.height + this.speed.y <= canvas.height) {
            this.speed.y += this.gravity;
        } else{
            this.speed.y = 0
        }
    }
    getAction (){
        if(keysControl.turnLeft){
            this.speed.x = 15;
        } else if(keysControl.turnRight){
            this.speed.x = -15;
        }
        else {
            this.speed.x = 0
        }
    }

}
