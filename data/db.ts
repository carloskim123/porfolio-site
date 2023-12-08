
import tiktok from './icons/tiktok.svg';

import instagram from './icons/instagram.svg';

import twitter from './icons/twitter.svg';

import github from './icons/github.svg';

import waving_hand_url from './icons/waving_hand.svg';


export const profile_pic: string = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";


export const waving_hand: string = waving_hand_url;


export const dev_email = "kimaccess123@gmail.com";

export const portfolio_url = "https://kimk.vercel.app/";



export const links: Link[] = [
    {
        url: "https://github.com/carloskim123",
        title: "Github",
        icon: github
    },
    {
        url: "https://twitter.com/KimKimkirui7",
        title: "Twitter",
        icon: twitter
    },
    {
        url: "https://www.instagram.com/carloskirui541/",
        title: "Instagram",
        icon: instagram
    },
    {
        url: "https://www.tiktok.com/@carloskim456",
        title: "Tiktok",
        icon: tiktok
    },
];


class DirectLinks {

    github = "https://github.com/carloskim123";

    twitter = "https://twitter.com/KimKimkirui7";

    tiktok = "https://www.tiktok.com/@carloskim456";

    instagram = "https://www.instagram.com/carloskirui541/";
}


export const dr: DirectLinks = new DirectLinks();


export const pg_lk: Link[] = [
    {
        url: portfolio_url,
        pathname: "Carlos Kirui"
    },
    {
        url: dr.github,
        pathname: "Github"
    },
    {
        url: dr.twitter,
        pathname: "Twitter"
    }, {
        url: dr.tiktok,
        pathname: "Tiktok"
    }, {
        url: dr.instagram,
        pathname: "Instagram"
    },
];

export const routes: Link[] = [
    { path: "/", pathname: "Home" },
    { path: "/projects", pathname: "Projects" },
    { path: "/about", pathname: "About" },
    { path: "/contact", pathname: "Contact" },
];


export const accordionContent: Accordion[] = [
    {
        title: "Why I chose to program over everything else!",
        content: "I chose to program because it combines my love of problem-solving and creativity. There's something so satisfying about taking a complex problem and breaking it down into manageable pieces. And with programming, the possibilities are endless - I can create anything I can imagine."
    },
    {
        title: "Did I make the right decision?",
        content: "I think that programming is an excellent choice for many reasons. First and foremost, it's a field that's constantly evolving and growing, so there's always something new to learn. It's also a field that requires a lot of creativity and problem-solving skills, which are great skills to have in any profession. And of course, it can be incredibly rewarding to see your code come to life and solve real-world problems."
    },
    {
        title: "My favorite programming languages",
        content: "My favorite programming languages are Java, Golang, Javascript, and Python. I like JavaScript because it's a versatile language that can be used for both front-end and back-end development. I also like Python because it's a relatively easy language to learn and use, and it has a large community of developers who create and maintain a wide range of libraries and tools."
    },
    {
        title: "The biggest challenge I've faced as a programmer",
        content: "The biggest challenge I've faced as a programmer is debugging code. When code doesn't work as expected, it can be difficult to track down and fix the bugs. This can be a frustrating process, especially for complex codebases. However, over time I've learned some tips for debugging code more effectively, such as using good coding practices, using a debugger, and asking for help from other programmers."
    }
];


export const colorsArray = ["#fefae0", "#e9ecef", "#edf6f9", "#fdffb6", "#f4f1de", "#f0f3bd"];


export const bannerImage = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG8lMjBzb21ldGhpbmclMjBncmVhdHxlbnwwfHwwfHx8MA%3D%3D"


export const aboutMes = [
    {
        param: "Greetings! 👋🏾 I'm Carlos Kirui, an enthusiastic problem solver in software development. Passionate about coding, I create solutions that make a difference. 💻🚀",
    },
    {
        param: "Hey there! 👋🏾 Carlos Kirui here, a web development maestro turning ideas into digital reality. With an eye for detail and a love for clean code, I make the web better. 🌐✨",
    },
    {
        param: "Salut! 👋🏾 I'm Carlos Kirui, a tech aficionado and coding virtuoso. With a love for innovation, I'm geared up to elevate web development. 💡💻",
    },
    {
        param: "Hi, I'm Carlos Kirui! 👋🏾 A dedicated developer with elegant solutions and a love for learning. Join me in creating something extraordinary. 🌟🚀",
    },
    {
        param: "Hola! 👋🏾 Carlos Kirui here—a passionate web developer with curiosity for emerging technologies. Let's build digital wonders together. 💻✨",
    }
];

// Define styles for the loader overlay
export const loaderOverlayStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    zIndex: 9999,
};

// Define styles for the loader
export const loaderStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30vh",
};

export const isFirstTime = localStorage.getItem("firsTimer");
export const todaysGreetingSent = localStorage.getItem("todaysGreetingSent")