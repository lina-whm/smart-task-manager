import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: background 0.3s ease;
  
  &.light-theme {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    
    &:before {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
  }
  
  &.dark-theme {
    background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
    
    &:before {
      background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
    }
  }
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    transition: background 0.3s ease;
  }
`;

export const MainContainer = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  
  @media (min-width: 375px) { padding: 1rem 1.25rem; }
  @media (min-width: 414px) { padding: 1.25rem 1.5rem; }
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { 
    max-width: 1200px;
    padding: 2rem 2.5rem;
  }
  @media (min-width: 1440px) { 
    max-width: 1400px;
    padding: 2rem 3rem;
  }
  @media (min-width: 1920px) { 
    max-width: 1800px;
    padding: 3rem 4rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 1.5rem;
  width: 100%;
  
  @media (min-width: 768px) { margin-bottom: 2rem; }
  @media (min-width: 1024px) { margin-bottom: 3rem; }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 0.25rem;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (min-width: 375px) { font-size: 1.625rem; }
  @media (min-width: 414px) { 
    font-size: 1.75rem;
    padding: 0;
  }
  @media (min-width: 768px) { 
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
  @media (min-width: 1024px) { font-size: 2.75rem; }
  @media (min-width: 1440px) { 
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9375rem;
  margin: 0 auto 1rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 0 0.25rem;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
  @media (min-width: 375px) { font-size: 1rem; }
  @media (min-width: 414px) { 
    font-size: 1.0625rem;
    padding: 0;
    line-height: 1.6;
  }
  @media (min-width: 768px) { 
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  @media (min-width: 1024px) { 
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.7;
    max-width: 800px;
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  width: 100%;
  
  @media (min-width: 768px) { gap: 1.5rem; }
  @media (min-width: 1024px) { 
    grid-template-columns: 1fr 350px;
    gap: 2rem;
  }
  @media (min-width: 1440px) { 
    grid-template-columns: 1fr 380px;
    gap: 2.5rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 100%;
  overflow: hidden;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const Section = styled.section`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.25rem;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 374px) {
    padding: 0.875rem;
    border-radius: 8px;
  }
  @media (min-width: 375px) {
    padding: 1rem;
    border-radius: 10px;
  }
  @media (min-width: 414px) {
    padding: 1.125rem;
    border-radius: 11px;
  }
  @media (min-width: 768px) {
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    
    .light-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 1024px) {
    padding: 1.5rem;
    border-radius: 14px;
    
    .light-theme & {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 1440px) {
    padding: 1.75rem;
    border-radius: 16px;
    
    .light-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1.5rem 0;
  font-size: 0.8125rem;
  margin-top: 2rem;
  width: 100%;
  transition: all 0.3s ease;
  
  .light-theme & {
    color: #666;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    color: #aaa;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 2rem 0;
    margin-top: 3rem;
    font-size: 0.875rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3rem 0;
    margin-top: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterText = styled.p`
  margin: 0.5rem 0;
  line-height: 1.5;
  padding: 0 0.5rem;
  transition: color 0.3s ease;
  
  .dark-theme & {
    color: #ccc;
  }
  
  @media (min-width: 768px) {
    margin: 0.75rem 0;
    line-height: 1.6;
    padding: 0;
  }
  
  &:first-child {
    margin-top: 0;
  }
`;

export const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 0 0.25rem;
  
  @media (min-width: 414px) {
    gap: 0.75rem;
    padding: 0;
  }
  
  @media (min-width: 768px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

export const TechBadge = styled.span`
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  white-space: nowrap;
  
  .light-theme & {
    background: white;
    color: #667eea;
  }
  
  .dark-theme & {
    background: #2d2d3d;
    color: #8a9eff;
    border-color: rgba(138, 158, 255, 0.3);
    box-shadow: 0 2px 6px rgba(138, 158, 255, 0.2);
  }
  
  @media (min-width: 414px) {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }
  
  @media (min-width: 768px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    
    .light-theme & {
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
      background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    }
    
    .dark-theme & {
      box-shadow: 0 4px 12px rgba(138, 158, 255, 0.3);
      background: linear-gradient(135deg, #8a9eff20 0%, #a366c920 100%);
    }
  }
`;

export const GradientLine = styled.div`
  height: 2px;
  width: 60px;
  border-radius: 2px;
  margin: 0.5rem auto;
  opacity: 0.7;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
  }
  
  @media (min-width: 768px) {
    height: 3px;
    width: 80px;
    margin: 0.75rem auto;
  }
  
  @media (min-width: 1024px) {
    height: 4px;
    width: 100px;
    margin: 1rem auto;
  }
`;