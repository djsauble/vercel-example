import Layout from '../../components/layout';
import {Typography, List, ListItem, Card, CardContent} from '@mui/material';


function App() {
  return (
    <Layout image='/images/header-image-1.jpeg'>
     <div className="App">
    
    
    
  
    <Typography fontSize="100px">&#128760;</Typography>
    
    <Typography gutterBottom variant="h4" fontWeight='700' component="div">
    Hey there, I'm Ash!
    </Typography>
    
    <Typography>
    &#128004; Carlisle, Pennsylvania  {'>'} &#127748; Denver, Colorado {'>'} &#129408; Portland, Maine {'>'}
    <br/>
    &#127956; Longmont (near Boulder), Colorado | &#128339; <a href="https://time.is/Longmont">Mountain Time</a>
    <br/><br/>
    </Typography>

    <Card sx={{ minWidth: 275, backgroundColor: "#F2FAF9" }}>
      <CardContent>
        <Typography variant="body2">
        Welcome to our team! I'm excited to get to know you, and in the meantime here's bit 
        about me and my working style.
        </Typography>
      </CardContent>
    </Card>
    <br/><br/><br/>

  { // Section 2
  <div className="Section 2">  
     <Typography gutterBottom variant="h5" fontWeight='700' component="div">
     The abridged version
     </Typography>
    
    <Typography>
      I grew up in central PA &#128004; (mostly{' '}<a href="https://en.wikipedia.org/wiki/Carlisle,_Pennsylvania">Carlisle</a>),
      which probably best explains why I enjoy learning about a new place through the history of its buildings, why I've chosen
      {' '}<a href="https://hobancards.com/blogs/thoughts-and-curiosities/chandler-price-and-ghost-benjamin-franklin">letterpress</a>
      {' '}as my main hobby, and why I love the researching and processing phases of UX.
      <br/><br/>
      I'm currently living in Longmont, Colorado with my beautiful family (Husband: Chris, Kids: Ferryn (6 yrs) and Emory (1 yr), Doggo: Remi).
      We like to do a lot of outdoor activities like biking and camping (and we just got a rooftop tent, so now the weekend possibilities seem endless!)
      <br/><br/>
      Prior to working at DataStax, I was a UX Designer in Finance (mainly large investment firms). Before that, I freelanced as a graphic designer 
      focused on branding, identity, and packaging design for companies like PopSockets.
      </Typography>
      <br/><br/><br/>
    </div>
    }

  { // Section 3
  <div className="Section 3"> 
    <Typography gutterBottom variant="h5" fontWeight='700' component="div">
    My working + communication style
     </Typography>

    <Typography>
    I have a strong preference for asynchronous communication methods.
    <List>
      <ListItem>
        • Slack for most needs (I check this most frequently)
      </ListItem>
      <ListItem>
        • Email for important, long-term messages (I check this less frequently)
      </ListItem>
      <ListItem>
        • In-line commenting and notes (for Figma designs and Docs feedback)
      </ListItem>
    </List>
    I try my best to get back to you as quickly as possible. If I don't respond immediately, it's probably because I'm participating in a meeting/workshop.
    I'm usually on a fairly predictable daily schedule, and I do my best to make sure I communicate in some form ahead of time if I am AFK.
    <br/><br/>
    Also—I respond well to direct, concise feedback, even if it comes off as terse. I'm prefer a no-bullshit approach to criticism, so don't worry about 
    hurting my feelings if you think something isn't working or should be framed through an alternate lens.
    </Typography>
    <br/><br/><br/>
  </div>
    }

  { // Section 4
  <div className="Section 4"> 
    <Typography gutterBottom variant="h5" fontWeight='700' component="div">
     My design philosophy
    </Typography>

    <Typography>
    Even though I prefer async communication, that doesn't negate the importance of collaboration for me. The more unique viewpoints and insights there are 
    to triangulate and solve a problem, the better results we can create for our users.
    <br/><br/>
    Visualizing patterns and organizing data is something I find myself naturally drawn to. I find this is the best way for me to really understand a concept 
    or idea.
    <br/><br/>
    I'm also a steadfast proponent of accessibility and inclusivity in design. I'm currently studying to become WAS certified to deepen my knowledge and 
    understanding of web accessibility guidelines and changes.
    </Typography>
    <br/><br/><br/>
  </div>
  }

  { // Section 5
  <div className="Section 2"> 
    <Typography gutterBottom variant="h5" fontWeight='700' component="div">
     My pitfalls
    </Typography>

    <Typography>
    I know we're all trying our best to learn and grow, but the fact is, I'm aware I fall short in areas.
    <br/>
    <List>
      <ListItem>
        • I'm stronger at written communication rather than spoken, but also prefer to get to the point. My feedback (especially in-line comments or notes) 
        can come off as terse because I try to be efficient and clear. I don't want to waste your time de-coding a paragraph when it could be achieved in a 
        handful of words.
      </ListItem>
      <ListItem>
        • I can get wordy or talk through my thoughts out loud if I'm responding in real time without a moment or two to gather my thoughts. I realize 
        this can be very confusing in the moment, so I am actively working on pausing before opening my mouth in these situations.
      </ListItem>
      <ListItem>
        • I can over-organize, and put too much detail into something at the beginning when it's unnecessary. I'm always trying to build a strong 
        foundation from day 1, but there are times where it's not appropriate and I need a teammate to tell me to check myself.
      </ListItem>
    </List>
    </Typography>
    <br/><br/><br/>
  </div>
  }

  {
    // Closing Section
    <div>
    <Card sx={{ minWidth: 275, backgroundColor: "#F2FAF9" }}>
      <CardContent>
      <h1>&#9996;</h1>
        <Typography variant="body2">
        I hope this helps you understand me a bit more, and I'm also looking forward to getting to know each other through our own conversations! 
        If you need anything, I'm totally on board to chat or answer any questions as you get ramped up.
        </Typography>
      </CardContent>
    </Card>
    <br/><br/><br/><br/>
    </div>
  }


  </div>
    </Layout>
  );
}

export default App;
