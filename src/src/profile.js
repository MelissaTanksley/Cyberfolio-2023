// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on the landing display
const header = {
  name: "Melissa Tanksley",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "A recent cyber security bootcamp graduate, knowing a variety of network security componants. Studying for the CompTIA Sec+ exam. Two years of experience as a Web Developer. An excellent self-starter, problem solver, and team player. Solid technical, analytical, and communication skills. Passionate and fast learner with the ability to grasp new threats, concepts, and technologies. Every morning, I wake up with a cup of coffee and read about the latest cyber attacks in the news...with my chickens. This portfolio was made by me using JS and Node. Below are some of my skills and knowledge: ",
 

};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Scripting"
  },
  {
    name: "Malware and other Cyber Attacks"
  },
  {
    name: "Controls and Framework"
  },
  {
    name: "Intrusion Detection"
  },
  {
    name: "Networking"
  },

  {
    name: "Incident Response"
  },
  {
    name: "Cloud"
  },
  {
    name: "OS - Win, Linux, Mac"
  },
  {
    name: "Dev Ops"
  },
  {
    name: "Threat Knowledge"
  },
  {
    name: "Regulatory Guidelines"
  },
  {
    name: "Communication"
  },

  {
    name: "Collaboration"
  },
  {
    name: "Risk Management"
  },
  {
    name: "Adaptability"
  },
  {
    name: "Attention to Detail"
  },
  {
    name: "Critical Thinking"
  },
  {
    name: "Ghidra"
  },
 
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project3
    id: "project1",
    name: "BeeDev Services",
    skills: ["Cyber Team Lead. Collaboration. Gitflow. Contribution"],
    url: "https://helper.beedev-services.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "SQL Injection Scanner",
    skills: ["JavaScript Node. SQL"],
    url: "https://github.com/MelissaTanksley/SQL_Injection-Scanner.git",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project3",
    name: "Node-API",
    skills: ["Javascript. Node. Collaboration. Gitflow"],
    url: "https://github.com/web35-with-node/node-api1-project.git",
  },
  
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Cyber-Chickens",
    url: "https://i.ytimg.com/vi/c-e1Y_-Cs8U/maxresdefault.jpg",
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc2",
    name: "Golf",
    url: "",
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc3",
    name: "Tennis",
    url: "https://tse4.mm.bing.net/th?id=OIP.ugcoQKZvPLBjp_M6KfwYfQHaIY&pid=Api&P=0&h=180",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "I would love for you to reach out to hire me, collaborate with me, or feed some chickens together over coffee.                    Click below to see resume",
  copyright: "Melissa Tanksley",
  contactUrl: "https://www.linkedin.com/in/melissa-tanksley-698326191/",
};

const social = {
  github: "https://github.com/MelissaTanksley",
  facebook: "https://www.facebook.com/melissa.tanksley/",
  linkedin: "https://www.linkedin.com/in/melissa-tanksley-698326191/",
  resume: "https://docs.google.com/document/d/1E6Ze9xi5tXBPojQufmXMKbAFSxRsvdm05IAlqmEKZz4/edit?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};

