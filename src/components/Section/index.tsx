// src/components/Section.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import { getStyles } from './styles';

interface SectionProps {
    children?: ReactNode;
    id?: string;
    style?: React.CSSProperties;
    fullWidth?: boolean;
}

export function Section({ children, id = "", style = {}, fullWidth = false }: SectionProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = getStyles(isMobile);

    return (
        <section
            id={id}
            style={{
                ...styles.sectionMain,
                ...style,
                ...(fullWidth && { width: '100%', maxWidth: '100%' })
            }}
        >
            {children}
        </section>
    );
}