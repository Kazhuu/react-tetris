export const STAGE_WIDHT = 12;
export const STAGE_HEIGHT= 20;

export const createStage = () => (
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDHT).fill([0, 'clear'])
  )
);
