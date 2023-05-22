import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const ContentBox = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  height: fit-content;
  position: absolute;
  z-index: 1;
`;

export const Title = styled.h1`
  font-style: italic;
  color: white;
  z-index: 1;
  font-size: 8.375rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-style: italic;
  color: white;
  z-index: 1;
  font-size: 2.375rem;
  text-align: center;
`;
