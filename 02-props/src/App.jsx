import React from 'react'
import Card from "./components/card"
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];



  return (
    <div className="parent">
      {
        jobOpenings.map((ele,index) => {
          return <div key={index}>
            <Card companyName={ele.companyName} pay={ele.pay} brandLogo={ele.brandLogo}  datePosted={ele. datePosted} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} location={ele.location} />
          </div>
        }) 
      }
    </div>
  )
}

export default App
