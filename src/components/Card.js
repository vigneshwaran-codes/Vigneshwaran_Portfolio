import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Todo from "../assets/todolist.jpg";
import FoodCart from "../assets/foodcart.png";
import Calculator from "../assets/calculator.jpg";
import PricingCard from "../assets/pricingcard.jpg";
import { SiGithub } from "react-icons/si";
import {MdCallMade} from 'react-icons/md'
import '../css/Projects.css'

const githubIcon = <SiGithub />;
const projectContent = [
  {
    id: 1,
    img: Todo,
    imgText: "Blog project",
    name: "Blog App",
    icon: githubIcon,
    link: 'https://poster-blog.netlify.app',
    desc: "A blog, creator can share the content with like minded people",
  },
  {
    id: 2,
    img: PricingCard,
    imgText: "assign-mentor project",
    name: "Assign Mentor",
    icon: githubIcon,
    link: 'https://assign-mentors-students.netlify.app',
    desc: "this app which can assign and change mentor for student",
  },
  {
    id: 3,
    img: Calculator,
    imgText: "recipe project",
    name: "Recipe App",
    icon: githubIcon,
    link: 'https://url-shortener-portal.netlify.app/',
    desc: "app which display Recipe with ingredients",
  },
  {
    id: 4,
    img: FoodCart,
    imgText: "password-reset project",
    name: "Password Reset",
    icon: githubIcon,
    link: 'https://passcode-reset.netlify.app/',
    desc: "we can reset password with this application",
  },
];

export default function Cards () {
  const [projects, setProjects] = useState(projectContent);
   console.log(setProjects)
  return (
    <div>
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
}

function Card({ img, imgText, name, desc, link }) {
  return (
    <div className="project">
      <div className='cards'>
        <div className='card card1'>
              <div className='container'>
                <img src={img} alt={imgText} />
              </div>
              <div className='details'>
              <h1>{name}</h1>
              <p>{desc}</p>
              <a href={link} target='_blank' rel='noopener noreferrer'>{link}{<MdCallMade/>}</a>
              </div>
        </div>
      </div>
    </div>
  );
}
