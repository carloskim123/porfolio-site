

import instagram from './icons/instagram.svg';

import facebook from './icons/facebook.svg';

import github from './icons/github.svg';

import waving_hand_url from './icons/waving_hand.svg';


export const profile_pic: string = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
export const updated_profile_pic = "https://avatars.githubusercontent.com/u/115598773?v=4"
export const waving_hand: string = waving_hand_url;


export const dev_email = "kimaccess123@gmail.com";

export const portfolio_url = "https://kimk.vercel.app/";

class DirectLinks {


    github = "https://github.com/carloskim123";

    facebook = "https://www.facebook.com/profile.php?id=100089910465149";

    instagram = "https://www.instagram.com/somedev99/";
}


export const dr: DirectLinks = new DirectLinks();


export const links: Link[] = [
    {
        url: dr.github,
        title: "Github",
        icon: github
    },
    {
        url: dr.facebook,
        title: "Facebook",
        icon: facebook
    },
    {
        url: dr.instagram,
        title: "Instagram",
        icon: instagram
    }
];





export const pg_lk: Link[] = [

    {
        url: dr.github,
        pathname: "Github"
    },
    {
        url: dr.facebook,
        pathname: "Facebook"
    }, {
        url: dr.instagram,
        pathname: "Instagram"
    },
];

export const routes: Link[] = [
    { path: "/", pathname: "Home" },
    { path: "/projects", pathname: "Projects" },
    { path: "/learning-resources-used", pathname: "Learning Resources" },
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
        param: "Hi there! 👋🏾 I'm Carlos Kirui, your friendly web guy. I enjoy coding and creating websites that look great and work smoothly. Let's chat and see how we can bring your ideas to life! 🌐✨"
    },
    {
        param: "Hey everyone! 👋🏾 Carlos Kirui here, just a guy who loves playing around with code and making websites. Got a project in mind? Let's make it happen! 💡💻"
    },
    {
        param: "Hi, I'm Carlos Kirui! 👋🏾 I like building websites and making them look good. Let's work together and create something cool! 🌟🚀"
    }
    // {
    //     // param: "Yo! 👋🏾 Carlos Kirui here, a web developer ready to help you out. Let's build something awesome for the web! 💻✨"
    // }
];


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

export const loaderStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30vh",
};

export const isFirstTime = localStorage.getItem("firsTimer");
export const todaysGreetingSent = localStorage.getItem("todaysGreetingSent")


export const resources = [
    {
        resource_url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        resource_title: 'The Complete React Guide',
        resource_creator: 'Maximilian Schwarzmüller',
        resource_type: 'Online Course',
        resource_level: 'Intermediate',
        resource_description:
            'Learn React.js from scratch with this comprehensive course covering React basics, advanced topics like Redux, React Router, and more.',
        resource_duration: '40 hours',
        resource_language: 'English',
        resource_rating: '4.7',
        resource_reviews: '140000',
        resource_price: '$12.99',
        resource_certification: "false"
    },
    {
        resource_url: 'https://www.pluralsight.com/paths/react',
        resource_title: 'React Learning Path',
        resource_creator: 'Various Instructors',
        resource_type: 'Online Course',
        resource_level: 'Intermediate to Advanced',
        resource_description:
            'Pluralsight offers a comprehensive learning path for React, covering everything from the basics to advanced topics like Redux, GraphQL, and more.........',
        resource_duration: '30+ hours',
        resource_language: 'English',
        resource_rating: '4.5',
        resource_reviews: '25000',
        resource_price: 'Membership Subscription',
        resource_certification: "true",
        resource_certification_title: 'Pluralsight Certificate',
        resource_certification_provider: 'Pluralsight'
    },

    {
        resource_url: 'https://www.udemy.com/course/html-css-the-complete-guide/',
        resource_title: 'Complete HTML and CSS Guide',
        resource_creator: 'Jonas Schmedtmann',
        resource_type: 'Online Course',
        resource_level: 'Beginner to Advanced',
        resource_description:
            'This course covers HTML and CSS from scratch, including modern techniques like Flexbox and CSS Grid and more.',
        resource_duration: '28 hours',
        resource_language: 'English',
        resource_rating: '4.7',
        resource_reviews: '220000',
        resource_price: '$12.99',
        resource_certification: "true",
        resource_certification_title: 'Certificate of Completion',
        resource_certification_provider: 'Udemy'
    },
    {
        resource_url: 'https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/?couponCode=LETSLEARNNOWPP',
        resource_title: 'Selenium WebDriver with Java',
        resource_creator: 'Rahul Shetty',
        resource_type: 'Online Course',
        resource_level: 'Intermediate to Advanced',
        resource_description:
            'Learn Selenium WebDriver with Java for automation testing of web applications, including frameworks like TestNG, JUnit, and Cucumber.',
        resource_duration: '35 hours',
        resource_language: 'English',
        resource_rating: '4.6',
        resource_reviews: '50000',
        resource_price: '$12.99',
        resource_certification: "true",
        resource_certification_title: 'Certificate of Completion',
        resource_certification_provider: 'Udemy'
    },
    {
        resource_url: 'https://www.udemy.com/course/javascript-beginners-complete-tutorial/',
        resource_title: 'JavaScript for Beginners',
        resource_creator: 'John Smilga',
        resource_type: 'Online Course',
        resource_level: 'Beginner',
        resource_description:
            'This course teaches JavaScript fundamentals for beginners, including variables, data types, functions, and DOM manipulation.',
        resource_duration: '15 hours',
        resource_language: 'English',
        resource_rating: '4.8',
        resource_reviews: '180000',
        resource_price: '$12.99',
        resource_certification: "true",
        resource_certification_title: 'Certificate of Completion',
        resource_certification_provider: 'Udemy'
    },
];
