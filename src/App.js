import './App.css';
import login from './image/login_icon.png';
import { useState } from 'react'
//import log from '';


function App() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [uname, setUname] = useState("");
  let [dbirth, setDbirth]= useState("");
  let [age, setAge] = useState("");
  let [phone, setPhone] = useState("");
  let [aphone,setAphone]=useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [rpass,setRpass]= useState("");
  let [doorno,setDoorno]=useState("");
  let [street,setStreet]=useState("");
  let [taluk,setTaluk]=useState("");
  let [district,setDistrict]=useState("");
  let [landmark,setLandmark]=useState("");
  let [state,setState]=useState("");
  let [pincode,setPincode]=useState("");
  let[country,setCountry]=useState("");
  return (
    <div className="layout">
      <title>REGISTER</title>
      <div className="formLayout">
        <div className="formLayoutTop">
          <img className="imageIcon" src={login} alt="" /><h1>Sign in</h1>
        </div>
        <div className="formLayoutBottom">
          <div className="formLayoutLeft">
            <br /><br />
            <div><input type="text" onChange={(e) => { setFname(e.target.value) }} id="firstName" name="" placeholder="Enter FirstName"></input><span className="span">&nbsp; &nbsp;* {(fname.length && (!(isNaN(fname))))? "First Name should be only alphabets": ""}</span> &nbsp; &nbsp; &nbsp; &nbsp;<input type="text" onChange={(e)=>{ setLname(e.target.value)}} id="lastName" name="" placeholder="Enter LastName"></input><span className="span">&nbsp; &nbsp;* {(lname.length && (!(isNaN(lname))))? "Last Name should be only alphabets": ""}</span>  </div>

            <div><input type="text" onChange={(e) => { setUname(e.target.value) }} id="userName" name="" placeholder="Enter UserName"></input><span className="span">&nbsp; &nbsp;*{(uname===" ")? "User Name can be alphanumeric value": ""}</span> <br /></div>

            <div><input type="date" onChange={(e) => { setDbirth(e.target.value) }} id="date" name="" placeholder="Select Your Date of Birth"></input><span className="span">&nbsp; &nbsp;*{(dbirth===" ")? "Select Date Of Birth": ""}</span> &nbsp; &nbsp;&nbsp; &nbsp; <input type="number" onChange={(e)=>{setAge(e.target.value)}} id="age" name="" placeholder="Enter Age"></input><span className="span"> &nbsp; &nbsp;* {(age=== " ")? " Enter Age": ""}</span><br /></div>

            <div><div><lable id="gender">Gender</lable><span className="span">&nbsp; &nbsp;*</span><div className="genderDiv"><input className="gender" type="radio" name="gender" id="Female"></input><span>Female</span><input name="gender" className="gender" type="radio" id="Male"></input><span>Male</span><br /></div></div></div>

            <div><input type="tel" id="phone"  onChange={(e)=>{ setPhone(e.target.value)}}name="phone" placeholder="Enter Mobile Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input><span className="span">&nbsp; &nbsp;*{(phone.length && (phone.length>10 || phone.length<10))?"Enter valid Phone Number": "" }</span>&nbsp;&nbsp; &nbsp; &nbsp;<input type="tel" onChange={(e)=>{ setAphone(e.target.value)}} id="alterphone" name="alterphone" placeholder="Enter Alternate Mobile Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input><span className="span">&nbsp; &nbsp; {(aphone.length && (aphone.length>10 ||aphone.length<10))? "Enter valid Phone Number" : ""}</span><br /></div>

            <div><input type="email" onChange={(e)=>{ setEmail(e.target.value)}} id="emailId" name="" placeholder="Enter EmailId"></input><span className="span">&nbsp; &nbsp;* {email.length && (!(email.includes("@") && email.includes(".")))? <div className="Alert">Enter Valid Email Id</div> : ""}</span><br /></div>

            <div><input type="password" onChange={(e)=>{ setPass(e.target.value)}} id="password" name="" placeholder="Enter Password"></input><span className="span">&nbsp; &nbsp;* {pass.length && (pass.length<8 || pass.length>15)?"Password should be 8 to 16": ""}</span>&nbsp;&nbsp; &nbsp; &nbsp;<input type="password" onChange={(e)=>{ setRpass(e.target.value)}} id="repassword" name="" placeholder="Re-Enter Password"></input><span className="span">&nbsp; &nbsp;* {!(rpass.length) || (pass===rpass)?"": "Password Mismatch "}</span><br /></div>
            <div><input type="text" onChange={(e) => { setDoorno(e.target.value) }} id="doorno" name="" placeholder="Enter Door No/ Flat No"></input><span className="span">&nbsp; &nbsp;* {(doorno === " ") ? "Please Enter Door No." : ""}</span>&nbsp; &nbsp; &nbsp; &nbsp; <input type="text" onChange={(e) => { setStreet(e.target.value) }} id="street" name="" placeholder="Enter Street Name"></input><span className="span">&nbsp; &nbsp;* {(street === " ") ? "Please Enter Street Name" : ""}</span><br /></div>

          <div><input type="text" onChange={(e)=>{ setTaluk(e.target.value)}} id="taluk" name="" placeholder="Enter Taluk"></input><span className="span">&nbsp; &nbsp;* {(taluk.length && (!(isNaN(taluk)))) ? "Please Enter Taluk" : ""}</span>&nbsp;&nbsp; &nbsp; &nbsp; <input type="text" onChange={(e)=>{ setDistrict(e.target.value)}} id="district" name="" placeholder="Enter District"></input><span className="span">&nbsp; &nbsp;* {(district.length && (!(isNaN(district)))) ? "Please District" : ""}</span><br /></div>

          <div><input type="text" onChange={(e)=>{ setLandmark(e.target.value)}} id="landmark" name="" placeholder="Enter Landmark (optional)"></input>&nbsp;&nbsp;&nbsp; &nbsp;<span className="span">{(landmark.length && (!(isNaN(landmark)))) ? "Landmark" : ""}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" onChange={(e)=>{ setState(e.target.value)}} id="state" name="" placeholder="Enter State"></input><span className="span">&nbsp; &nbsp;* {(state.length && (!(isNaN(state)))) ? "Please Enter State" : ""}</span><br /></div>

          <div><input type="number" onChange={(e)=>{ setPincode(e.target.value)}} id="pincode" name="" placeholder="Enter Pincode"></input><span className="span">&nbsp; &nbsp;* {(pincode.length && (pincode.length>6 ||pincode.length<6))?"6 digit Pin code": "" }</span>&nbsp; &nbsp; &nbsp; &nbsp; <input type="text" onChange={(e)=>{ setCountry(e.target.value)}} id="country" name="" placeholder="Country"></input><span className="span">&nbsp; &nbsp;* {(country.length && (!(isNaN(country)))) ? "Please Enter Country" : ""} </span><br /></div>

            


            <button className="button" type="submit">SUBMIT</button>
          </div>
          <div className="formLayoutRight">
          

          <img className="imageLayout" alt="" />

          <p className="paragraph"><h1>Mastermind Better.<br/> Succeed together.</h1>
          <h3> Get meaningful results with essential tools for brainstroming. Goal Setting and According</h3></p>
          </div>
          
        </div>

        
      </div>
    </div>

  );
} export default App;
