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
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '0'
    };

    const teamMembers = [
        {
            name: 'PROF.SALES',
            role: '(COORDERNADOR)',
            desc: 'Coordenador, Idealizador do Projeto e Professor de Radiologianenatis justo.',
            img: 'public/img/prof-Sales.png'
        },
        {
            name: 'CARLA LOPES',
            role: '(GERENTE)',
            desc: 'Nosso maior desafio não é só desenvolver tecnologia, mas garantir que ela chegue de forma simples e afetiva às mulheres que mais precisam',
            img: 'public/img/carla.png'
        },
        {
            name: 'DAVI ARAGÃO',
            role: '(DESENVOLVEDOR)',
            desc: 'Coordenador, Idealizador do Projeto e Professor de Radiologianenatis justo.',
            img: 'public/img/davi.png'
        },
        {
            name: 'MARCOS',
            role: '(UX/UI DESIGN)',
            desc: 'Coordenador, Idealizador do Projeto e Professor de Radiologianenatis justo.',
            img: 'public/img/marcos.png'
        }
    ];

    return (
        <>
            <Navbar />

            <Section id="about-mission">
                <div style={styles.missionCard}>
                    <h1 style={styles.missionTitle}>
                        A equipe que une tecnologia e educação na luta contra o câncer de mama
                    </h1>
                </div>
            </Section>
            {/* Seção Missão */}
            <Section id="about-mission">
                <div style={styles.missionCard}>
                    <h3 style={styles.missionTitle}>Nossa Missão</h3>
                    <p style={styles.missionText}>
                        "Uma plataforma educacional que usa IA para levar conhecimento, prevenção e esperança no combate ao câncer de mama."
                    </p>
                    <p style={styles.missionRole}>
                        Coordenador, Idealizador do Projeto e Professor de Radiologicamente Justo
                    </p>
                </div>
            </Section>
            {/* Seção Equipe */}
            <Section id="about-team">
                <h2 style={styles.teamTitle}>Nossa Equipe</h2>
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