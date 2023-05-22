import styled from 'styled-components';

export const Topbar = styled.section`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 2;
  top: 0;

  width: 100%;
  height: 70px;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Sections = styled.a`
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
  opacity: 0.8;
  color: white;

  &:hover {
    color: #66d9ed;
    cursor: pointer;
    opacity: 1;
  }
`;
