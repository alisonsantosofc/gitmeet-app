import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 42px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 70px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
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
    height: 70px;
    background: #007cec;
    border: 0;
    border-radius: 0 5px 5px 0;
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
`;

export const Error = styled.span`
  display: block;
  color: #ff2828;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
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
      margin: 0 16px;

      strong {
        font-size: 18px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 16px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
