import { browserIcons } from 'consts';
import styled from 'styled-components';

interface StyledReferenceDetailProps {
  isDarkMode: boolean;
}

export const StyledReferenceDetail = styled.div<StyledReferenceDetailProps>`
  padding: 15px 36px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#f0eeeb')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};

  .title-wrapper {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .ant-rate {
    padding-left: 0 !important;
  }

  .sampleView a {
    color: #5c43f5;
  }

  #explanation {
    color: #fff;
    word-break: keep-all;
  }
  #explanation h2 {
    font-size: 40px;
    margin-bottom: 30px;
    margin-top: 36px;
  }
  #explanation p {
    font-size: 16px;
    line-height: 2;
    margin-bottom: 20px;
    font-weight: 300;
    position: relative;
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  }
  #explanation a:hover {
    border-bottom: ${({ isDarkMode }) =>
      isDarkMode ? '1px dotted #fff' : '1px dotted #000'};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
  }
  #explanation pre {
    margin-top: 0;
  }
  #explanation p code {
    font-size: 0.9em;
    background: #433992;
    color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
    padding: 5px 4px 4px 4px;
    vertical-align: 2px;
    border-radius: 5px;
  }
  #explanation p[data-num]::before {
    content: attr(data-num);
    position: absolute;
    left: -30px;
    top: -1px;
    opacity: 0.3;
  }
  #explanation .detail {
    color: #9a92dd;
    text-decoration: underline;
    font-weight: 500;
  }
  #explanation .code_link li {
    display: inline-block;
    margin-bottom: 65px;
    position: relative;
  }
  #explanation .code_link li a {
    color: #fff;
    background: #222;
    padding: 7px 20px 5px 20px;
    display: inline-block;
    border-radius: 30px;
  }
  #explanation .code_link li.active a {
    background: #fff;
    color: #000;
  }
  #explanation .code_link li .sub {
    position: absolute;
    left: 0;
    top: 40px;
    width: 500px;
  }
  #explanation .code_link li .sub li {
    display: inline;
  }
  #explanation .code_link li .sub li a {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    padding: 0;
    background: #222;
    color: #fff;
    letter-spacing: -1px;
  }
  #explanation .code_link li .sub li.last a {
    width: auto;
    padding: 1px 10px 0 10px;
    margin-right: 5px;
  }
  #explanation .code_link li .sub li.last a:last-child {
    visibility: hidden;
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    line-height: 1.9;
  }
  #explanation .code_link li .sub li.last.active a:last-child {
    visibility: visible;
  }
  #explanation .code_link li .sub li.active a {
    background: #fff;
    color: #000;
  }
  #explanation .refer li a {
    color: #fff;
    font-size: 16px;
    line-height: 2;
    margin-bottom: 20px;
    font-weight: 300;
  }
  #explanation .refer li a:hover {
    border-bottom: 1px solid #fff;
  }
  #explanation .code_view > div:first-child {
    display: block;
  }
  #explanation .code_view > div {
    display: none;
  }
  #explanation .soFar {
    width: 100%;
  }
  #explanation .soFar .click {
    background: #705df2;
    text-align: center;
    border-radius: 20px;
    margin: 0 0 20px;
    cursor: pointer;
  }
  #explanation .none {
    display: none;
  }

  #explanation hr {
    display: block;
    height: 0;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: content-box;
    overflow: visible;
    margin: 50px 0;
  }
  #explanation h3 {
    font-size: 24px;
    margin-bottom: 5px;
  }
  #explanation .blue {
    background: #f4f8fa;
    padding: 22px 20px 18px 20px;
    margin-bottom: 10px;
  }
  #explanation h3 {
    margin-top: 50px;
  }
  #explanation h4 {
    font-size: 20px;
    display: inline-block;
    color: #fff;
    background: #000;
    padding: 2px 6px 1px 6px;
    margin-top: 50px;
    margin-bottom: 10px;
    border-radius: 2px;
  }
  #explanation h4 a {
    color: #fff;
  }
  #explanation ul {
    padding-left: 15px;
  }
  #explanation ul li {
    font-size: 16px;
    line-height: 1.8;
    list-style: disc;
    font-weight: 300;
    color: #000;
  }
  #explanation .sample h5 {
    border-bottom: 1px solid #e6e6e6;
    background: #f2f2f2;
    border-radius: 5px 5px 0 0;
    padding: 12px 10px 10px 20px !important;
    font-size: 16px !important;
  }
  #explanation .sample .sampleView {
    border-bottom: 1px solid #e6e6e6;
    padding: 20px;
  }
  #explanation .sample .sampleBtnNone {
    border-bottom: 1px solid #e6e6e6;
    padding: 20px 20px 20px 20px;
  }
  #explanation .sample {
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    color: #666;
    margin-bottom: 10px;
  }
  #explanation .sample p {
    margin-bottom: 0;
    line-height: 1.6;
  }
  #explanation .sample pre code {
    border-radius: 0 0 5px 5px;
    margin-bottom: 0;
  }
  #explanation .sample .sampleBtn {
    border-bottom: 1px solid #e6e6e6;
    padding: 20px 20px 10px 20px;
  }
  #explanation .sample .sampleDesc {
    border-bottom: 1px solid #e6e6e6;
    padding: 20px;
    font-size: 16px;
    font-weight: 300;
  }
  #explanation .sample .sampleBtn a {
    border: 1px solid #e6e6e6;
    border-radius: 100px;
    white-space: nowrap;
    padding: 10px 20px;
    display: inline-block;
    margin-bottom: 10px;
    transition: all 0.2s;
    color: #666;
  }
  #explanation .sample .sampleBtn a:hover {
    border-color: #ff4b4b;
    color: #ff4b4b;
  }
  #explanation .sample .sampleOption {
    border-bottom: 1px solid #e6e6e6;
    padding: 20px;
  }
  #explanation .sample .sampleOption .option {
    display: inline-block;
    border: 1px solid #e6e6e6;
    border-radius: 100px;
  }
  #explanation .sample .sampleOption .option .one {
    border-radius: 100px;
    border-radius: 100px;
    white-space: nowrap;
    padding: 10px 20px;
    display: inline-block;
    color: #666;
  }
  #explanation .sample .sampleOption .option .left {
    border-right: 1px solid #e6e6e6;
    padding: 10px 14px 8px 20px;
    display: inline-block;
  }
  #explanation .sample .sampleOption .option .right {
    padding: 8px 20px 2px 10px;
    display: inline-block;
    vertical-align: -5px;
  }
  #explanation .sample .sampleOption .option .right a {
    display: inline-block;
    margin-right: 3px;
  }
  #explanation .sample .sampleOption .option .right i {
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #222;
  }
  #explanation .sample .sampleOption .option .right .plus {
    position: relative;
  }
  #explanation .sample .sampleOption .option .right .plus::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    width: 10px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
  }
  #explanation .sample .sampleOption .option .right .plus::after {
    content: '';
    position: absolute;
    left: 9px;
    top: 5px;
    width: 2px;
    height: 10px;
    background: #fff;
    border-radius: 2px;
  }
  #explanation .sample .sampleOption .option .right .minus {
    position: relative;
  }
  #explanation .sample .sampleOption .option .right .minus::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    width: 10px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
  }

  #explanation .sample .sampleCode .scMenu > div {
    display: inline-block;
    border-right: 1px solid #e6e6e6;
    padding: 13px 20px 10px 20px;
    cursor: pointer;
  }
  #explanation .sample .sampleCode .scCont > div {
    display: none;
  }
  #explanation table {
    color: #000;
    margin-bottom: 20px;
  }
  #explanation table a {
    color: #5c43f5;
    border-bottom: 1px dotted #5c43f5;
  }
  #explanation table {
    border: 1px solid #ddd;
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    border-spacing: 0;
    border-collapse: collapse;
  }
  #explanation .table table thead th {
    text-align: left;
    font-weight: normal;
    background-color: #f5f5f5;
  }
  #explanation .table table th,
  #explanation .table table td {
    border: 1px solid #ddd;
    padding: 14px 12px 12px 12px;
    vertical-align: middle;
    text-align: left;
    font-weight: normal;
    /* font-weight: 300; */
  }
  #explanation .table table tr:nth-child(even) > th,
  #explanation .table table tr:nth-child(even) > td {
    background-color: #f5f5f5;
  }
  #explanation table .icon {
    width: 16px;
    line-height: 1.8;
    vertical-align: middle;
  }
  #explanation .table .ce {
    text-align: center;
  }
  #explanation .compatibility thead > tr > th img {
    width: 30px;
    display: block;
    margin: 0 auto;
  }
  #explanation .compatibility > thead > tr > th {
    position: relative;
  }
  #explanation .compatibility > thead > tr > th em {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    font-size: 10px;
    background: rgb(196, 196, 196);
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
  }

  .compatibility-icons {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .chrome-icon {
    background-image: url(${browserIcons.CHROME_ICON});
  }
  .firefox-icon {
    background-image: url(${browserIcons.FIREFOX_ICON});
  }
  .safari-icon {
    background-image: url(${browserIcons.SAFARI_ICON});
  }
  .opera-icon {
    background-image: url(${browserIcons.OPERA_ICON});
  }
  .whale-icon {
    background-image: url(${browserIcons.WHALE_ICON});
  }
  .explorer8-icon {
    background-image: url(${browserIcons.EXPLORER8_ICON});
  }
  .explorer9-icon {
    background-image: url(${browserIcons.EXPLORER9_ICON});
  }
  .explorer10-icon {
    background-image: url(${browserIcons.EXPLORER10_ICON});
  }
  .explorer11-icon {
    background-image: url(${browserIcons.EXPLORER11_ICON});
  }
  .edge-icon {
    background-image: url(${browserIcons.EDGE_ICON});
  }
  .android-icon {
    background-size: contain;
    background-image: url(${browserIcons.ANDROID_ICON});
  }
  .apple-icon {
    background-size: contain;
    background-image: url(${browserIcons.APPLE_ICON});
  }

  @media (max-width: 750px) {
    #explanation {
      padding: 0px;
      padding-top: 120px;
    }
    #explanation h2 {
      font-size: 2.5rem;
      margin-top: 70px;
      margin-bottom: 20px;
    }
    #explanation p {
      font-size: 1.5rem;
      line-height: 1.8;
    }

    #explanation h3 {
      font-size: 3rem;
    }

    #explanation h4 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    #explanation ul li {
      font-size: 1.5rem;
      line-height: 2;
    }

    table {
      font-size: 20px;
    }

    .compatibility {
      tr {
        height: 150px;
      }

      td {
        text-align: center !important;
        font-size: 40px !important;
      }
    }

    .compatibility-icons {
      transform: scale(2.3);
    }
  }
`;
