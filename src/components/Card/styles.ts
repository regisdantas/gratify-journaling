import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
`;

export const CardContainer = styled.div`
  /* max-width: 400px; */
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px;
  margin: 10px 0px 0px 0px;

  background-color: #eee;
  border-radius: 5px;
  border-left: 3px dashed lightgray;

  div {
    margin-left: 10px;
    width: 100%;
  }

  .ContentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin: 0;
    background: #fff;

    header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      svg {
        margin: 10px;
        cursor: pointer;
      }
    }

    span {
      display: flex;
      padding: 0;
      margin: 0;
      gap: 5px;
      align-items: center;
    }
    select {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      color: gray !important;
      width: fit-content;
      margin: 0px;
      height: 30px;
      color: black;
      border: none;
      padding: 0px;
    }

    strong {
      color: darkgray;
      width: 100%;
      display: flex;
      align-items: center;
    }

    span {
      border: 0px;
      padding: 10px;
      width: 100%;
      text-align: justify;
    }

    span:empty::before {
      content: attr(data-placeholder);
      color: lightgray;
    }

    span:focus {
      outline: none;
    }

    .ActionContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 4px;
      p {
        cursor: pointer;
        display: flex;
        align-items: center;
        * {
          margin-right: 5px;
        }
      }
    }
    /* body */
    .reactMarkDown {
      padding: 0px 20px 0px 20px;
      margin: 0px;
      color: #000;
      font: 13px "Myriad Pro", "Lucida Grande", Lucida, Verdana, sans-serif;
    }

    /* links */
    .reactMarkDown a:link {
      color: #00f;
      text-decoration: none;
    }

    .reactMarkDown a:visited {
      color: #00a;
      text-decoration: none;
    }

    .reactMarkDown a:hover {
      color: #f60;
      text-decoration: underline;
    }

    .reactMarkDown a:active {
      color: #f60;
      text-decoration: underline;
    }

    .reactMarkDown * html code {
      font-size: 100%;
    }

    .reactMarkDown * html pre {
      font-size: 101%;
    }

    /* code */

    .reactMarkDown pre,
    code {
      font-size: 14px;
      font-family: monaco, courier, consolas, monospace;
      color: green;
      font-style: italic;
    }

    .reactMarkDown pre {
      margin-top: 5px;
      margin-bottom: 10px;
      border: 1px solid #c7cfd5;
      background: #f1f5f9;
      margin: 20px 0;
      padding: 8px;
      text-align: left;
    }

    .reactMarkDown hr {
      color: #919699;
      size: 1;
      width: 100%;
      noshade: "noshade";
    }

    /* headers */

    .reactMarkDown h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Myriad Pro", "Lucida Grande", Lucida, Verdana, sans-serif;
      font-weight: bold;
    }

    .reactMarkDown h1 {
      margin-top: 1em;
      margin-bottom: 1em;
      color: #000;
      font-weight: bold;
      font-size: 22px;
    }

    .reactMarkDown h2 {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 18px;
      color: #000;
      padding-bottom: 2px;
    }

    .reactMarkDown h3 {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 13px;
      color: #000;
    }

    .reactMarkDown h4 {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 11px;
      color: #000;
    }

    .reactMarkDown h5 {
      margin-top: 1em;
      margin-bottom: 1em;
      padding: 0;
      font-size: 11px;
      color: #000;
    }

    .reactMarkDown h6 {
      margin-top: 1em;
      margin-bottom: 1em;
      padding: 0;
      font-size: 11px;
      color: #000;
    }

    .reactMarkDown p {
      margin-top: 0px;
      margin-bottom: 10px;
    }

    /* lists */

    .reactMarkDown ul {
      list-style: square outside;
      margin: 0 0 0 30px;
      padding: 0 0 12px 6px;
    }

    .reactMarkDown li {
      margin-top: 7px;
    }

    .reactMarkDown ol {
      list-style-type: decimal;
      list-style-position: outside;
      margin: 0 0 0 30px;
      padding: 0 0 12px 6px;
    }

    .reactMarkDown ol ol {
      list-style-type: lower-alpha;
      list-style-position: outside;
      margin: 7px 0 0 30px;
      padding: 0 0 0 10px;
    }

    .reactMarkDown ul ul {
      margin-left: 40px;
      padding: 0 0 0 6px;
    }

    .reactMarkDown li > p {
      display: inline;
    }
    .reactMarkDown li > p + p {
      display: block;
    }
    .reactMarkDown li > a + p {
      display: block;
    }

    /* table */

    .reactMarkDown table {
      width: 100%;
      border-top: 1px solid #919699;
      border-left: 1px solid #919699;
      border-spacing: 0;
    }

    .reactMarkDown table th {
      padding: 4px 8px 4px 8px;
      background: #e2e2e2;
      font-size: 12px;
      border-bottom: 1px solid #919699;
      border-right: 1px solid #919699;
    }
    .reactMarkDown table th p {
      font-weight: bold;
      margin-bottom: 0px;
    }

    .reactMarkDown table td {
      padding: 8px;
      font-size: 12px;
      vertical-align: top;
      border-bottom: 1px solid #919699;
      border-right: 1px solid #919699;
    }
    .reactMarkDown table td p {
      margin-bottom: 0px;
    }
    .reactMarkDown table td p + p {
      margin-top: 5px;
    }
    .reactMarkDown table td p + p + p {
      margin-top: 5px;
    }

    /* forms */

    .reactMarkDown form {
      margin: 0;
    }

    .reactMarkDown button {
      margin: 3px 0 10px 0;
    }

    .reactMarkDown input {
      vertical-align: middle;
      padding: 0;
      margin: 0 0 5px 0;
    }

    .reactMarkDown select {
      vertical-align: middle;
      padding: 0;
      margin: 0 0 3px 0;
    }

    .reactMarkDown textarea {
      margin: 0 0 10px 0;
      width: 100%;
    }

    .reactMarkDown img {
      max-width: 45vw;
    }

    textarea {
      width: 100%;
      min-height: 100px;
      resize: none;
      overflow: hidden;
      scrollbar-width: none;
      margin: 10px;
      padding: 20px;
      border: none;
    }

    textarea:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
  .ContentContainer .date {
    width: auto;
    align-self: flex-end;
    padding: 4px 10px 4px 10px;
    color: gray;
    align-items: flex-end;
  }
`;
