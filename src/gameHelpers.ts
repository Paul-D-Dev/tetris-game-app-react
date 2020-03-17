export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


export const createStage = () => (
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear']))
);

export const checkCollision = (player: { tetromino: string | any[]; pos: { y: number; x: number; }; }, stage: { [x: string]: { [x: string]: string[]; }; }, { x: moveX, y: moveY}: any) => {
    for (let y = 0; y < player.tetromino.length; y+=1) {

        // 1. Check taht we're on an actual Tetromino cell
        for (let x = 0; x < player.tetromino[y].length; x++) {
            if(
            // 2. Check taht our move is inside the game areas height (y)
            // We shoudn't go through the bottom of the play area
                !stage[y + player.pos.y + moveY] ||
                // 3. Check that our move is inside the game areas width (x)
                !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                // 4. Chaeck taht the cell we're moving to isn't to clear
                stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
            ) {
                return true;
            }
            
        }
    }
}
