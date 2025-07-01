// src/components/Section/styles.ts
import { CSSProperties } from 'react';

export const sectionStyles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'row', // Pode ser alterado via prop 'style' no Section.tsx se necessário
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: '2rem 0',
        gap: '20px',
        width: '100%',
        maxWidth: '2000px', // Limita a largura padrão
        margin: '0 auto', // Centraliza o container
        flexWrap: 'wrap',
        boxSizing: 'border-box',
    },
    // Removi todos os estilos específicos da página Home (sectionMain, textContent, h1, etc.)
    // Estes estilos devem estar no arquivo de estilos da página Home.
};

// A função getStyles e os mobileStyles não pertencem a este arquivo de componente genérico.
// Eles devem estar no arquivo de estilos da página que os utiliza (ex: src/pages/Home/styles.ts).
// Portanto, eles foram removidos daqui.