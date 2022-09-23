import api from "./images/api.svg";
import budget from "./images/budget.svg";
import board from "./images/board.svg";
import bank from "./images/bank.svg";

import confetti from "./images/confetti.jpg";
import currency  from "./images/currency.jpg";
import plane from "./images/plane.jpg";
import restaurant from "./images/restaurant.jpg";

import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg"
import twitter from "./images/twitter.svg";
import youtube from "./images/youtube.svg";
import pinterest from "./images/pinterest.svg";






export const navLinks = [
      {
         id:1,
         title: "Home"
      },
      {
        id:2,
        title: "About"
     },
     {
        id:3,
        title: "Contact"
     },
     {
        id:4,
        title: "Blog"
     },
     {
        id:5,
        title: "Careers"
     },
];

export const services = [
     {
      title:"Simple Budgeting",
      img: budget,
      alt:"budget",
      text:`Our modern web and mobile applications allow you to keep track of your finances
      wherever you are in the world.`,
     },
     {
      title:"Online Banking",
      img:bank,
      alt:"banking",
      text:`See exactly where your money goes each month. Receive notifications when you’re
      close to hitting your limits`,
  
     },
     {
      title:"Fast Onboarding",
      img: board,
      alt:"Onboarding",
      text:`We don’t do branches. Open your account in minutes online and start taking control
      of your finances right away.`,
    
     },
     {
      title:"Open API",
      img: api,
      alt:"API",
      text:`Manage your savings, investments, pension, and much more from one account.Tracking
      your money has never been easier.`,
     },

]

export const article = [
   {
      author:"By Claire Robinson",
      title:"Receive money in any currency with no fees",
      text:`The world is getting smaller and we’re becoming more mobile. So why should you be
      forced to only receive money in a single`,
      img:confetti,
      alt:"confetti",
   },
   {
      author:"By Claire Robinson",
      title:"Treat yourself without worrying about money",
      text:`Our simple budgeting feature allows you to separate out your spending and set
      realistic limits each month. That means you `,
      img:currency,
      alt:"currency",
   },
   {
      author:"By Wilson Hutton",
      title:"Take your Easybank card wherever you go",
      text:`We want you to enjoy your travels. This is why we don’t charge any fees on purchases
      while you’re abroad. We’ll even show you `,
      img:plane,
      alt:"plane",
   },
   {
      author:"By Claire Robinson",
      title:"Our invite-only Beta accounts are now live!",
      text:` After a lot of hard work by the whole team, we’re excited to launch our closed beta.
      It’s easy to request an invite through the site`,
      img:restaurant,
      alt:"restaurant",
   }

]

export const socialIcon  = [
     {
       img:facebook,
       alt:"facebook"
     },
     {
      img:instagram,
      alt:"instagram"
    },
    {
      img:twitter,
      alt:"twitter"
    },
    {
      img:youtube,
      alt:"youtube"
    },
    {
      img:pinterest,
      alt:"pinterest"
    }
]

export const socialLinks1 = [
  {
    title:"About us"
  },
  {
   title:"Contact"
  },
  {
    title:"Blog"
  }
];

export const socialLinks2 = [
   {
      title:"Careers"
    },
    {
      title:"Support"
    },
    {
      title:"Privacy Policy"
    },
]