import React,{useState} from "react";
import styled from "styled-components";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import useAuth from "../../useContext/useAuth";
import { db } from "../../../firebase";

const FamilyDetails = ({fatherWork,motherWork,brother,sister}) => {
  const {user} = useAuth()
  const [show, setShow] = useState(true);
  const [editData, setEditData] = useState({
    fatherWork:"",motherWork:"",brother:"",sister:""
  })

  const handleEdit = () => {
    setEditData({fatherWork,motherWork,brother,sister});
    setShow(false);
  };
  const handleSave = () => {
    setShow(true);
    console.log(editData);
    db.collection("users").doc(user.uid).update({
      fatherWork: editData.fatherWork,
      motherWork: editData.motherWork,
      brother: editData.brother,
      sister: editData.sister,
    });
  };
  const handalChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  return (
    <Container className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="bg_color col-10">
          <div className="edit_click ">
            <div className="title">
              <PeopleAltOutlinedIcon />
              Family Details
            </div>
            <div className="title">
            {show ? (
                <span
                  onClick={() =>
                    handleEdit({
                      motherWork,fatherWork,brother,sister
                    })
                  }
                >
                  Edit
                </span>
              ) : null}
            </div>
          </div>
         {show ?
         <>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Mother's Occupation</li>
                <li>
                  <span>{motherWork}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Father's Occupation</li>
                <li>
                  <span>{fatherWork}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Sister(s)</li>
                <li>
                  <span>{sister}</span>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Brother(s)</li>
                <li>
                  <span>{brother}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Gothra</li>
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
         </>:
         <>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Mother's Occupation</li>
                <li>
                <select name="motherWork" value={editData.motherWork} onChange={handalChange} className="select">
                  <option>Select</option>
                  <option>Housewife</option>
                    <option>Business/Enterprenur</option>
                    <option>Service-private</option>
                    <option>Service Govt/PSU</option>
                    <option>Army/Armed Forces</option>
                    <option>Civil Services</option>
                    <option>Retired</option>
                    <option>Not Employed</option>
                    <option>Expired</option>
                    <option>Teacher</option>
                    <option>Other</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Father's Occupation</li>
                <li>
                <select name="fatherWork" value={editData.fatherWork} onChange={handalChange} className="select">
                  <option>Select</option>
                    <option>Business/Enterprenur</option>
                    <option>Service/Private</option>
                    <option>Service/Govt/PSU</option>
                    <option>Army/Armed Forces</option>
                    <option>Civil Services</option>
                    <option>Retired</option>
                    <option>Not Employed</option>
                    <option>Expired</option>
                    <option>Other</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Sister(s)</li>
                <li>
                <input name="sister" value={editData.sister} onChange={handalChange}/>
                </li>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>Brother(s)</li>
                <li>
                <input name="brother" value={editData.brother} onChange={handalChange}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <ul>
                <li>Gothra</li>
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
            <div className="btn">
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleSave}>Cancel</button>
                </div>
          </div>
         </>
         }
        </div>
        <div className="col-1"></div>
      </div>
    </Container>
  );
};

export default FamilyDetails;

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
    cursor: pointer;
  }
  .detail {
    display: flex;
    justify-content: space-around;
  }
  li input {
    width: 100%;
    padding: 12px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
  }
  li input,
  select:focus {
    outline: none;
  }
  li select {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #aeaeae;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 4%;
  }
  .btn button {
    background-color: #ffa500;
    width: 120px;
    height: 100%;
    padding: 4px;
    margin: 4px;
    font-size: larger;
    color: white;
    border: none;
  }
  @media (max-width:600px) {
    li {
      width: 120px;
    }
  }
`;
