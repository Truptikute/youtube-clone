export const apikey = 'AIzaSyC2i-5zDkEyrOLgjTmKXjbwKMZv016p_PQ';

export const value_Converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
}