import React, { useState } from 'react'
import '../css/Skills.css'
import { SiMongodb, SiExpress, SiMysql, SiRedux, SiMaterialui, SiPostman } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNode, FaGitAlt, FaBootstrap, FaCss3, FaFigma } from 'react-icons/fa'
import { DiPython } from 'react-icons/di'

export default function Skills () {
  const skillList = [
    {
      name: 'HTML5',
      icon: <AiFillHtml5 />
    },
    {
      name: 'CSS3',
      icon: <FaCss3 />
    },
    {
      name: 'JavaScipt',
      icon: <IoLogoJavascript />
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap />
    },
    {
      name: 'React',
      icon: <FaReact />
    },
    {
      name: 'Material UI',
      icon: <SiMaterialui />
    },
    {
      name: 'Redux',
      icon: <SiRedux />
    },
    {
      name: 'MySQL',
      icon: <SiMysql />
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />
    },
    {
      name: 'Node.js',
      icon: <FaNode />
    },
    {
      name: 'Express.js',
      icon: <SiExpress />
    },
    {
      name: 'Postman',
      icon: <SiPostman />
    },
    {
      name: 'Git',
      icon: <FaGitAlt />
    },
    {
      name: 'Python',
      icon: <DiPython />
    },
    {
      name: 'Figma',
      icon: <FaFigma />
    }
  ]

  // eslint-disable-next-line
  const [skills, setSkills] = useState(skillList)

  return (
    <div className='about_skills'>
      <div>
        <h1 className='about_skills_title'>Skills</h1>
      </div>
      <div>
        <ul className='about_tools'>
          <li className='about_tools_list'>
            <h1 className='about_tools_heading'>Technologies and Tools I use</h1>
            {
              skills.map((skill, index) => {
                return (
                  <p className='skill' key={index}>{skill.icon} {' '} {skill.name}</p>
                )
              })
            }
          </li>
        </ul>
      </div>
    </div>
  )
}
