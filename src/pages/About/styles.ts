// src/pages/About/styles.ts
import { CSSProperties } from 'react';

export const aboutBaseStyles: Record<string, CSSProperties> = {
    sectionMain: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        width: '100%',
        boxSizing: 'border-box',
        gap: '20px'
    },
    heroSection: {
        background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px',
        width: '100%'
    },
    heroTitle: {
        fontSize: '3rem',
        marginBottom: '40px',
        textAlign: 'center',
        background: 'linear-gradient(to top, #8b3a45, #d45e6e)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
    },
    missionCard: {
        width: '100%',
        maxWidth: '800px',
        padding: '40px',
        margin: '30px auto',
        background: 'linear-gradient(to right, #ffffff 0%, #fff0f6 100%)',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
    },
    missionTitle: {
        fontSize: '2.2rem',
        color: '#8b3a45',
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    missionText: {
        fontSize: '1.4rem',
        color: '#333',
        fontStyle: 'italic',
        lineHeight: 1.6,
        marginBottom: '20px'
    },
    missionRole: {
        fontSize: '1.1rem',
        color: '#666',
        fontWeight: 'bold'
    },
    teamTitle: {
        fontSize: '2rem',
        color: '#8b3a45',
        marginBottom: '40px',
        textAlign: 'center',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',

    },
    teamCard: {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: '12px',
        background: 'linear-gradient(to top, #8b3a45, #d45e6e)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        margin: '0 10px',
        height: '400px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    teamImage: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',

        marginBottom: '20px'
    },
    teamName: {
        fontSize: '1.5rem',
        background: '#fff',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        margin: '10px 0',
        textTransform: 'uppercase'
    },
    teamRole: {
        fontSize: '1rem',
        background: '#fff',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        margin: '0 0 15px',
        fontStyle: 'italic'
    },
    teamDescription: {
        fontSize: '1rem',
        background: '#fff',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        lineHeight: 1.5
    }
};

export const aboutMobileStyles: Record<string, CSSProperties> = {
    sectionMain: {
        padding: '20px 10px'
    },
    heroTitle: {
        fontSize: '2rem'
    },
    missionCard: {
        padding: '10px'
    },
    missionTitle: {
        fontSize: '1.8rem'
    },
    missionText: {
        fontSize: '1.1rem'
    },
    teamTitle: {
        fontSize: '1.8rem'
    },
    teamCard: {
        height: 'auto',
        padding: '15px',
        margin: '0 5px'
    },
    teamImage: {
        width: '160px',
        height: '160px'
    },
    teamName: {
        fontSize: '1.2rem'
    },
    teamRole: {
        fontSize: '0.9rem'
    },
    teamDescription: {
        fontSize: '0.9rem'
    }
};

export const getAboutStyles = (isMobile: boolean): Record<string, CSSProperties> => {
    if (!isMobile) return aboutBaseStyles;

    return Object.keys(aboutBaseStyles).reduce((acc, key) => {
        return {
            ...acc,
            [key]: {
                ...aboutBaseStyles[key],
                ...(aboutMobileStyles[key] || {})
            }
        };
    }, {} as Record<string, CSSProperties>);
};