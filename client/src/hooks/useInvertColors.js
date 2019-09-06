import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useInvertedColors = () => {

    const body = document.querySelector('body');
    const divs = document.querySelectorAll('div');

    const [storedValue, setStoredValue] = useLocalStorage('mode');

    useEffect(() => {
        if (storedValue) {
            body.classList.add('inverted-color');
            divs.classList.add('inverted-color');
        } else {
            body.classList.remove('inverted-color');
            divs.classList.remove('inverted-color');
        }
    }, [storedValue])

    return [storedValue, setStoredValue];
}