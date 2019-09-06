import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const storedItem = JSON.parse(localStorage.getItem(key));

    const [storedValue, setStoredValue] = useState(storedItem || initialValue);

    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return [storedValue, setValue];
}