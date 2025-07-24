import React, { useEffect, useState } from 'react';

const AllDonors = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/donations")
            .then((res) => res.json())
            .then((data) => setDonations(data))
            .catch((error) => console.error("Error fetching donations:", error));
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-red-700 mb-10 text-center">Blood Donors</h2>

            {donations.length === 0 ? (
                <p className="text-center text-gray-500">No donations found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donation, index) => (
                        <div
                            key={index}
                            className="relative h-64 rounded-xl overflow-hidden shadow-xl group"
                            style={{
                                backgroundImage: "url('https://i.ibb.co/gbQmSttk/pexels-ivan-samkov-9629706.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-60 transition duration-300"></div>

                            <div className="absolute bottom-0 p-4 text-white z-10 w-full">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl text-black font-bold"><strong>Name: </strong>{donation.name}</h3>
                                    <span className="badge badge-error badge-lg text-black text-sm">
                                      <strong>Blood Group: </strong>  {donation.bloodGroup}
                                    </span>
                                </div>
                                <p className="text-xl text-black mt-1">📍 {donation.location}</p>
                                <p className="text-xl text-black bg-white rounded-2xl p-1 mt-1 w-48">📞 {donation.phone}</p>
                                <div className="text-xl mt-2 text-black opacity-80">
                                   <strong> Age: {donation.age} | <span className='text-blue-700'>Donated on:</span> <span className='text-black'>{donation.donationDate}</span></strong>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllDonors;