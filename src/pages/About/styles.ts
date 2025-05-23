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
        width: '60%',
        padding: '40px',
        background: 'linear-gradient(to right, #ffffff 0%, #fff0f6 100%)',
        borderRadius: 12,
        boxShadow: '0 4px 8px rgba(0,0,0,.3)',
        display: 'flex',
        flexDirection: 'column',  // 1ª linha título, 2ª linha conteúdo
        gap: '20px',
    },
    missionContent: {
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center',
    },
    missionImageBox: {
        flex: '0 0 140px',           // largura fixa
        height: 140,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F9A8D4',
        opacity: .55,
        borderRadius: 10,
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
        lineHeight: 1.6,
        marginBottom: '20px'
    },
    missionSubTitle: {
        fontSize: '1.6rem',
        color: '#8b3a45',
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    missionImageContainer: {
        flex: '0 0 140px',               // largura “fixa” da imagem
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F9A8D4',
        opacity: .55,
        height: 140,
        borderRadius: 10,
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
        borderRadius: '12px',
        background: 'linear-gradient(to top, #8b3a45, #d45e6e)',
        boxShadow: '0 4px 8px rgba(1, 1, 1, 0.3)',
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
    },
    teamDescription: {
        fontSize: '1rem',
        background: '#fff',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        lineHeight: 1.5
    },
};

export const aboutMobileStyles: Record<string, CSSProperties> = {
    sectionMain: {
        padding: '20px 10px'
    },
    heroTitle: {
        fontSize: '2rem'
    },
    missionImageContainer: {
        width: '100%',
        height: 240,
        marginTop: 20,
    },
    missionCard: {
        width: '100%',
        padding: 20,
        margin: 0,
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
        fontSize: '0.8rem'
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