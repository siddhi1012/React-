import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
 const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60",
    intro: "I am happy with the services provided. The experience was smooth and everything worked as expected.",
    tag: "Satisfied",
    color: "blue"
  },
  {
    img: "https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=1000&auto=format&fit=crop&q=60",
    intro: "I have access to basic services, but I still need better support and more opportunities.",
    tag: "Underserved",
    color: "orange"
  },
  {
    img: "https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?w=1000&auto=format&fit=crop&q=60",
    intro: "I do not have access to proper banking facilities and financial services in my area.",
    tag: "Underbanked",
    color: "purple"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    intro: "I enjoy using digital platforms because they make my daily financial activities easier.",
    tag: "Tech Savvy",
    color: "green"
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    intro: "I am looking for affordable financial solutions that fit my monthly budget.",
    tag: "Budget Conscious",
    color: "pink"
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    intro: "I prefer traditional services and feel more comfortable with personal assistance.",
    tag: "Traditional",
    color: "yellow"
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    intro: "I want to learn more about saving money and managing my finances effectively.",
    tag: "Financial Learner",
    color: "teal"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    intro: "I frequently use online payment methods for shopping, bills, and everyday transactions.",
    tag: "Digital User",
    color: "indigo"
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
    intro: "I need flexible financial services that can support my small business and future growth.",
    tag: "Entrepreneur",
    color: "red"
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600",
    intro: "I value secure and reliable financial services that help me plan for the future.",
    tag: "Security Focused",
    color: "cyan"
  }
];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
