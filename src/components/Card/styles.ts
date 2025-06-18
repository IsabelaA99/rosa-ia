import { CSSProperties } from 'react';

const cardStyles: Record<string, CSSProperties | any> = {
    container: {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        gap: '2rem',
        width: '100%',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            padding: '1rem',
            gap: '1rem',
        },
    },
    content: {
        flex: 1,
        minWidth: '50%',
        '@media (max-width: 768px)': {
            minWidth: '100%',
        },
    },
    title: {
        fontSize: '2rem',
        fontWeight: 600,
        color: '#8b3a45',
        marginBottom: '1.5rem',
        '@media (max-width: 768px)': {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '1.5rem',
        '@media (max-width: 768px)': {
            gap: '1rem',
        },
    },
    imageContainer: {
        flex: 1,
        minWidth: '40%',
        '@media (max-width: 768px)': {
            minWidth: '100%',
        },
    },
    iconWrapper: {
        backgroundColor: '#FCE4EC',
        aspectRatio: '16/9',
        width: '100%',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const getCardStyles = () => cardStyles;