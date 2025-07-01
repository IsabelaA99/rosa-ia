import { CSSProperties } from 'react';

export const cardStyles: Record<string, CSSProperties> = {
    container: {
        flex: '1',
        minWidth: '300px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '20px',

    },
    horizontalLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'left',

    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    image: {
        width: '300px',
        height: 'auto',
        borderRadius: '10px',
        objectFit: 'cover',

    }
};