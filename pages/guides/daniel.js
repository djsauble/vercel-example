import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import UserInfo from "../../components/UserInfo";
import api from "../../utils/api";

export default function Guide() {
  const documentId = "danielthemaniel@yahoo.com";
  const [daniel, setDaniel] = useState({});

  useEffect(async () => {
    setDaniel(await api.getUser(documentId));
  }, [setDaniel]);

  return (
    <Layout image="/images/spacex.jpg">

      {/* <p>🌎 Portland, Oregon, USA &middot; 🕑 <a href="https://time.is/Portland,_Oregon">Pacific Time</a></p> */}

      <UserInfo user={daniel} setUser={setDaniel} documentId={documentId} />

      <p>
        <em>
          If you’re reading this, we either currently work together or will be
          soon. I’m super excited to work with you. If you want to learn a
          little bit more about me and my working style, keep reading!
        </em>
      </p>

      <h2>Who am I? 👀</h2>

      <p>
        I’m a product designer on the Astra Streaming team. I have first-hand
        experience with a wide range of topics, including: UX design, user
        research, product management, software development, and machine
        learning. Startups and small teams are my happy place.
      </p>

      <h2>Communication 🙊</h2>

      <p>
        I strongly prefer async (Slack, email) to sync (in person meetings,
        Zoom, phone) communication, with a few exceptions.
      </p>

      <ol>
        <li>Meeting people (you!) for the first time</li>
        <li>Workshops and team building activities</li>
        <li>User research sessions</li>
      </ol>

      <p>
        For everything else, Slack and 
        <a href="mailto:daniel.sauble@datastax.com">email</a> are the best way
        to communicate with me. I’m zealous about using “do not disturb”, so
        don’t worry about bothering me when I’m off work or sleeping. I’m also
        not active on social media, so don’t send any DMs or mentions there
        because I won’t see them.
      </p>

      <h2>Design Philosophy 🎓</h2>

      <p>
        I love products that grant superpowers to their users. And specifically,
        I love solving technical, business-shaped problems for people who make
        their living by the tools that solve those problems. To that end, I get
        most excited about tools that are quantum leaps forward over tools that
        are incremental improvements to the state-of-the-art.
      </p>

      <p>
        I spend most of my time and energy exploring roughly hewn concepts that
        show incredible promise. I’m fond of writing and low-fidelity design. I
        tend to move to high-fidelity only once I’m 90% sure that we’re going
        down the right path. And you can be pretty sure that users have seen it
        before then. I prefer to ship “good enough” experiences early and often,
        gradually moving towards perfection over the course of dozens of
        releases.
      </p>

      <p>
        You won’t find me throwing implausible design artifacts over a wall. I
        love cross-functional teams that work closely together for the entire
        product development lifecycle. I work best when integrated into your
        existing toolset (e.g. Jira, GitHub, VSCode) and process (be it Scrum,
        Kanban, or XP).
      </p>

      <h2>Of Forests and Trees 🎄</h2>

      <p>
        I’m an enormous fan of keeping details and context stuck together. In a
        design review or demo, I try to connect everything to the problem we’re
        trying to solve and the business goal to which it relates. If I think
        everyone present is already familiar with the problems and business
        goals, I’ll give the context anyway because repetition is important.
      </p>

      <p>
        The reverse is also important. Context by itself isn’t actionable, so if
        I see that we’re spending too long on theory, I’ll throw out some
        concrete examples of how we might take action. These examples may be
        wrong, but I like creating a shared baseline that people smarter than me
        can poke at, shape into a better plan, or discard entirely in favor of a
        better idea.
      </p>

      <p>
        Sell me on a mission or vision, and I’ll eagerly figure out how to
        execute and deliver on that vision. Give me a contextless laundry list
        of tasks that need to be executed, and I’ll quickly lose interest and
        move on to something else.
      </p>

      <h2>Networking 🔗</h2>

      <p>
        I’m an introvert with limited energy for social interaction, so I’m
        focused about where I spend that energy. You’ll find that I’m generous
        to a fault with people I know and work with. I’m also quite eager to
        meet with other folks who want to share industry knowledge, explore
        opportunities to work or collaborate with me, or are just new to the
        industry in general.
      </p>

      <p>
        In other cases, you may find that I’m slow to respond or ignore requests
        entirely. Consider reshaping how your request can fit into one of the
        categories above, or show me that you’ve done the legwork and
        personalized your request to me. I also admire persistence, so if you
        haven’t heard from me for a month or two since your last email, try
        again!
      </p>

      <p>
        (Also, remember that I’m inactive on social media, so it could be that
        you’re just not using the right channel to contact me! Use Slack or
        email.)
      </p>

      <h2>Leadership Style ☝️</h2>

      <p>
        I do not have direct reports, but I love to help people develop in their
        careers and do their best work. I may ask to pair with you on a project,
        or get your feedback on something I’m working on. Always feel free to
        tell me ‘no’, or to direct me to somebody else who is a better fit.
      </p>

      <p>
        I’m not a seniority-obsessed designer, and am generally of the opinion
        that 
        <a href="https://randsinrepose.com/archives/titles-are-toxic/">
          titles are toxic
        </a>
        . I promise not to talk down to you just because you’re new to design,
        or to tell you what you want to hear just because you’re more senior
        than me. In turn, I expect honest feedback. Point out flaws in my work
        and I’ll recognize that you’re making me better as a designer.
      </p>

      <h2>Common Pitfalls 😳</h2>

      <p>
        For every strength, there’s a weakness. Here are some areas where I
        struggle currently. I’ll look to you to help me be better!
      </p>

      <ul>
        <li>
          I’m not always reachable**, so sometimes I miss important requests.
          Help me by over-communicating and don’t assume that I’ve seen
          something unless I’ve actually responded to it.
        </li>
        <li>
          I sometimes have difficulty getting things dialed-in prior to
          release**, due to my obsession with low-fidelity design and
          prototyping. Help me by pointing out when the design isn’t up to our
          quality standards.
        </li>
        <li>
          I can be a bit overconfident** and occasionally talk out of my ass.
          Push back when something doesn’t sound right or lacks data.
        </li>
        <li>
          I tend to overcommit and set my spam filters high as a result.** When
          you have a time sensitive request, give me a timeline and
          justification so I can prioritize my workload to meet your timeline if
          possible.
        </li>
        <li>
          I often try to do everything myself** because of all the hats I’ve
          worn in my career. If you see me doing your job or not properly
          leveraging your expertise, call me out on that!
        </li>
      </ul>
    </Layout>
  );
}
