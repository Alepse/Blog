import React from 'react';
import Nav from '../components/nav';
import Thumbnail from '../assets/ThumbnailWeek1.jpg'
import pic1 from '../assets/week1.1.jpg'
import pic2 from '../assets/week1.2.jpg'
import pic3 from '../assets/week1.3.jpg'
import pic4 from '../assets/week1.4.jpg'
import pic5 from '../assets/week1.5.jpg'


const Week1 = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src={Thumbnail}
              alt="First week"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-2 text-white text-sm rounded-full mb-4">
                Week 1
              </span>
              <h1 className="text-4xl font-bold text-yellow-100 mb-2">Getting Started</h1>
              <p className="text-white">February 24, 2025</p>
            </div>
          </div>

          <article className="prose max-w-none bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-1 mb-6 leading-relaxed">
              My first week as an intern was filled with excitement and new experiences. 
              The orientation process helped me understand the company culture and meet the staffs of DOST-V.
              Each day brought new learnings and opportunities to grow professionally.
            </p>

            <div className="bg-2 rounded-xl p-6 my-8">
              <h2 className="text-2xl font-semibold text-4 mb-4">Key Learnings</h2>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-100 rounded-full mr-3"></span>
                  Company orientation and team units introductions
                </li>
                <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-100 rounded-full mr-3"></span>
                  Project tasks assigned
                </li>
                <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-100 rounded-full mr-3"></span>
                  Wireframing and protoyping
                </li>
  
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-2 p-2 max-w-3xl mx-auto">
             
              <img src={pic1} className=" rounded-lg shadow-lg object-cover w-full h-48" alt="Image 1" />
              <img src={pic2} className=" rounded-lg shadow-lg object-cover w-full h-48" alt="Image 2" />
              <img src={pic3} className="rounded-lg shadow-lg object-cover w-full h-48" alt="Image 3" />
           </div>
            
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2  max-w-3xl mx-auto'>
              <img src={pic4} className=" rounded-lg shadow-lg object-cover w-full h-64" alt="Image 4" />
              <img src={pic5} className=" rounded-lg shadow-lg object-cover w-full h-64" alt="Image 5" />
            </div>
            <h2 className="text-2xl font-semibold text-2 mt-8 mb-4"> Start Of Productivity Experiences </h2>
            <p className="text-lg text-1 mb-6">
              During the first week, we were introduced to the projects that we'll be working on and a group of 3 for each project will be assigned to us, I was assigned to be one of the frontend developer and ui/ux designer.
               We spent time understanding the flow of our assigned projects and how we'll be working on it, the assigned tasks to us is a knowledge management portal designed to facilitate easy access, sharing, and organization of knowledge resources within an organization. The platform's core concept is training material sharing, enabling employees to upload materials after specific training sessions so others can learn from them. It also provides progress tracking and restore points, allowing users to resume learning from where they left off.t.
              A whole week of my week 1 was wireframing and protoyping of the possible design of our knowledge management portal for our client.
            </p>
          </article>
          <div className="flex justify-center">
            <a href="/week2" className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-4 bg-1 hover:bg-2">
              Proceed to Week 2
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Week1;