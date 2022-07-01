//các mẫu đất terran
const terrainModel1 = document.getElementById('terran1');
const terrainModel2 = document.getElementById('terran2');
const terrainModel3 = document.getElementById('terran3');
const terrainModel4 = document.getElementById('terran4');
const terrainModel5 = document.getElementById('terran5');

class Terrain {
    constructor(posX, posY, imageModel) {
        this.position = {
            x: posX,
            y: posY
        }
        this.model = imageModel
        this.shape = {
            width: imageModel.width,
            height: imageModel.height
        }
    }
    drawTerrain(){
        drawingCanvas.drawImage(this.model, this.position.x, this.position.y)
    }
}