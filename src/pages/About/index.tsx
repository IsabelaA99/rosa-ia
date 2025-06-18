import React, { useEffect, useState } from 'react';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { styles } from './styles'
import { Navbar } from '../../components/Navbar/index'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TeamMember } from '../../components/TeamMember';

export function About() {
    const [isMobile, setIsMobile] = useState(false);

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
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
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
            desc: 'Nosso maior desafio não é só desenvolver tecnologia, mas garantir que ela chegue às mulheres que mais precisam',
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
            <main style={styles.main}>
                <h1 style={styles.pageTitle}>Sobre o Projeto RosaIA</h1>
                <Section style={{ marginRight: 200 }}>
                    <Card
                        title="O que é o RosaIA?"
                        content={<p style={styles.text}>O RosaIA é um protótipo de chatbot educacional integrado ao WhatsApp, concebido para apoiar a prevenção do câncer de mama por meio de informações confiáveis e humanizadas. Utilizando algoritmos de Processamento de Linguagem Natural e Aprendizado de Máquina, o sistema opera na infraestrutura Python + Twilio e se apoia no modelo multimodal Gemini, da Google DeepMind. Seu conteúdo foi cuidadosamente treinado e validado por especialistas em saúde pública e radiologia, garantindo respostas claras, empáticas e alinhadas às diretrizes do Ministério da Saúde e do INCA.</p>}
                        icon={
                            <svg
                                style={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#D6336C"
                                strokeWidth="2"
                            >
                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        }
                    />
                </Section>

                <Section align="left">
                    <Card
                        title="Motivação, Contexto e Impacto"
                        imagePosition='left'
                        content={
                            <div>
                                <h3 style={styles.subtitle}><strong>Motivação</strong></h3>
                                <p style={styles.text}>
                                    O câncer de mama é a principal causa de mortalidade por câncer entre mulheres no Brasil e no mundo, em grande parte devido ao diagnóstico tardio e à baixa adesão a exames preventivos. A carência de informação acessível e de fácil compreensão agrava esse cenário, especialmente em populações com acesso limitado aos serviços de saúde.
                                </p>
                                <h3 style={styles.subtitle}><strong>Contexto</strong></h3>
                                <p style={styles.text}>
                                    O WhatsApp é uma das plataformas de mensagens mais populares no país e oferece um canal de baixo custo e alto alcance para iniciativas de educação em saúde. Ao disponibilizar um assistente virtual na ponta dos dedos, o RosaIA promove interação em tempo real, adaptada ao perfil de cada usuária, sem demandar instalações adicionais ou deslocamentos até unidades de saúde.
                                </p>
                                <h3 style={styles.subtitle}><strong>Impacto Esperado</strong></h3>
                                <p style={styles.text}>
                                    Estudos iniciais indicam que o RosaIA tem potencial para ampliar significativamente o acesso à informação sobre prevenção mamária, incentivar a realização de autoexames e mamografias, e fortalecer a alfabetização em saúde. Essa abordagem pode contribuir para a detecção precoce do câncer de mama e, consequentemente, para a redução das taxas de mortalidade associadas à doença.
                                </p>
                            </div>
                        }
                        icon={
                            <svg
                                style={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#D6336C"
                                strokeWidth="2"
                            >
                                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                    />
                </Section>

                <Section align="right">
                    <Card
                        title="Nossa Missão"
                        content={
                            <div>
                                <h3 style={styles.subtitle}><strong>Visão</strong></h3>
                                <p style={styles.text}>
                                    Ser referência em soluções de Inteligência Artificial voltadas à educação em saúde, promovendo práticas preventivas e o empoderamento das usuárias por meio de tecnologia ética e acessível.
                                </p>
                                <h3 style={styles.subtitle}><strong>Valores</strong></h3>
                                <p style={styles.text}>
                                    <strong style={styles.strong}>Empatia:</strong> Interação acolhedora e respeitosa às dúvidas e emoções das usuárias.
                                </p>
                                <p style={styles.text}>
                                    <strong style={styles.strong}>Rigor Científico:</strong>  Conteúdo estruturado com base em fontes oficiais e validação por especialistas.
                                </p>
                                <p style={styles.text}>
                                    <strong style={styles.strong}>Privacidade e Segurança:</strong> Criptografia das comunicações (HTTPS) e adoção de boas práticas para proteção de dados.
                                </p>
                                <p style={styles.text}>
                                    <strong style={styles.strong}>Acessibilidade:</strong>Linguagem clara, sem jargões, em uma plataforma amplamente difundida.
                                </p>
                                <h3 style={styles.subtitle}><strong>Objetivo Geral</strong></h3>
                                <p style={styles.text}>
                                    Desenvolver e validar uma assistente virtual que forneça informações personalizadas sobre prevenção do câncer de mama, estimulando hábitos saudáveis e adesão a exames periódicos.
                                </p>
                                <h3 style={styles.subtitle}><strong>Objetivos Específicos</strong></h3>
                                <p style={styles.text}>
                                    <strong>1.</strong> Criar uma API para comunicação fluida entre o WhatsApp e o modelo Gemini.<br />
                                    <strong>2.</strong> Treinar a IA com conteúdos validados por especialistas em saúde pública e radiologia.<br />
                                    <strong>3.</strong> Garantir respostas empáticas, seguras e que estimulem a busca por apoio profissional.<br />
                                    <strong>4.</strong> Validar tecnicamente o sistema por meio de testes controlados e avaliações qualitativas.<br />
                                    <strong>5.</strong> Assegurar a privacidade e a segurança das informações trocadas.
                                </p>
                            </div>
                        }
                        icon={
                            <svg
                                style={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#D6336C"
                                strokeWidth="2"
                            >
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                        imagePosition="right"
                    />
                </Section>

                <section style={styles.teamSection}>
                    <h1 style={styles.pageTitle}>Nossa Equipe</h1>
                    <div style={styles.carouselContainer}>
                        <Slider {...carouselSettings}>
                            {teamMembers.map((member, index) => (
                                <div key={index} style={styles.sliderItem}>
                                    <TeamMember
                                        name={member.name}
                                        role={member.role}
                                        desc={member.desc}
                                        img={member.img}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

            </main>
        </>
    );
}
