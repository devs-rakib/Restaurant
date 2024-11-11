import React from 'react'
import { useState } from "react";
import Button from './Button';
import { MdPhoneInTalk } from "react-icons/md";


function Tabs() {

        const [activeTab, setActiveTab] = useState('about')
    
        const tabContent = {
          about: {
            title: "Exceptional culinary experience and delicious food",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam exercitation.",
            phoneNumber: "+0898934898",
            btnText: "About More"
          },
          experience: {
            title: "OUR CULINARY JOURNEY AND EXPERTISE",
            description: " Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
            phoneNumber: "+0864334898",
            btnText: "About More"
          },
          contact: {
            title: "GET IN TOUCH WITH OUR CULINARY TEAM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt exercitation.",
            phoneNumber: "+08567734898",
            btnText: "About More"
          }
        }
        return(
            <>
             <div className="tab-content">
                {/* Navigation */}
                <nav className="mb-40">
                    <div className="tab-list">
                    {['about', 'experience', 'contact'].map((tab) => (
                        <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 ${
                            activeTab === tab
                            ? "active-tabs"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                        >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                    </div>
                </nav>
                    <div className="tab-item">
                        <h2 className="entry-title mb-30">
                            {tabContent[activeTab].title}
                        </h2>
                        <p className="text mb-30">
                            {tabContent[activeTab].description}
                        </p>
                        <div className="tab-number d-flex justify-content-start align-items-center">
                            <Button lable='About More'/>
                            <a href="tel:+4733378901">
                                <MdPhoneInTalk className='phone-icon' />
                                <span className="">{tabContent[activeTab].phoneNumber}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Tabs