import React, { useState, useEffect } from 'react';
import '../style/Work.css'; // Ensure the CSS file has the spinner styles

const Work = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading state
  useEffect(() => {
    // Set a timeout to remove the loader after 3 seconds (just an example)
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timeout if component unmounts
  }, []);

  return (
    <div className="workSection" id="work">
      {/* Centered title */}
      <h2 className="workTitle">Work Experience</h2>

      {loading ? (
        <div className="loaderContainer">
          {/* Custom CSS loader */}
          <div className="spinner"></div>
          <p className="loadingText">Work in Progress...</p>
        </div>
      ) : (
        <div className="content">
          <h1>Your Work Content Goes Here</h1>
          <p>This is where you will display your actual work content after loading.</p>
        </div>
      )}
    </div>
  );
};

export default Work;
