import styled, { css } from 'styled-components';

interface SectionsProps {
  active?: boolean;
}

export const Topbar = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 35px;
  background-color: var(--secondary-color);
`;

export const FitContent = styled.div`
  display: flex;
  width: fit-content;

  & > :last-child {
    border-left: transparent;
  }
`;

export const Sections = styled.div<SectionsProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 140px;
  height: 100%;
  padding: 0 10px;
  transition: 0.1s;
  background-color: var(--secondary-color);
  border: 1px solid rgb(48, 54, 61);

  ${({ active }) =>
    active &&
    css`
      background-color: var(--primary-color);
      border-right: 1px solid var(--default-border-color);
      border-bottom-color: var(--selected-border-bottom-color);
      border-top-color: var(--selected-border-top-color);
    `}
`;

export const Label = styled.label<SectionsProps>`
  cursor: pointer;
  font-size: 13px;
  opacity: 0.8;
  color: var(--default-label);

  &::before {
    color: var(--yaml-color);
    content: '!';
    font-weight: bold;
    font-style: italic;
    font-size: 16px;
    margin: 0 8px;
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--selected-label);
      opacity: 1;
    `};
`;

export const ChildrenBar = styled.nav`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 2;
  top: 35px;
  width: 100%;
  height: 30px;
  padding: 5px 20px;
  background-color: var(--primary-color);

  & > label {
    font-size: 12px;
  }
`;
