import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETRONIMOS } from '../tetronimos';

const Cell = ( {type} ) => (
    <StyledCell type={'type'} color={TETRONIMOS[type].color} />
)

export default Cell;