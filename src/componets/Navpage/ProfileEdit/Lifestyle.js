import React from "react";
import styled from "styled-components";
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';

const Lifestyle = () => {
  return (
    <Container className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="bg_color col-10">
          <div className="edit_click ">
            <div className="title">
              <NightlifeOutlinedIcon />
              Lifestyle
            </div>
            <div className="title">
              <span>Edit</span>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Habits</li>
                <li>
                  <span>Dietary Habits?, Drinking Habits?, Smoking Habits?</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Assets</li>
                <li>
                  <span>Own a house?, Own a car?e</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Languages Known</li>
                <li>
                  <span>Not filled in</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Blood Group</li>
                <li>
                  <span>1 brother of which 1 married</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Special Cases</li>
                <li>
                  <span>Not filled in</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Gothra (maternal)</li>
                <li>
                  <span>Not filled in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </Container>
  );
};

export default Lifestyle;

const Container = styled.div`
  .bg_color {
    background-color: white;
    padding: 8px;
    margin: 1px;
  }
  .edit_click {
    display: flex;
    justify-content: space-between;
    padding: 18px;
  }
  ul {
    padding: 0 24px;
    margin-top: 18px;
  }
  li {
    
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    color: #999;
    word-wrap: break-word;
  }
  li span {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
    font-size: 15px;
    color: #34495e;
  }
  .title {
    color: #d9475c;
    font-size: 16px;
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
  }
  .detail {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width:600px) {
    li {
      width: 120px;
    }
  }
`;
