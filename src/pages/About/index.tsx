import React, { useEffect, useState } from 'react';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { Icon } from '../../components/Icons'; // Importando o componente Icon
import { styles } from './styles'; // Seus estilos específicos da página About
import { Navbar } from '../../components/Navbar/index'; // Sua Navbar
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TeamMember } from '../../components/TeamMember';
import { cardStyles } from '../../components/Card/styles'; // Mantendo a importação, caso ainda use

// Importe o LoadingProvider e o hook useLoading
import { LoadingProvider, useLoading } from '../../contexts/LoadingContext';

// -----------------------------------------------------------------------------
// Componente interno com o conteúdo da página About
// Este componente usará o hook useLoading e conterá a lógica de carregamento
// -----------------------------------------------------------------------------
function AboutPageContent() {
    const { stopLoading } = useLoading(); // Obtém a função para parar o loading
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Define o estado inicial
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Simule o carregamento de dados ou a inicialização da página
    useEffect(() => {
        // Você pode ajustar o tempo com base no tempo real de carregamento de recursos.
        // Por exemplo, se você buscar dados de uma API, chame stopLoading() após o fetch.
        const timer = setTimeout(() => {
            stopLoading(); // Indica que o carregamento da página "About" terminou
        }, 1500); // Exemplo: 1.5 segundos para esta página
        return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }, [stopLoading]); // A dependência garante que o efeito seja reexecutado se stopLoading mudar

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

    const leaders = [
        { name: 'PROF.SALES', role: '(COORDENADOR)', desc: 'Coordenador, Idealizador do Projeto e Professor de Radiologianenatis justo.', img: '/img/prof-Sales.png' },
        { name: 'CARLA LOPES', role: '(GERENTE)', desc: 'Nosso maior desafio não é só desenvolver tecnologia, mas garantir que ela chegue às mulheres que mais precisam.', img: '/img/carla.png' },
        { name: 'VITORIA LAVRSISTA', role: '(SUB GERENTE)', desc: 'Responsavel pela pesquisa de artigos e treinamento da IA', img: '/img/vitoria.png' },
        { name: 'YGOR', role: '(ANALISTA)', desc: 'A analise permite elevar o conhecimento.', img: '/img/ygor.png' },
    ];
    const radiologists = [
        { name: 'SUENE SILVA', role: '(AlUNA DE RADIOLOGIA)', desc: 'Participei da construção da Rosa IA, contribuindo para o desenvolvimento de conteúdos educativos sobre câncer de mama.', img: '/img/suene.png' },
        { name: 'JÚLIA QUINTINO', role: '(AlUNA DE RADIOLOGIA)', desc: '', img: '/img/julia.png' },
        { name: 'AMANDA MONIKY', role: '(AlUNA DE RADIOLOGIA)', desc: '', img: '/img/amanda.png' }
    ];

    const developers = [
        { name: 'Isabela França', role: '(DESENVOLVEDORA FRONTEND)', desc: '“Traduzindo ideias em experiências digitais.”', img: '/img/isa.png' },
        { name: 'Victória Emanuella', role: '(DESENVOLVEDORA BACKEND/TESTER)', desc: '', img: '/img/emanuella.png' },
        { name: 'DAVI ARAGÃO', role: '(DESENVOLVEDOR FULLSTACK)', desc: 'Desenvolvedor Full-Stack & Responsável pelo Site do Rosa.IA', img: '/img/davi.png' },
        { name: 'VICTOR AUGUSTO', role: '(DESENVOLVEDOR BACKEND)', desc: 'Desenvolvedor Backend', img: '/img/victor.png' },
        { name: 'MARCOS', role: '(UX/UI DESIGN)', desc: 'UX/UI Designer do Rosa.IA, focado em acessibilidade e experiência intuitiva para democratizar a prevenção.', img: '/img/marcos.png' },
        { name: 'LUCAS', role: '(DESENVOLVEDOR BACKEND)', desc: 'Desenvolvedora Backend, responsavel pela pesquisa de artigos e treinamento da IA', img: '/img/lucas.png' },
    ];

    return (
        <>
            <Navbar /> {/* Sua Navbar, que agora estará abaixo do loading */}
            <main style={styles.main}>
                <h1 style={styles.pageTitle}>Sobre o Projeto RosaIA</h1>

                <Section>
                    <Card imagePosition="right">
                        <img
                            src="/img/Dra-rosa.png"
                            alt="Dra Rosa IA"
                            style={cardStyles.image}
                        />
                        <div style={cardStyles.content}>
                            <h3 style={styles.subtitle}>
                                <strong>O que é o RosaIA?</strong>
                            </h3>
                            <p style={styles.text}>
                                O RosaIA é a sua assistente virtual inovadora, disponível no WhatsApp, dedicada a fornecer informações confiáveis e suporte sobre o câncer de mama. Nossa missão é democratizar o acesso ao conhecimento, incentivando a prevenção e o diagnóstico precoce por meio de uma interface intuitiva e acessível. Com a Dra. Rosa, você tem uma aliada virtual na palma da sua mão para cuidar da sua saúde mamária de forma simples e eficaz.
                            </p>
                        </div>
                    </Card>
                </Section>

                {/* Seções de Motivação, Contexto e Impacto */}
                <Section>
                    <Card>
                        <Icon name="motivation" />
                        <h3 style={styles.subtitle}><strong>Motivação</strong></h3>
                        <p style={styles.text}>
                            O câncer de mama é a principal causa de mortalidade por câncer entre mulheres no Brasil e no mundo, em grande parte devido ao diagnóstico tardio e à baixa adesão a exames preventivos. A carência de informação acessível e de fácil compreensão agrava esse cenário, especialmente em populações com acesso limitado aos serviços de saúde.
                        </p>
                    </Card>
                    <Card>
                        <Icon name="context" />
                        <h3 style={styles.subtitle}><strong>Contexto</strong></h3>
                        <p style={styles.text}>
                            O WhatsApp é uma das plataformas de mensagens mais populares no país e oferece um canal de baixo custo e alto alcance para iniciativas de educação em saúde. Ao disponibilizar um assistente virtual na ponta dos dedos, o RosaIA promove interação em tempo real, adaptada ao perfil de cada usuária, sem demandar instalações adicionais ou deslocamentos até unidades de saúde.
                        </p>
                    </Card>
                    <Card>
                        <Icon name="impact" />
                        <h3 style={styles.subtitle}><strong>Impacto Esperado</strong></h3>
                        <p style={styles.text}>
                            Estudos iniciais indicam que o RosaIA tem potencial para ampliar significativamente o acesso à informação sobre prevenção mamária, incentivar a realização de autoexames e mamografias, e fortalecer a alfabetização em saúde. Essa abordagem pode contribuir para a detecção precoce do câncer de mama e, consequentemente, para a redução das taxas de mortalidade associadas à doença.
                        </p>
                    </Card>
                </Section>

                {/* Seções de Visão, Valores e Objetivos */}
                <Section>
                    <Card>
                        <Icon name="vision" />
                        <h3 style={styles.subtitle}><strong>Visão</strong></h3>
                        <p style={styles.text}>
                            Ser referência em soluções de Inteligência Artificial voltadas à educação em saúde,
                            promovendo práticas preventivas e o empoderamento das usuárias por meio de tecnologia
                            ética e acessível.
                        </p>
                    </Card>
                    <Card>
                        <Icon name="values" />
                        <h3 style={styles.subtitle}><strong>Valores</strong></h3>
                        <p style={styles.text}>
                            <strong style={styles.strong}>Empatia:</strong> Interação acolhedora e respeitosa às dúvidas e emoções das usuárias.
                        </p>
                        <p style={styles.text}>
                            <strong style={styles.strong}>Rigor Científico:</strong> Conteúdo estruturado com base em fontes oficiais e validação por especialistas.
                        </p>
                        <p style={styles.text}>
                            <strong style={styles.strong}>Privacidade e Segurança:</strong> Criptografia das comunicações (HTTPS) e adoção de boas práticas para proteção de dados.
                        </p>
                        <p style={styles.text}>
                            <strong style={styles.strong}>Acessibilidade:</strong> Linguagem clara, sem jargões, em uma plataforma amplamente difundida.
                        </p>
                    </Card>
                    <Card>
                        <Icon name="objectives" />
                        <h3 style={styles.subtitle}><strong>Objetivos</strong></h3>
                        <p style={styles.text}>
                            <strong>Geral:</strong> Desenvolver e validar uma assistente virtual que forneça informações
                            personalizadas sobre prevenção do câncer de mama, estimulando hábitos saudáveis e adesão a
                            exames periódicos.
                        </p>
                        <p style={styles.text}>
                            <strong>Específicos:</strong><br />
                            1. Criar uma API para comunicação fluida entre o WhatsApp e o modelo Gemini.<br />
                            2. Treinar a IA com conteúdos validados por especialistas.<br />
                            3. Garantir respostas empáticas e seguras.<br />
                            4. Validar tecnicamente o sistema.<br />
                            5. Assegurar a privacidade das informações.
                        </p>
                    </Card>
                </Section>

                {/* Seções da Equipe - Mantidas como estão */}
                <section style={styles.teamSection}>
                    <h1 style={styles.pageTitle}>Nossa Equipe</h1>
                    <h3 style={styles.pageTitle}>Líderes:</h3>
                    <div style={styles.carouselContainer}>
                        <Slider {...carouselSettings}>
                            {leaders.map((member, index) => (
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

                <section style={styles.teamSection}>
                    <h3 style={styles.pageTitle}>Radiologistas:</h3>
                    <div style={styles.carouselContainer}>
                        <Slider {...carouselSettings}>
                            {radiologists.map((member, index) => (
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

                <section style={styles.teamSection}>
                    <h3 style={styles.pageTitle}>Desenvolvedores:</h3>
                    <div style={styles.carouselContainer}>
                        <Slider {...carouselSettings}>
                            {developers.map((member, index) => (
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


export function About() {
    return (
        <LoadingProvider> {/* O provedor de loading envolve o conteúdo da página About */}
            <AboutPageContent />
        </LoadingProvider>
    );
}