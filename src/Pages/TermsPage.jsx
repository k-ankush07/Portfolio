import React from 'react'
import Privacy from '../Components/AboutPage/Privacy'
import terms1 from "../assets/Images/terms1.svg"
import terms9 from "../assets/Images/terms9.svg"
import terms3 from "../assets/Images/terms3.svg"
import terms4 from "../assets/Images/Group.svg"
import terms5 from "../assets/Images/terms4 (2).svg"
import terms6 from "../assets/Images/terms4 (3).svg"
import Policy from '../Components/AboutPage/Policy'
function TermsPage() {
  return (
    <div className='lato-regular'>
        <Privacy colorText='Use' first_letter="Terms of" para="Please review the terms that govern your use of this website." />
     <Policy
  date="01"
  heading="Terms."
  subheading="The Agreement"
  para1='These Terms of Use ("Terms") constitute a legally binding agreement  between you and Aayush Bharti ("Owner", "we", "us"). By accessing or  using this website, you acknowledge that you have read, understood, and  agree to be bound by these Terms. If you do not agree, you are  prohibited from accessing this site.'
  

  cards={[
    {
      icon: <img src={terms1} alt="lock" className="w-10 h-10  lg:h-5 lg:w-5" />,
      heading: "Effective Date",
      para: "These terms are effective as of JAN 01, 2025 and may be amended at any time without prior notice.",
     
    },
   
  ]}
/>
 <Policy
  date="02"
  heading="Rights."
  subheading="What's Protected"
  para1='All content available on this website, including but not limited to  text, graphics, user interfaces, visual interfaces, source code, and  architecture (collectively, "Content"), is the intellectual property of  Aayush Bharti unless otherwise stated.'

  cards={[
    {
      icon: <img src={terms9} alt="lock" className="w-10 h-10  lg:h-5 lg:w-5" />,
      heading: "Restrictions on Use",
      para: "Unauthorized copying, reproduction, cloning, or redistribution of the  website's source code or visual design for commercial purposes is  strictly prohibited. This codebase is proprietary and not open source."
    },
     {
      icon: <img src={terms3} alt="lock" className="w-10 h-10  lg:h-5 lg:w-5" />,
      heading: "Limited Use",
      para: "You are granted a limited, revocable license to study specific UI  components for educational purposes or personal inspiration. You may not replicate the Site in its entirety. Any substantial usage requires a  visible dofollow backlink to https://aayushbharti.in."
    },
    
   
  ]}
/>
 <Policy
  date="03"
  heading="Limits."
  subheading="No Warranties"
   query="Legal Inquiries"
  //  lastdate="Last updated: NOV 30, 2025"

  cards={[
    {
      icon: <img src={terms4} alt="lock" className="w-10 h-10  lg:h-5 lg:w-5" />,
      heading: "User Generated Content",
      para: "Certain areas of the Site (e.g., Guestbook) may allow users to post  content. You agree not to post material that is unlawful, defamatory, or abusive. We reserve the right to remove any content at our sole  discretion and without liability."
    },
      {
      icon: <img src={terms5} alt="lock" className="w-10 h-10  lg:h-5 lg:w-5" />,
      heading: "No Warranty",
      para: 'This Site is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied,  regarding the operation of the Site or the information, content, or  materials included therein. '
    },
      {
      icon: <img src={terms5} alt="lock" className="w-10 h-10  lg:h-5 lg:w-5" />,
      heading: "Limitation of Liability",
      para: "In no event shall Aayush Bharti be liable for any damages (including,  without limitation, damages for loss of data or profit, or due to  business interruption) arising out of the use or inability to use the  materials on this website."
    }
   
  ]}
/>
    </div>
  )
}

export default TermsPage
