import styled from 'styled-components';

interface IdentProps {
  number: number;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  gap: 8px;
  margin-top: 70px;
  margin-bottom: 20px;
  margin-left: 30px;
  overflow-x: auto;

  & > div:last-child > p {
    color: white;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Number = styled.p`
  width: 18px;
  display: flex;
  justify-content: center;
  font-family: Menlo, Monaco, 'Courier New', monospace;
  font-size: 12px;
  color: #6e7681;
`;

export const Ident = styled.span<IdentProps>`
  width: ${({ number }) => `${number * 10}px`};
`;
