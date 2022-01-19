//import './App.css';
import Image from 'next/image'
import Layout from '../../components/layout';
import UserInfo from "../../components/UserInfo"
import { useEffect, useState } from "react";
import api from "../../utils/api";

function App() {
  const [jo, setJo] = useState({
  emoji: "",
  name: "",
  location: "",
  role: "",
  time: "",
  });

  // documentId is the id of the user data in the collection
  const documentId = "jonathan.kurten@datastax.com";

  // On page load fetch any existing user data
  useEffect(async () => {
    setJo(await api.getUser(documentId));
  }, [setJo]);  

  return (
    <Layout>
    <div className="App"> 

    <UserInfo user={jo} setUser={setJo}/>

      <header>
      <p style={{ fontSize: 100 }}>{jo.emoji}</p>
      <h1>Howzit, I'm Jonathan</h1>
        <ul>
          <li>Call me {jo.name}</li>
          <li>{jo.role} 📚</li>
          <li>{jo.location} 🗺️</li>
          <li>{jo.time} 🕑</li>
        </ul>
      </header>
      <article>
        <h2>A guide to me</h2>
        <p>If you're reading this it's likely that we work together or will be working together very soon. Welcome! I'm a product designer at DataStax where my focus is on the broad stewardship of our design system, <a href="https://www.notion.so/858c52fba56f46628d5348ee0eb4e19b">Helios</a>. While that work includes many responsibilities, much of it is working closely with the rest of the amazing <a href="https://www.notion.so/1a45bedddf534f1f8b6b7ff98cc4bf98">XD team</a> to maintain and cultivate our <a href="https://www.notion.so/6e2014a438694c879680b6d7cafad8b0">library of styles, components, and guidelines</a>.</p>
        <p>But that's just me at work! Outside of work, I'm a husband and dad of two little rebels who I love to take hiking, biking, and out on the water. We live in a part of the United States that is pretty near and dear to my heart, the Midwest, where we are lucky to have access to some of the best outdoor recreation available. If I'm not outside you could probably find me playing video games, sampling a new craft beer, or running a session of D&amp;D.</p>
        <p>My family and I moved to the United States many years ago from the country where I was born and raised, South Africa. I still consider South Africa to be a large part of my identity and what shaped who I am now, so if you've got any questions about it or are curious about what life in South Africa was like, don't hesitate to ask!</p>
      </article>
      <article>
        <h2>My work modes</h2>
        <p>As a systems designer, I am obsessed with the finer details of how the pieces all fit together. My work often places me in one of two "work modes".</p>
        <div class="feature-pink">
          <h3>🧠 Deep Work</h3>
          <p>Often times I am required to go down to a very granular level of detail as I focus on individual components or the guidelines, rules, and patterns they associate with.</p>
        </div>
        <p>This work requires deep focus to move from concept to solution. It means that I place a high value on blocks of time where I'm not too distracted (this is likely reflected in my calendar).</p>
        <div class="feature-blue">
          <h3>🗣️ Support Role</h3>
          <p>The remainder of my time is conducted in a support capacity for XD and engineering teams. I bounce around very sporadically fielding questions and providing guidance.</p>
        </div>
        <p>Regardless of what work mode I am in, I prefer to make decisions in a collaborative fashion. I will often only refine a concept to a certain level before bringing it to the team or a particular stakeholder for thoughts and feedback. Helios is a product that serves the teams within our organization. The system only remains relevant if it serves these teams and aids them in reaching their goals. It is my, and the Helios team's, responsibility to keep a finger on the pulse of this metric and make any adjustments or evolutions to the system necessary.</p>
      </article>
      <article>
        <h2>How I communicate</h2>
        <p>I'm responsive to a fault... and while I try to be better at protecting my time, I greatly appreciate coworkers that share my belief in succinct and efficient manners of communication. More often than not the best way to reach me is via Slack. I don't check email daily, so if you try to reach me there you might not hear from me immediately.</p>
        <p>I respond well when I feel that the person I am communicating with is listening intently and interested in the conversation we're having. I strive to return this focus and will generally do my best to end a conversation politely if we stray too far away from the topic we set out to discuss.</p>
        <p>There is not much that offends me and I appreciate a blunt and honest approach over sensitivity and "beating around the bush". For me personally, the most efficient route to a solution or conflict resolution is a straight line.</p>
        <p>As much as I prefer asynchronous communication I recognize and admit that sometimes a face-to-face chat is the best way to get to the bottom of something. In fact, I like to have a call with my coworkers periodically for even just social reasons. That said, if you have a desire to chat face-to-face, don't hesitate to send me a calendar invite (with an agenda or description added if possible).</p>
      </article>
      <article>
        <h2>Where I fall short</h2>
        <ul>
          <li>I've already mentioned that I am overly responsive. This means that I find myself checking in on work more often than I should and can lead to situations where I feel overly drained from work.</li>
          <li>My native language is not English and while it may be difficult to tell, I actually sometimes think in one language and speak in another. This causes me to sometimes struggle to find the right word, stumble, mispronounce, or speak way faster than I should.</li>
          <li>Related to the above, I get anxious quite easily about speaking publicly and will avoid it when possible. I've been able to train myself to be better about this during my career but the thought of presenting something still creates butterflies.</li>
          <li>I may come off as overly sarcastic. This is because I like to laugh and I don't want to take life too seriously. I recognize that this has a time and a place but might sometimes miss the mark.</li>
          <li>I say "yes" when a "no", "maybe", or "later" should have been the correct answer. I do my best to work on this but appreciate team members who recognize this and ask more than they tell.</li>
          <li>I find myself starting many projects that I don't necessarily follow through to completion. While this is sometimes ok, I don't want it to become blindly habitual and I strive to become better at recognizing the nuance in different cases.</li>
        </ul>
        <p>No one of us is a perfect being and I very much appreciate team members that are honest and vulnerable about their faults. The best experiences in my professional life have been learning from others and I promise to listen and learn from you as we work together.</p>
        <p>Here's to us 🍻</p>
      </article>
    </div> 
    </Layout>
  );
}

export default App;
