// src/components/Section.tsx
import React, { useEffect, useState, ReactNode, CSSProperties } from 'react';
import { getStyles } from './styles';

interface SectionProps {
    children: ReactNode;
    id?: string;
    style?: React.CSSProperties;
    fullWidth?: boolean;
    align?: 'left' | 'right';          // NOVO
}

export function Section({
    children,
    id = '',
    style = {},
    fullWidth = false,
    align = 'left',
}: SectionProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const base = getStyles(isMobile);

    /* ----- posicionamento lateral + direção do flex ----- */
    const lateralMargin: CSSProperties = !isMobile
        ? align === 'right'
            ? { marginLeft: 'auto', marginRight: '80px' }
            : { marginLeft: '80px', marginRight: 'auto' }
        : { margin: '0 auto' };

    const flexDirection: CSSProperties = !isMobile
        ? align === 'right'
            ? { flexDirection: 'row-reverse' }   // inverte (imagem 1º)
            : { flexDirection: 'row' }
        : { flexDirection: 'column' };

    return (
        <section
            id={id}
            style={{
                ...base.sectionMain,
                ...flexDirection,
                ...lateralMargin,
                ...style,
                ...(fullWidth && { width: '100%', maxWidth: '100%' }),
            }}
        >
            {children}
        </section>
    );
}