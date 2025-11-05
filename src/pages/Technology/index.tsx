import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/index';
import { LoadingProvider, useLoading } from '../../contexts/LoadingContext';
import { getStyles } from './styles';
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiPython, DiReact } from 'react-icons/di';
import { SiExpo, SiTypescript, SiTwilio, SiGooglecloud } from 'react-icons/si';

interface TechnologyData {
    name: string;
    description: string;
    icon: JSX.Element;
}

interface TechnologyCardProps {
    data: TechnologyData;
    styles: Record<string, React.CSSProperties>;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ data, styles }) => (
    <div style={styles.technologyCardWrapper}>
        <div style={styles.iconContainer}>
            {React.cloneElement(data.icon, { size: styles.icon.width, color: '#d45e6e' })}
        </div>
        <h3 style={styles.subtitle}>{data.name}</h3>
        <p style={styles.text}>{data.description}</p>
    </div>
);

function TecnologyPageContent() {
    const { stopLoading } = useLoading();
    const [isMobile, setIsMobile] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Lógica de loading
        const timer = setTimeout(() => {
            stopLoading();
            setShowContent(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, [stopLoading]);

    const styles = getStyles(isMobile);

    const technologiesData: TechnologyData[] = [
        { name: 'Twilio', description: 'Plataforma de comunicação em nuvem que facilita o envio de mensagens, chamadas e integrações em tempo real.', icon: <SiTwilio /> },
        { name: 'Python', description: 'Linguagem principal usada para lógica de IA e back-end (Gemini API).', icon: <DiPython /> },
        { name: 'Gemini API', description: 'IA do Google usada no chatbot Rosa IA para compreender e gerar respostas inteligentes.', icon: <SiGooglecloud /> },
    ];

        // Estrutura de dados revisada e tipada
    const technologiesDataSite: TechnologyData[] = [
        { name: 'React', description: 'Biblioteca Javascript para construção de interfaces de usuário.', icon: <DiReact /> },
        { name: 'Node.js', description: 'Ambiente de execução JavaScript no lado do servidor.', icon: <DiNodejsSmall /> },
        { name: 'TypeScript', description: 'Superset do JavaScript que adiciona tipagem estática e segurança ao código.', icon: <SiTypescript /> },
        { name: 'CSS', description: 'Linguagem de folhas de estilo para estilizar a aplicação.', icon: <DiCss3 /> },
    ];

return (
    <>
        <Navbar />
        {showContent && (
            <main style={styles.main}>
                <h1 style={styles.pageTitle}>Tecnologias usadas no RosaIA</h1>

                <section style={styles.technologyGridSection}>
                    <h3 style={styles.subtitle}>ChatBot:</h3>
                    <div style={styles.technologyGridContainer}>
                        {technologiesData.map((tech, index) => (
                            <TechnologyCard key={index} data={tech} styles={styles} />
                        ))}
                    </div>
                </section>

                <section style={styles.technologyGridSection}>
                    <h3 style={styles.subtitle}>Web Site:</h3>
                    <div style={styles.technologyGridContainer}>
                        {technologiesDataSite.map((tech, index) => (
                            <TechnologyCard key={index} data={tech} styles={styles} />
                        ))}
                    </div>
                </section>
            </main>
        )}
    </>
);
}

export function Technologya() {
    return (
        <LoadingProvider>
            <TecnologyPageContent />
        </LoadingProvider>
    );
}