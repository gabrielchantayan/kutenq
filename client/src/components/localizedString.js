import { useState, useEffect } from 'react';
import { getLocale, readLocale } from '../assets/js/locale.js';

export default function LocalizedString(props){
    
    const [locale, setLocale] = useState({})

    useEffect(() => { 
        getLocale()
        .then(res => setLocale(res));
    });

    return (
        <span>{readLocale(locale, props.string)}</span>
    )    
}