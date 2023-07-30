import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  //  console.log(user)

  const handleLogout = async () => {
    await auth.signOut();

    // navigate("/chat");
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      navigate.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "Project ID": "5ef0247d-5a96-4e91-8f3a-6868cbe2645c",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.displayName);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "7a334164-1fba-4df0-a173-dab576785491",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);
  if (!user || loading) return "loading......";
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">StylesChat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="5ef0247d-5a96-4e91-8f3a-6868cbe2645c"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
