import React, { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handelKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleSelect = async () => {
    //combinID는 두 유저의 uid를 합친 값이다.
    //합친 값이 같다면 같은 채팅방이다.
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      //채팅방이 있는지 확인한다.
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        //컬렉션에 채팅방이 없다면 새로 생성한다.
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // 두 유저의 채팅방 목록에 채팅방을 추가한다.
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          //updateDoc는 setDoc과 달리 기존 데이터를 유지하고 새로운 데이터를 추가한다.
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          //firebase의 timestamp를 사용한다.
          [combinedId + ".date"]: serverTimestamp(),
        });
        console.log("upate완료");

        //
        await updateDoc(doc(db, "userChats", user.uid), {
          //updateDoc는 setDoc과 달리 기존 데이터를 유지하고 새로운 데이터를 추가한다.
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          //firebase의 timestamp를 사용한다.
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="search a user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handelKey}
        />
      </div>
      {err && <span>user not found</span>}

      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};
