import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section'; // Mantenho, caso tenha algum estilo ou lógica interna
import { MdArrowForward } from 'react-icons/md';
import { getStyles } from './styles'; // Caminho corrigido para ./styles (assumindo que styles.ts está na mesma pasta)
// import Footer from '../components/Footer'; // Descomente se quiser usar

export function Home() {
    // Inicializa isMobile com base no window.innerWidth atual
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Define o estado inicial de isMobile após a montagem do componente
        // Isso previne que window seja undefined durante a renderização inicial no servidor (se houver SSR)
        setIsMobile(window.innerWidth <= 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Adiciona o event listener para redimensionamento da janela
        window.addEventListener('resize', handleResize);

        // Função de limpeza: remove o event listener quando o componente é desmontado
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // O array vazio assegura que o efeito rode apenas uma vez (no mount e no unmount)

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
                            {/* Ajustado para ser um span clicável, já que o alert não é uma navegação */}
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
            {/* <Footer /> */}
        </>
    );
}