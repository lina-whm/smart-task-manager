import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    z-index: -1;
  }
`;

export const MainContainer = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem 0.75rem; /* Базовая настройка для самых маленьких */
  width: 100%;
  
  /* iPhone SE и маленькие телефоны (до 375px) */
  @media (max-width: 374px) {
    padding: 0.75rem 0.5rem;
  }
  
  /* iPhone SE (375px) и средние телефоны */
  @media (min-width: 375px) and (max-width: 479px) {
    padding: 1.25rem 1rem;
  }
  
  /* Большие телефоны (480px - 767px) */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 1.5rem 1.25rem;
  }
  
  /* Планшеты (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 2rem 1.5rem;
  }
  
  /* Десктопы (1024px - 1439px) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    max-width: 1200px;
    padding: 2rem 2.5rem;
  }
  
  /* Большие экраны (1440px - 1919px) */
  @media (min-width: 1440px) and (max-width: 1919px) {
    max-width: 1400px;
    padding: 2rem 3rem;
  }
  
  /* Очень большие экраны (1920px+) */
  @media (min-width: 1920px) {
    max-width: 1800px;
    padding: 3rem 4rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1.25rem;
  width: 100%;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
  
  /* Большие телефоны и планшеты */
  @media (min-width: 480px) and (max-width: 1023px) {
    margin-bottom: 2rem;
    padding: 0;
  }
  
  /* Десктопы */
  @media (min-width: 1024px) {
    margin-bottom: 3rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.h1`
  font-size: 1.375rem; /* База для самых маленьких */
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0 0.25rem;
  word-break: break-word;
  line-height: 1.2;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    font-size: 1.5rem;
    margin-bottom: 0.625rem;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
  
  /* Планшеты */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.25rem;
    margin-bottom: 0.875rem;
  }
  
  /* Десктопы */
  @media (min-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  /* Большие экраны */
  @media (min-width: 1440px) {
    font-size: 3.25rem;
  }
  
  /* Очень большие экраны */
  @media (min-width: 1920px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.8125rem; /* База */
  color: #555;
  margin: 0 auto 0.875rem;
  line-height: 1.4;
  font-weight: 400;
  padding: 0 0.5rem;
  word-break: break-word;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 0.9375rem;
    margin-bottom: 1.125rem;
  }
  
  /* Планшеты */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  /* Десктопы */
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.7;
    max-width: 800px;
    padding: 0;
  }
  
  /* Большие экраны */
  @media (min-width: 1440px) {
    font-size: 1.375rem;
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    gap: 1.125rem;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    gap: 1.25rem;
  }
  
  /* Планшеты */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 1.5rem;
  }
  
  /* Десктопы */
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 380px;
    gap: 2rem;
  }
  
  /* Большие экраны */
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 420px;
    gap: 2.5rem;
  }
  
  /* Очень большие экраны */
  @media (min-width: 1920px) {
    grid-template-columns: 1fr 480px;
    gap: 3rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
`;

export const Sidebar = styled.div`
  width: 100%;
  
  /* Планшеты в горизонтальной ориентации */
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  /* Мобильные и планшеты в вертикальной ориентации */
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Section = styled.section`
  background: white;
  border-radius: 8px;
  padding: 0.875rem;
  margin-bottom: 0.875rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 100%;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 1.125rem;
    border-radius: 10px;
    margin-bottom: 1.125rem;
  }
  
  /* Планшеты */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
  
  /* Десктопы */
  @media (min-width: 1024px) {
    padding: 2rem;
    border-radius: 16px;
    margin-bottom: 2rem;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1.25rem 0;
  color: #666;
  font-size: 0.6875rem;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    padding: 1.5rem 0.5rem;
    font-size: 0.75rem;
    margin-top: 1.75rem;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 1.75rem 0;
    font-size: 0.75rem;
    margin-top: 2rem;
  }
  
  /* Планшеты и десктопы */
  @media (min-width: 768px) {
    padding: 3rem 0;
    margin-top: 3rem;
    font-size: 0.875rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterText = styled.p`
  margin: 0.25rem 0;
  line-height: 1.3;
  
  /* iPhone SE и больше */
  @media (min-width: 375px) {
    margin: 0.375rem 0;
    line-height: 1.4;
  }
  
  /* Десктопы */
  @media (min-width: 1024px) {
    margin: 0.75rem 0;
    line-height: 1.6;
  }
  
  &:first-child {
    margin-top: 0;
  }
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.375rem;
  flex-wrap: wrap;
  margin: 0.625rem 0;
  padding: 0 0.25rem;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    gap: 0.5rem;
    margin: 0.75rem 0;
    padding: 0 0.5rem;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    gap: 0.625rem;
    margin: 1rem 0;
    padding: 0;
  }
  
  /* Планшеты и десктопы */
  @media (min-width: 768px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

export const TechBadge = styled.span`
  background: white;
  color: #667eea;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.625rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.15);
  box-shadow: 0 1px 2px rgba(102, 126, 234, 0.1);
  transition: all 0.2s;
  white-space: nowrap;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.6875rem;
    border-radius: 14px;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(102, 126, 234, 0.1);
  }
  
  /* Планшеты и десктопы */
  @media (min-width: 768px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  }
`;

export const GradientLine = styled.div`
  height: 2px;
  width: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1px;
  margin: 0.5rem auto;
  opacity: 0.7;
  
  /* iPhone SE */
  @media (min-width: 375px) and (max-width: 479px) {
    height: 2px;
    width: 60px;
    margin: 0.625rem auto;
  }
  
  /* Большие телефоны */
  @media (min-width: 480px) and (max-width: 767px) {
    height: 3px;
    width: 70px;
    margin: 0.75rem auto;
  }
  
  /* Планшеты и десктопы */
  @media (min-width: 768px) {
    height: 4px;
    width: 100px;
    margin: 1rem auto;
  }
`;