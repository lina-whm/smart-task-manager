import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  width: 100%;
  overflow-x: hidden;
`;

export const MainContainer = styled.main`
  max-width: 1400px; /* Увеличил максимальную ширину */
  margin: 0 auto;
  padding: 2rem 2rem; /* Увеличил боковые отступы */
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    max-width: 100%;
  }
  
  @media (min-width: 1920px) {
    max-width: 1600px; /* Для очень широких экранов */
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-size: 3rem; /* Увеличил размер */
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    padding: 0 1rem;
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px; /* Увеличил ширину сайдбара */
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const MainContent = styled.div``;

export const Sidebar = styled.div`
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
`;

export const Section = styled.section`
  background: white;
  border-radius: 16px;
  padding: 2rem; /* Увеличил внутренние отступы */
  margin-bottom: 2rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  color: #666;
  font-size: 0.875rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterText = styled.p`
  margin: 0.75rem 0;
  line-height: 1.6;
  
  &:first-child {
    margin-top: 0;
  }
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`;

export const TechBadge = styled.span`
  background: white;
  color: #667eea;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  }
`;

export const GradientLine = styled.div`
  height: 4px;
  width: 100px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  margin: 1rem auto;
  opacity: 0.7;
`;