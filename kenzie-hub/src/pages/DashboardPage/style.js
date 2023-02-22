import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 28px 0;
  border-top: 1px solid var(--color-grey-2);
  border-bottom: 1px solid var(--color-grey-2);
  div {
    width: 90%;
    max-width: 780px;
    margin: 22px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 22px;

    h2 {
      font-size: 18px;
      font-weight: 700;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const StyledSectionTecnologyList = styled.section`
  div {
    width: 90%;
    max-width: 780px;
    margin: 22px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .BtnAddTech {
      width: 32px;
      height: 32px;
      background-color: var(--color-grey-3);
      border-radius: 4px;
      color: var(--color-grey-0);
      font-weight: 700;
      font-size: 18px;
    }
  }

  ul {
    width: 90%;
    max-width: 780px;
    margin: 22px auto;
    padding: 22px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    li {
      width: 100%;
      height: 48px;
      padding: 0 16px;
      line-height: 48px;
      background-color: var(--color-grey-4);
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
    }
    li:hover {
      background-color: var(--color-grey-2);
    }
  }
`;
