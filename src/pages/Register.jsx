import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // 이미지 파일의 경로를 설정합니다.
      const storageRef = ref(storage, displayName);
      // 파일을 업로드하고 업로드 작업을 시작합니다.
      const uploadTask = uploadBytesResumable(storageRef, file);

      // 세 개의 observer를 등록합니다:
      // 1. 'state_changed' observer: 업로드 상태가 변경될 때마다 호출됩니다.
      // 2. Error observer: 업로드가 실패한 경우 호출됩니다.
      // 3. Completion observer: 업로드가 성공적으로 완료된 경우 호출됩니다.
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          // 업로드가 성공적으로 완료된 경우 다운로드 URL을 가져옵니다.
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // firestore에 저장하는 함수
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // userChats에 저장하는 함수
            await setDoc(doc(db, "userChats", res.user.uid), {});
            alert("회원가입이 완료되었습니다.");
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Firebase Chat</span>
        <span className="title"> Register</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Label htmlFor="file" id="file">
            <AddPhotoAlternateIcon style={{ fontSize: "40px" }} />
            <span>Add An Avatar</span>
          </Label>

          <button>SignUp</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          you do have an account?<Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
}

const Label = styled.label`
  display: flex;
  align-items: center;
  color: #a7bcff;
  cursor: pointer;
`;
