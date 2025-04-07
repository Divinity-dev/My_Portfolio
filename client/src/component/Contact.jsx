import {useState,  useRef} from 'react'
import emailjs from '@emailjs/browser';
import phone from "/images/phone.png"
import mail from "/images/Vector3.png"
import Location from "/images/Location.png"

const Contact = () => {

  const form = useRef();

 
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
      };
    
      const validate = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = "Enter a valid email address.";
        }
       
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          emailjs
            .sendForm('service_s3k4vfh', 'template_jk9zltd', form.current, {
              publicKey: 'A-FjYTOv3e8WT3K_n',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                alert("Message sent successfully!");
                // Clear form after successful submission
                setFormData({
                  fullName: "",
                  email: "",
                  
                  message: "",
                });
                setErrors({});
              },
              (error) => {
                console.log('FAILED...', error.text);
                alert("Failed to send message. Please try again.");
              }
            );
        } else {
          setErrors(validationErrors);
        }
      };
      
  return (
    <div className='py-10 px-20 bg-indigo-950 flex flex-col  items-center'>
      <h2 className='text-center text-white text-3xl mb-4'>Contact me </h2>
      <div className='flex flex-col md:flex-row justify-between items-center'>
      {/* Left side */}
      <div
        className="flex-1 flex flex-col px-6 sm:px-10 md:px-14 py-10"
      >
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">Get in Touch </h2>
        <p className="text-white mb-6">
        Let’s Build Something Great Together.<br/>
Looking for a developer who can deliver seamless, scalable, and user-friendly web applications? I’m here to help bring your ideas to life.
Get in touch — I’d love to hear from you!
        </p>

        <div className="flex flex-col gap-6">
          {[
            { icon: phone, label: "Phone Number", value: "+2348069715964" },
            { icon: mail, label: "Email Address", value: "divine_asiriuwa@yahoo.com.com" },
            { icon: Location, label: "Location", value: "7 uwa street off I.C.E. road, Benin city, Edo state, Nigeria" },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="bg-primaryOrange w-10 h-10 rounded-full flex justify-center items-center">
                <img src={item.icon} alt="" className="w-5" />
              </div>
              <div>
                <span className="font-medium text-base text-white">{item.label}</span>
                <h3 className="text-gray-600 text-sm">{item.value}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Right side */}
      <form ref={form} className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="h-12 border border-white bg-transparent px-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primaryOrange transition-all duration-200 rounded-md w-full"
            />
            {errors.fullName && <p className="text-red-300 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="h-12 border border-white bg-transparent px-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primaryOrange transition-all duration-200 rounded-md w-full"
            />
            {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="border border-white bg-transparent px-4 pt-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primaryOrange transition-all duration-200 rounded-md resize-none w-full"
            ></textarea>
            {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="py-3 px-6 bg-btyellow text-black font-semibold rounded-md"
          >
            Submit
          </button>
        </form>
        </div>
    </div>
  )
}

export default Contact
