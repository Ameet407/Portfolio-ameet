import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      
      <p className="text-s">
        <span className="font-semibold"> Thank you for visiting my portfolio! I appreciate your time and interest in my work.  
        Feel free to connect with me—let's build something amazing together! </span> 
      </p>
      <small className="mb-2 block text-xs">
      © {new Date().getFullYear()} Ameet Kumar Mishra. All rights reserved.
      </small>
    </footer>
  );
}
