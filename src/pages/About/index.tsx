// src/pages/About/index.tsx
import React, { useEffect, useState } from 'react';
import { Section } from '../../components/Section';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getAboutStyles } from './styles';
import { Navbar } from '../../components/Navbar';

export function About() {
    const [isMobile, setIsMobile] = useState(false);
    const styles = getAboutStyles(isMobile);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0'
    };

    const teamMembers = [
        {
            name: 'PROF.SALES',
            role: '(COORDERNADOR)',
            desc: 'Coordenador, Idealizador do Projeto e Professor de Radiologianenatis justo.',
            img: '../../../public/img/prof-Sales.png'
        },
        {
            name: 'CARLA LOPES',
            role: '(GERENTE)',
            desc: 'Nosso maior desafio não é só desenvolver tecnologia, mas garantir que ela chegue de forma simples e afetiva às mulheres que mais precisam',
            img: '../../../public/img/carla.png'
        },
        {
            name: 'DAVI ARAGÃO',
            role: '(DESENVOLVEDOR)',
            desc: 'Desenvolvedor Full-Stack & Responsável pelo Site do Rosa.IA',
            img: '../../../public/img/davi.png'
        },
        {
            name: 'MARCOS',
            role: '(UX/UI DESIGN)',
            desc: 'UX/UI Designer do Rosa.IA,focado em acessibilidade e experiência intuitiva para democratizar a prevenção.',
            img: '../../../public/img/marcos.png'
        }
    ];

    return (
        <>
            <Navbar />
            <main>
                {/* Seção Missão */}
                <Section id="about-rosaia" align="left">
                    <div style={styles.missionCard}>
                        <h3 style={styles.missionTitle}>O que é o RosaIA?</h3>
                        <div style={styles.missionContent}>
                            <p style={styles.missionText}>
                                O RosaIA é um protótipo de chatbot educacional integrado ao WhatsApp, concebido para apoiar a prevenção do câncer de mama por meio de informações confiáveis e humanizadas. Utilizando algoritmos de Processamento de Linguagem Natural e Aprendizado de Máquina, o sistema opera na infraestrutura Python + Twilio e se apoia no modelo multimodal Gemini, da Google DeepMind. Seu conteúdo foi cuidadosamente treinado e validado por especialistas em saúde pública e radiologia, garantindo respostas claras, empáticas e alinhadas às diretrizes do Ministério da Saúde e do INCA.
                            </p>
                            <div style={styles.missionImageBox}>
                                <svg
                                    color="#EC4899"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: 80, height: 80 }}   // tamanho do ícone
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="about-rosaia" align="right" >
                    <div style={styles.missionCard}>
                        <h3 style={styles.missionTitle}>O que é o RosaIA?</h3>
                        <div style={styles.missionContent}>
                            <p style={styles.missionText}>
                                O RosaIA é um protótipo de chatbot educacional integrado ao WhatsApp, concebido para apoiar a prevenção do câncer de mama por meio de informações confiáveis e humanizadas. Utilizando algoritmos de Processamento de Linguagem Natural e Aprendizado de Máquina, o sistema opera na infraestrutura Python + Twilio e se apoia no modelo multimodal Gemini, da Google DeepMind. Seu conteúdo foi cuidadosamente treinado e validado por especialistas em saúde pública e radiologia, garantindo respostas claras, empáticas e alinhadas às diretrizes do Ministério da Saúde e do INCA.
                            </p>
                            <div style={styles.missionImageBox}>
                                <svg color='#EC4899' fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section id="about-rosaia" align="left" >
                    <div style={styles.missionCard}>
                        <h3 style={styles.missionTitle}>O que é o RosaIA?</h3>
                        <div style={styles.missionContent}>
                            <p style={styles.missionText}>
                                O RosaIA é um protótipo de chatbot educacional integrado ao WhatsApp, concebido para apoiar a prevenção do câncer de mama por meio de informações confiáveis e humanizadas. Utilizando algoritmos de Processamento de Linguagem Natural e Aprendizado de Máquina, o sistema opera na infraestrutura Python + Twilio e se apoia no modelo multimodal Gemini, da Google DeepMind. Seu conteúdo foi cuidadosamente treinado e validado por especialistas em saúde pública e radiologia, garantindo respostas claras, empáticas e alinhadas às diretrizes do Ministério da Saúde e do INCA.
                            </p>
                            <div style={styles.missionImageBox}>
                                <svg color='#EC4899' fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            {/* Seção Equipe */}
            <Section id="about-team">
                <h1 style={styles.teamTitle}>
                    A equipe que une tecnologia e educação na luta contra o câncer de mama
                </h1>

                <div style={{ width: '90%', margin: '0 auto' }}>
                    <Slider {...carouselSettings}>
                        {teamMembers.map((member, index) => (
                            <div key={index}>
                                <div style={styles.teamCard}>
                                    <p style={styles.teamDescription}>{member.desc}</p>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        style={styles.teamImage}
                                    />
                                    <h3 style={styles.teamName}>{member.name}</h3>
                                    <p style={styles.teamRole}>{member.role}</p>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Section>
        </>
    );
}