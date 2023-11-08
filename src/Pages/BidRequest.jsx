import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
import axios from 'axios';

const BidRequest = () => {
    const [bids, setBids] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7000/bid', { withCredentials: true }); // Use Axios for the GET request
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                const data = response.data;
                const filteredBids = data.filter((bid) => bid.providerEmail === user.email);
                setBids(filteredBids);
            } catch (error) {
                console.error('Error fetching data: ', error);
                // Optionally display an error message to the user.
            }
        };

        fetchData();
    }, [user.email]);

    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!',
    //         allowOutsideClick: false, // Prevent clicking outside the dialog
    //         showLoaderOnConfirm: true, // Display loading indicator

    //         preConfirm: () => {
    //             return fetch(`http://localhost:7000/bid/${id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         const remainingBids = bids.filter(bid => bid._id !== id);
    //                         setBids(remainingBids);
    //                         return data;
    //                     } else {
    //                         throw new Error('Failed to delete the bid.');
    //                     }
    //                 })
    //                 .catch(error => {
    //                     Swal.showValidationMessage(`Error: ${error.message}`);
    //                 });
    //         },
    //     })
    //     .then((result) => {
    //         if (result.value) {
    //             Swal.fire('Deleted!', 'Your bid has been deleted.', 'success');
    //         }
    //     });
    // };

    const handleBiddingAccept = id => {
        
        fetch(`http://localhost:7000/bid/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Accept' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bids.filter(bid => bid._id !== id);
                    const updated = bids.find(bid => bid._id === id);
                    updated.status = 'Accept'
                    const newBookings = [updated, ...remaining];
                    setBids(newBookings);
                }
            })
    }
    const handleBiddingReject = id => {
        
        fetch(`http://localhost:7000/bid/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Reject' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bids.filter(bid => bid._id !== id);
                    const updated = bids.find(bid => bid._id === id);
                    updated.status = 'Reject'
                    const newBookings = [updated, ...remaining];
                    setBids(newBookings);
                }
            })
    }


    return (
        <div className='min-h-screen'>
            {/* Render the filtered bids */}
            <h2 className='text-center text-4xl my-10 text-cyan-600'>My Bids</h2>
            {bids.length === 0 ? (
                <p className="text-center text-xl text-gray-500">No bids</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
                    {bids.map((bid) => (
                        <div key={bid._id} className='border p-6 space-y-2 rounded bg-cyan-100  shadow-xl '>
                            <p>Job Title: {bid.jobTitle}</p>
                            <p>Job Category: {bid.jobCategory}</p>
                            <p>Bid Offered by: {bid.bidderEmail}</p>
                            <p>Offerd Bidding: {bid.bidding}</p>
                            <p>Offerd Deadline: {bid.deadline}</p>
                            <p>Status: {bid.status}</p>
                            {/* <p onClick={() => handleDelete(bid._id)} className=' font-semibold flex justify-end cursor-pointer  text-red-500'>X</p> */}
                            <div className='flex gap-4 '>
                                <button className='btn btn-success flex-grow text-white' onClick={()=> handleBiddingAccept(bid._id)}>Accept</button>
                                <button className='btn btn-error flex-grow text-white' onClick={()=> handleBiddingReject(bid._id)}>Decline</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BidRequest;
