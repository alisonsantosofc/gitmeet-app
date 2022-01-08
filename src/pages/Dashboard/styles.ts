import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.div`
  img {
    width: 400px;
  }

  @media (max-width: 520px) {
    img {
      width: 350px;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 4rem;

  h1 {
    width: 40%;
    font-size: 2.5rem;
    color: #3a3a3a;
    line-height: 3.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    h1 {
      width: 80%;
      text-align: center;
    }
  }

  @media (max-width: 520px) {
    h1 {
      line-height: 3rem;
    }
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 2rem;
  width: 70%;
  display: flex;

  input {
    flex: 1;
    height: 4rem;
    padding: 0 1.5rem;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 0.4rem 0 0 0.4rem;
    color: #5c5c5c;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #ff2828;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 4rem;
    background: #007cec;
    border: 0;
    border-radius: 0 0.4rem 0.4rem 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${lighten(0.1, '#007cec')};
    }

    &:active {
      background: ${lighten(0, '#007cec')};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      height: 5rem;
      padding: 1rem 1.5rem;
      border: 2px solid #fff;
      border-radius: 0.4rem;
      color: #5c5c5c;
    }

    button {
      width: 30%;
      height: 2.5rem;
      margin-top: 0.5rem;
      border-radius: 0.4rem;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff2828;
  margin-top: 8px;

  @media (max-width: 520px) {
    text-align: center;
  }
`;

export const Repositories = styled.div`
  margin-top: 4rem;
  width: 70%;

  a {
    background: #fff;
    border-radius: 0.4rem;
    width: 100%;
    padding: 1.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 0.5rem;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 1rem;

      strong {
        font-size: 1.2rem;
        color: #3d3d4d;
      }

      p {
        margin-top: 0.2rem;
        font-size: 1rem;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    a {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 128px;
        height: 128px;
      }

      div {
        margin-top: 1rem;
        text-align: center;

        strong {
          font-size: 1.1rem;
        }
      }

      svg {
        margin-top: 0.2rem;
      }
    }
  }
`;

export const Pagination = styled.div`
  width: 70%;
  margin-top: 1rem;

  button {
    width: 2rem;
    height: 2rem;
    border: 0;
    color: #fff;
    background-color: #007cec;

    & + button {
      margin-left: 0.5rem;
    }

    &:hover {
      background: ${lighten(0.1, '#007cec')};
    }

    &:active {
      background: ${lighten(0, '#007cec')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
