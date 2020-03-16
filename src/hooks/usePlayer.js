import { useState} from 'react';
import {randomTetriminos} from '../tetronimos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0},
        tetromino: randomTetriminos(),
        collided: false
    });

    return [player];
}