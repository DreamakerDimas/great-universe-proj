import { createContext } from 'react';

const globalContext = createContext({
    errMessage: null
});

export default globalContext;