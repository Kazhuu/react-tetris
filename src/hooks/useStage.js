import { useState } from 'react';
import { createStage } from '../gameHelper';

export const useStage = () => {
  const [stage, useStage] = useState(createStage());
  return [stage, useStage];
};
