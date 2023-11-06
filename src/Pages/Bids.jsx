import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { Link } from 'react-router-dom';

const Bids = () => {
  const [bids, setBids] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Use async/await to fetch the data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7000/bid');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Filter the data where bidderEmail is "shehabchowdhury10@gmail.com"
        const filteredBids = data.filter((bid) => bid.bidderEmail === user.email);
        setBids(filteredBids);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); // Call the async function to fetch data

  }, [user.email]); // Add user.email as a dependency to re-fetch data when it changes

  return (
    <div>
      {/* Render the filtered bids */}
      <h2 className='text-center text-4xl my-10 text-cyan-600'>Your Bids</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
        {bids.map((bid) => (
          <div key={bid._id} className='border p-6 space-y-2 rounded bg-cyan-100  shadow-xl '>
           <p>Job Title: {bid.jobTitle}</p>
           <p>Job Category: {bid.jobCategory}</p>
            <p>Job Offered by: {bid.providerEmail}</p>
            <p>Your Bidding: {bid.bidding}</p>
            <p>Your Deadline: {bid.deadline}</p>

            

          </div>
        ))}
      </div>
    </div>
  );
};

export default Bids;
