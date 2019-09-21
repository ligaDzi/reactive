import React, { useEffect } from 'react'

/**
 * Компонент используется для скролла вверх страницы при переходе по ссылки.
 * Этот компонент вставляется в начале корневых компонентов страниц. (см. <StartPage />)
 */
export default () => {

    useEffect( () => {
        window.scrollTo(0, 0);
    });

    return null;
}