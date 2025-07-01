import React, { ReactNode } from 'react';
// Certifique-se de que este caminho aponta para os estilos APENAS da Section
import { sectionStyles } from './styles';

interface SectionProps {
    children: ReactNode;
    id?: string;
    style?: React.CSSProperties;
    fullWidth?: boolean;
}

export function Section({ children, id = "", style = {}, fullWidth = false }: SectionProps) {
    return (
        <section
            id={id}
            style={{
                ...sectionStyles.container,
                ...style,
                // Aplica maxWidth: '100%' apenas se fullWidth for true
                ...(fullWidth && { maxWidth: '100%' })
            }}
        >
            {children}
        </section>
    );
}