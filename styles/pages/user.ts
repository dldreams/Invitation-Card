import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const TicketContainer = styled.div`
  width: 700px;
  height: 370px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    var(--ticket-color-1),
    var(--ticket-color-2),
    var(--ticket-color-3),
    var(--ticket-color-4)
  );
  border-radius: 20px;
  padding: 5px;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 150px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 2;
    background-color: var(--background);
  }

  &:before {
    border: 5px solid var(--ticket-color-1);
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(-45deg);
    left: -35px;
  }

  &:after {
    border: 5px solid var(--ticket-color-4);
    border-top-color: transparent;
    border-left-color: transparent;
    transform: rotate(135deg);
    right: -35px;
  }

  .ticket-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--background);
    border-radius: 15px;

    .logo-dl {
      height: 50px;
      width: 198px;
      margin-left: 30px;
      margin-top: 30px;
    }
  }
`;

export const ContentContainer = styled.div`
  align-self: center;

  .content-title {
    margin-top: 50px;
    padding: 0 100px;
    text-align: center;
    color: #FFF;
    font-weight: 400;
    font-size: 32px;
  }

  .content-description {
    color: #FFF;
    margin-top: 20px;
    text-align: center;
    padding: 0 100px;
    font-size: 24px;
  }

  .content-date {
    color: #FFF;
    margin-top: 30px;
    text-align: center;
    padding: 0 100px;
    font-size: 18px;
  }
`;
