import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import UserInfo from "../../components/UserInfo";
import api from "../../utils/api";

export default function Guide() {
  const documentId = "cole.goldsmith@datastax.com";
  const [cole, setCole] = useState({
    emoji: "😀",
    name: "Cole",
    location: "Eau Claire, WI",
    role: "Wizard",
  });

  // On page load fetch any existing user data
  useEffect(async () => {
    setCole(await api.getUser(documentId));
  }, [setCole]);

  return (
    <Layout image="/images/spacex.jpg">
      <p>{cole.emoji}</p>
      <p>{cole.name}</p>
      <p>{cole.location}</p>
      <p>{cole.role}</p>

      <UserInfo user={cole} setUser={setCole} documentId={documentId} />
      <p>
        <em>
          If you’re reading this, we either currently work together or will be
          soon. I’m super excited to work with you. If you want to learn a
          little bit more about me and my working style, keep reading!
        </em>
      </p>

      <h2>Who am I? 👀</h2>

      <p>I'm Cole</p>
    </Layout>
  );
}
