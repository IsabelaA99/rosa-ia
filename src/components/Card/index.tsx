import React, { ReactNode } from 'react';
import { cardStyles } from './styles';

interface CardProps {
    children: ReactNode;
    imagePosition?: 'right' | 'top';
}

export function Card({ children, imagePosition = 'top' }: CardProps) {
    return (
        <div style={{
            ...cardStyles.container,
            ...(imagePosition === 'right' && cardStyles.horizontalLayout)
        }}>
            {children}
        </div>
    );
}