import styled, { css } from 'styled-components';

interface TypingProps {
  number: number;
}

export const Typing = styled.p<TypingProps>`
  width: ${({ number }) => `${number + 1}ch`};
  white-space: nowrap;
  overflow: hidden;
  // blink in future
  border-right: transparent;
  font-family: Menlo, Monaco, 'Courier New', monospace;
  font-size: 11px;
  color: white;
  ${({ number }) =>
    number &&
    css`
      animation: typing 0.05s steps(${number}),
        blink 0.05s step-end ${number / 10};
    `}

  @keyframes typing {
    from {
      width: 0;
    }
  }

  /* @keyframes blink {
    50% {
      border-color: transparent;
    }
  } */
`;

export const Variable = styled.span`
  font-weight: bold;
  color: var(--variable-green);
  font-family: Menlo, Monaco, 'Courier New', monospace;
`;

export const Response = styled.span`
  color: var(--variable-blue);
  font-family: Menlo, Monaco, 'Courier New', monospace;
`;
