// src/pages/index.tsx (sua Home)
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section';
import { MdArrowForward } from 'react-icons/md';
import { getStyles } from './styles';
import { LoadingProvider, useLoading } from '../contexts/LoadingContext';

function HomePageContent() {
    const { stopLoading } = useLoading();
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Lógica de responsividade
        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        const timer = setTimeout(() => {
            stopLoading();
        }, 500);
        return () => clearTimeout(timer);
    }, [stopLoading]);

    const styles = getStyles(isMobile);

    function handleChatClick() {
        alert('Em desenvolvimento...');
    }

    return (
        <>

            <Navbar />


            <Section>
                <section id='sobre' style={styles.sectionMain}>
                    <div style={styles.textContent}>
                        <div style={styles.container1}>
                            <h1 style={styles.h1}>ROSA IA:</h1>
                            <h3 style={styles.h3}>Sua Aliada Virtual no Combate ao Câncer de Mama</h3>
                            <p style={styles.p}>
                                Informações e suporte na palma da sua mão! <br />
                                Apresentamos a Dra. Rosa, sua assistente virtual integrada ao WhatsApp, pronta para oferecer informações confiáveis e suporte sobre o câncer de mama. <br />
                                Cuidar da sua saúde começa com um simples passo.
                            </p>
                        </div>

                        <div style={styles.container2}>
                            <button onClick={handleChatClick} style={styles.button}>Converse agora com a Dra. Rosa</button>
                            <span onClick={handleChatClick} style={styles.arrowIcon}>
                                <MdArrowForward size={40} color="#d45e6e" />
                            </span>
                        </div>
                    </div>

                    <div style={styles.imageWrapper}>
                        <img src="/img/Ola.png" alt="Dra. Rosa" style={styles.image} />
                    </div>
                </section>
            </Section>
        </>
    );
}

export function Home() {
    return (
        <LoadingProvider>
            <HomePageContent />
        </LoadingProvider>
    );
}