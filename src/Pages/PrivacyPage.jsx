import React from 'react'
import Privacy from '../Components/AboutPage/Privacy'
import Policy from '../Components/AboutPage/Policy'
import Roboto from "../assets/Images/roboto-logo 1.svg";
import newgithub from "../assets/Images/abc.svg";
import work from "../assets/Images/work.svg";
import lock from "../assets/Images/lock.svg";
import { IoMdMailOpen } from "react-icons/io";
import privacyicon1 from "../assets/Images/privacyicon (1).svg"
import privacyicon2 from "../assets/Images/privacyicon (2).svg"
import privacyicon3 from "../assets/Images/privacyicon (3).svg"
import privacyicon4 from "../assets/Images/privacyicon (4).svg"
import privacyicon5 from "../assets/Images/privacyicon (5).svg"
function PrivacyPage() {
  return (
    <div className='lato-regular'>
        <Privacy   colorText="Policy"  first_letter="Privacy" para="Your privacy is our priority." />
     <Policy
  date="01"
  heading="Collect."
  subheading="Only What's Needed"
  para1="I believe in the web being open but private. I only collect data that is strictly necessary to provide the functional aspects of this site."
  

  cards={[
    {
      icon: <img src={lock} alt="lock" className="w-5 h-5" />,
      heading: "Authentication",
      para: "When you sign in via GitHub or Google, I receive your name, email, and avatar. This establishes your public profile for the Guestbook.",
     
    },
     {
      icon: <img src={privacyicon5} alt="lock" className="w-5 h-5" />,
      heading: "Security Logs",
      para: "To prevent abuse, logs like IP address & user agent are used during sessions.",
     
    },
   
  ]}
/>
 <Policy
  date="02"
  heading="Measure."
  subheading="Aggregate, Not Track"
  para1="Understanding how you use this site helps me improve it. I use  privacy-focused tools that aggregate data rather than tracking  individual fingerprints."

  cards={[
    {
      icon: <img src={privacyicon4} alt="lock" className="w-5 h-5" />,
      heading: "Vercel Analytics",
      para: "Measures server performance, latency, and load times. Strictly technical data."
    },
     {
      icon: <img src={privacyicon3} alt="lock" className="w-5 h-5" />,
      heading: "Google Analytics",
      para: "Tracks general page views and geography. IP anonymization is enabled to protect your identity."
    },
     {
      icon: <img src={privacyicon2} alt="lock" className="w-5 h-5" />,
      heading: "PostHog",
      para: "Used for feature flagging and product usage insights (e.g., Did people use the dark mode toggle?)"
    },
   
  ]}
/>
 <Policy
  date="03"
  heading="Yours."
  subheading="Full Ownership"
   query="General Inquiries"
   lastdate="Last updated: NOV 30, 2025"

  cards={[
    {
      icon: <img src={privacyicon1} alt="lock" className="w-5 h-5" />,
      heading: "Ownership & Deletion",
      para: "You own your data. You retain the right to be forgotten at any time. If  you wish to have your account, guestbook entries, and all associated  metadata permanently deleted, you may do so without hurdles."
    }
   
  ]}
/>
    </div>
  )
}

export default PrivacyPage
