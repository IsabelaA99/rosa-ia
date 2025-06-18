
// src/components/Card/index.tsx
import React, { ReactNode } from 'react';
import { getCardStyles } from './styles';

interface StructuredContent {
    vision?: {
        title: string;
        text: string;
    };
    values?: {
        title: string;
        items: Array<{
            label: string;
            description: string;
        }>;
    };
    objectives?: {
        general?: {
            title: string;
            text: string;
        };
        specific?: {
            title: string;
            items: string[];
        };
    };
}

interface CardProps {
    title: string;
    content: ReactNode | StructuredContent;
    icon?: ReactNode;
    imagePosition?: 'left' | 'right';
}

export function Card({
    title,
    content,
    icon,
    imagePosition = 'right'
}: CardProps) {
    const styles = getCardStyles();

    const renderContent = () => {
        if (React.isValidElement(content)) {
            return content;
        }

        const structuredContent = content as StructuredContent;
        return (
            <div style={styles.contentWrapper}>
                {structuredContent.vision && (
                    <div style={styles.section}>
                        <h3 style={styles.subtitle}>{structuredContent.vision.title}</h3>
                        <p style={styles.text}>{structuredContent.vision.text}</p>
                    </div>
                )}

                {structuredContent.values && (
                    <div style={styles.section}>
                        <h3 style={styles.subtitle}>{structuredContent.values.title}</h3>
                        <ul style={styles.list}>
                            {structuredContent.values.items.map((item, index) => (
                                <li key={index} style={styles.listItem}>
                                    <strong>{item.label}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {structuredContent.objectives?.general && (
                    <div style={styles.section}>
                        <h3 style={styles.subtitle}>{structuredContent.objectives.general.title}</h3>
                        <p style={styles.text}>{structuredContent.objectives.general.text}</p>
                    </div>
                )}

                {structuredContent.objectives?.specific && (
                    <div style={styles.section}>
                        <h3 style={styles.subtitle}>{structuredContent.objectives.specific.title}</h3>
                        <ol style={styles.orderedList}>
                            {structuredContent.objectives.specific.items.map((item, index) => (
                                <li key={index} style={styles.listItem}>{item}</li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div style={{
            ...styles.container,
            flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row'
        }}>
            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                {renderContent()}
            </div>

            <div style={styles.imageContainer}>
                <div style={styles.iconWrapper}>
                    {icon}
                </div>
            </div>
        </div>
    );
}