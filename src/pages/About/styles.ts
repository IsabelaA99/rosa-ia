import { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
    main: {
        maxWidth: '80%',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#FFF7F9',
    },
    pageTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#8b3a45',
        textAlign: 'center',
        marginBottom: '3rem',
    },
    subtitle: {
        fontSize: '1.4rem',
        fontWeight: 500,
        color: '#8b3a45',
        marginBottom: '0.5rem',
        marginTop: '1.5rem',
    },
    strong: {
        color: '#8b3a45',
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: 1.4,
        color: '#374151',
        marginBottom: '1rem',
    },
    icon: {
        width: '6rem',
        height: '6rem',
        opacity: 0.5,
    },
};

