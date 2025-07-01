import { CSSProperties } from 'react';

// Estilos base (para desktop)
const baseStyles: Record<string, CSSProperties> = {
    sectionMain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px',
        paddingTop: '5px',
        gap: '10px',
        width: '100%',
        marginLeft: '80px',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
    },
    textContent: {
        flex: 1,
        color: 'white',
        textAlign: 'left'
    },
    h1: {
        fontSize: '3rem',
        marginBottom: '10px',
        background: 'linear-gradient(to top,#8b3a45, #d45e6e)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
    },
    h3: {
        fontSize: '1.5rem',
        marginBottom: '15px',
        height: '56px', // Mantido para consistência de altura entre linhas no desktop
        background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
    },
    p: {
        background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        textAlign: 'initial',
        backgroundClip: 'text',
        fontSize: '1.2rem',
        marginBottom: '20px',
        lineHeight: 1.5
    },
    container1: {
        maxWidth: '85%'
    },
    container2: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
    },
    button: {
        padding: '15px 21px',
        background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
        color: 'white',
        border: 'none',
        borderRadius: '40px',
        cursor: 'pointer',
        fontSize: '1rem'
    },
    arrowIcon: {
        marginLeft: '20px',
        cursor: 'pointer'
    },
    imageWrapper: {
        marginTop: '10px',
        marginRight: '50px'
    },
    image: {
        width: '600px',
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
    }
};

// Estilos para mobile (max-width: 768px)
const mobileStyles: Record<string, CSSProperties> = {
    sectionMain: {
        flexDirection: 'column',
        padding: '12px',
        paddingTop: '0px',
        marginLeft: '0'
    },
    textContent: {
        textAlign: 'center',
        marginLeft: '50px'
    },
    h1: {
        fontSize: '2.5rem',
        marginBottom: '10px'
    },
    h3: {
        fontSize: '1.1rem',
        marginBottom: '10px',
        height: 'auto' // Remove altura fixa no mobile para não cortar texto
    },
    p: {
        fontSize: '1rem',
        textAlign: 'center'
    },
    container2: {
        justifyContent: 'center',
        marginRight: '50px'
    },
    arrowIcon: {
        // color: 'transparent' // Se quiser esconder a seta no mobile, descomente
    },
    imageWrapper: {
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '0px'
    },
    image: {
        width: '300px'
    }
};

// Função que retorna os estilos combinados
export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
    if (!isMobile) return baseStyles;

    return Object.keys(baseStyles).reduce((acc, key) => {
        return {
            ...acc,
            [key]: {
                ...baseStyles[key],
                ...(mobileStyles[key] || {})
            }
        };
    }, {} as Record<string, CSSProperties>);
};