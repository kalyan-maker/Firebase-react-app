import styled from "styled-components";

export const Answersection = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 10px;
  margin: 2rem 0;
  grid-auto-flow: column;

  @media only screen and (max-width: 1024px) {
    .answers {
      grid-auto-flow: unset;
      margin: 1rem 0;
    }
  }

  .answer {
    width: 100%;
    height: 58px;
    background: #e4e8ee;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0 1.1rem;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background: hsla(229, 20%, 57%, 0.253);
    }
    input {
      margin-right: 15px;
    }
  }

  .answer .answer span {
    width: 100%;
  }

  .answer span:nth-of-type(2) {
    text-align: right;
    color: #4e536f;
    font-size: 14px;
  }

  .correct {
    background: Green;
    font-weight: 600;
  }

  .wrong {
    background: red;
    font-weight: 600;
  }
`;

export const PrograssBar = styled.div`
  width: calc(100vw - 100px);
  height: 65px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 50px 1fr auto;
  gap: 20px;

  .progressBar .backButton {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-left: 10px;
    background: #47f5901c;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & :hover {
      background: #47f5953a;
    }
  }

  @media only screen and (max-width: 1024px) {
    .progressBar {
      width: calc(100vw - 60px);
      bottom: 10px;
    }

    .progressBar .backButton {
      width: 40px;
      height: 40px;
    }

    .next span:first-child {
      display: none;
    }
  }

  .rangeArea {
    width: 100%;
    position: relative;
    margin: 0 auto;
  }

  .rangeBody {
    width: 100%;
    height: 4px;
    margin: 0 auto;
    background: #e4e8ee;
    border: none;
    outline: none;
    border-radius: 20px;
  }

  .progress {
    height: 4px;
    background: green;
    border-radius: 20px;
    position: relative;
    transition: width 0.3s ease;
  }

  .progress::after {
    content: "";
    height: 12px;
    width: 12px;
    position: absolute;
    right: 0;
    border-radius: 100%;
    background-color: green;
    transform: translateY(-50%);
    top: 50%;
    cursor: pointer;
  }

  .tooltip {
    position: absolute;
    top: -70px;
    // /* left: calc(70% - 65px); */
    width: 130px;
    background-color: green;
    color: #fff;
    padding: 0.8rem 1rem;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 600;
    display: none;
  }

  .tooltip::after {
    content: "";
    width: 15px;
    height: 15px;
    background-color: green;
    border-radius: 4px;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: rotate(45deg) translate(-50%, 100%);
  }
`;

export const Question = styled.div`
  background-color: white;
  padding: 10px;
  margin: 1rem 0;
  border-radius: 4px;
  .qtitle {
    display: flex;
    gap: 5px;
    align-items: center;
    color: #002333;
    font-weight: 600;
  }

  .qtitle span {
    color: #2dbf64;
  }
`;

export const Analysisection = styled.div`
  margin: 2rem auto;
`;

export const Summary = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }

  .point {
    width: 50%;
    display: grid;
    justify-content: center;
    place-items: center;
    position: relative;
  }

  .score {
    width: 400px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  .badge {
    text-align: center;
    height: 300px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .badge img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 800px) {
    .badge {
      width: 100%;
    }
  }
`;
