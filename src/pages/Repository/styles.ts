import styled from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    padding: 0.4rem;
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
    background-color: #007cec;
    border-radius: 0.2rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.1, '#007cec')};
    }

    &:active {
      background: ${lighten(0, '#007cec')};
    }

    svg {
      margin-right: 0.2rem;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;

    img {
      width: 350px;
      margin-top: 1rem;
    }

    a {
      padding: 0.2rem;
      font-size: 1rem;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 5rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;

      strong {
        font-size: 2.2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.2rem;
        color: #737380;
        margin-top: 0.2rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.5rem;

    li {
      text-align: center;

      & + li {
        margin-left: 3.5rem;
      }

      strong {
        display: block;
        font-size: 2.2rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 0.2rem;
        color: #6c6c80;
      }
    }
  }

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;

    header {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      img {
        margin-bottom: 1rem;
      }
    }

    ul {
      margin-top: 1.5rem;

      li {
        text-align: center;

        & + li {
          margin-left: 2rem;
        }

        strong {
          display: block;
          font-size: 2.2rem;
          color: #3d3d4d;
        }

        span {
          display: block;
          margin-top: 0.2rem;
          color: #6c6c80;
        }
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 4rem;

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
      margin-top: 0.8rem;
    }

    &:hover {
      transform: translateX(10px);
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

  @media (max-width: 520px) {
    a {
      div {
        strong {
          font-size: 1rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
