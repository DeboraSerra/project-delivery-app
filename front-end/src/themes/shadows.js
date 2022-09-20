import { alpha } from '@mui/material/styles';

export const shadows = (isDarkMode = true) => {
  const rgb = isDarkMode ? '#000000' : '#8c98a4';

  return [
    'none',
    `0 3px 6px 0 ${alpha(rgb, 0.25)}`,
    `0 12px 15px ${alpha(rgb, 0.1)}`,
    `0 6px 24px 0 ${alpha(rgb, 0.125)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
  ];
};
