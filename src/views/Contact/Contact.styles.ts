import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 96px 40px 80px 96px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const FilesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  height: fit-content;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  height: fit-content;
`;

export const Title = styled.p`
  color: white;
  font-size: 3.5rem;
`;

export const Subtitle = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 800;
`;

export const Reference = styled.p`
  color: white;
  font-size: 1.625rem;
  font-weight: 800;
`;

export const Link = styled.a`
  color: #fd3a4a;
  border-bottom: 2px dashed #fd3a4a;
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
