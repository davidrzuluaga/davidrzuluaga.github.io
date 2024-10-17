import styled from '@emotion/styled';

export const AppStyles = styled.div`
  header {
    background: url('https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/backgrounds/DRZ+BGF.png')
      no-repeat 50%;
    background-size: cover;
    background-position: left;
    color: white;
    height: 97vh;
    position: relative;

    .name {
      position: absolute;
      top: 24%;
      margin: 0px 10%;
    }
  }

  .skills #cvlink {
    margin-left: 60%;
  }

  header {
    h1 {
      text-shadow: -2px 2px 5px #000;
    }

    p {
      font-size: 21px;
      font-weight: 300;
      text-shadow: -1px 1px 5px #000;
    }
  }

  .link-button {
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  .hidden {
    visibility: hidden;
  }

  .description {
    background: url('https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/backgrounds/NYC-path.jpg')
      no-repeat 50%;
    height: auto;

    p {
      color: white;
      position: relative;
      margin: 0 10% 0 14%;
      font-size: 21px;
      text-shadow: 2px 3px 5px #000;
      padding-bottom: 10px;

      &:first-child {
        padding-top: 15%;
      }

      &:last-child {
        padding-bottom: 15%;
      }
    }
  }

  .imgskill {
    margin: 1%;
  }

  .skills {
    background: url('https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/backgrounds/skills.jpg')
      no-repeat 50%;
    background-size: cover;
    height: auto;
    padding-bottom: 2%;
  }

  .skill {
    padding-top: 50px;
    margin: 0 5%;
    color: white;
    font-size: 18px;
    text-shadow: 2px 3px 5px #000;
  }

  .langSkills {
    display: inline-block;
    margin: 5px 20px 0px 0;
    p {
      padding: 5px 0 0 0;
      text-align: center;
    }
  }

  .navbar-brand:hover {
    cursor: pointer;
  }

  .portfolio {
    background-color: rgb(224, 224, 224);
    background-size: cover;
    height: auto;
  }

  .imgportfolio {
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .pages {
    padding-top: 2%;
    padding-bottom: 2%;
    color: rgb(0, 0, 0);
    position: relative;
    margin: 0 5%;
    font-size: 18px;
  }

  .experience {
    background: url('https://s3.us-east-2.amazonaws.com/davidrzuluaga.com/assets/backgrounds/Summit.JPG')
      no-repeat 50%;
    background-size: cover;
    height: auto;
    padding-bottom: 2%;
  }

  .xp {
    padding-top: 50px;
    margin: 0 5%;
    color: white;
    font-size: 18px;
    text-align: left;

    .xpcard {
      background-color: rgba(0, 94, 170, 0.726);
      border-color: rgb(61, 61, 61);
      color: white;
    }

    h1 {
      color: #000000;
      text-shadow: 1px 1px 2px white;
      padding: 11px 10px;
      font-size: 44px;
    }

    h2 {
      margin-top: 5px;
      text-shadow: 1px 1px 2px black;
    }

    a {
      text-decoration: none;
      &:hover {
        color: rgb(190, 190, 190);
      }

      color: white;
    }

    img {
      overflow: hidden;
      position: relative;
    }
  }

  .contact {
    background-color: rgb(163, 163, 163);
    background-size: cover;
    height: auto;
    padding-bottom: 2%;
  }

  .contactinfo {
    padding-top: 2%;
    padding-bottom: 2%;
    margin: 0 5%;
    font-size: 18px;
    font-weight: 300;
  }

  .social {
    background-color: rgb(83, 83, 83);
    text-align: center;
    padding: 1% 5%;

    a {
      color: white;
      display: block;
      padding: 2px 0;

      &:hover {
        text-decoration: none;
        color: rgb(126, 126, 126);
      }
    }
  }

  @media (min-width: 930px) {
    header {
      height: 100vh;
      position: relative;

      .name {
        position: absolute;
        top: 56%;
        right: 10%;
      }
    }
    .social {
      a {
        display: inline;
      }
    }

    .skills #cvlink {
      margin-left: 80%;
    }

    .description p {
      position: relative;
      top: 20%;
      margin-left: 20%;
      margin-right: 30%;
      font-size: 21px;
      font-weight: 300;
      text-shadow: 2px 3px 5px #000;
    }
  }
`;
