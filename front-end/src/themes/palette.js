import { light, dark } from './palette--default';

export const palette = (isDarkMode) => (isDarkMode ? dark : light);
