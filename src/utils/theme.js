import color from './color';
import dimensions from './dimensions';
import images from './images';

const theme = {
    color,
    dimensions,
    images,
    font: {
        thin: 300,
        regular: 400,
        semibold: 500,
        bold: 800
    },
    media: {
        desktop: '@media (min-width: 1024px)',
        mobile: '@media (min-width: 728px)'
    }
};
export default theme;
