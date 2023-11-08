import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Jobs = () => {

    // eslint-disable-next-line no-unused-vars
    const [jobs, setJobs] = useState([]);
    const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
    const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
    const [graphicDesignJobs, setGraphicDesignJobs] = useState([]);


    useEffect(() => {
        // Assuming you fetch the data from an API or some other source
        // Replace this with your actual data fetching code
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:7000/postedjobs/');
                if (response.ok) {
                    const data = await response.json();
                    // Filter the data to get only jobCategory: "webDevelopment"
                    const filteredData = data.filter(job => job.jobCategory === "digitalMarketing");
                    setJobs(data); // Store all jobs in 'jobs' state
                    setDigitalMarketingJobs(filteredData); // Store web development jobs in 'webDevelopmentJobs' state
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // Assuming you fetch the data from an API or some other source
        // Replace this with your actual data fetching code
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:7000/postedjobs/');
                if (response.ok) {
                    const data = await response.json();
                    // Filter the data to get only jobCategory: "webDevelopment"
                    const filteredData = data.filter(job => job.jobCategory === "graphicDesign");
                    setJobs(data); // Store all jobs in 'jobs' state
                    setGraphicDesignJobs(filteredData); // Store web development jobs in 'webDevelopmentJobs' state
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // Assuming you fetch the data from an API or some other source
        // Replace this with your actual data fetching code
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:7000/postedjobs/');
                if (response.ok) {
                    const data = await response.json();
                    // Filter the data to get only jobCategory: "webDevelopment"
                    const filteredData = data.filter(job => job.jobCategory === "WebDevelopment");
                    setJobs(data); // Store all jobs in 'jobs' state
                    setWebDevelopmentJobs(filteredData); // Store web development jobs in 'webDevelopmentJobs' state
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='p-28'>
            <Tabs>
                <TabList >
                    <Tab>Web development</Tab>
                    <Tab>Digital marketing</Tab>
                    <Tab>Graphics design</Tab>
                </TabList>

                <div className='w-[90%] p-4 mx-auto min-h-screen'>
                    <TabPanel>
                        <div className=''>
                            {/* <h1>Web Development Jobs</h1> */}
                            <div className='grid grid-cols-3 gap-4'>
                                {webDevelopmentJobs.map(job => (
                                    <div key={job._id}>
                                        <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                                            <h2>Job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                                            <h2>Deadline: {job.deadline}</h2>
                                            <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                                            <h2 className='flex-grow '>Description: {job.description}</h2>
                                            <Link to={`/job-details/${job._id}`}>
                                                <button className='btn btn-accent text-white w-full '>Bid Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=''>
                            {/* <h1>Digital Marketing Jobs</h1> */}
                            <div className='grid grid-cols-3 gap-4'>
                                {digitalMarketingJobs.map(job => (
                                    <div key={job._id}>
                                        <div className='border p-6 space-y-2 rounded bg-cyan-100 '>
                                            <h2>Job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                                            <h2>Deadline: {job.deadline}</h2>
                                            <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                                            <h2>Description: {job.description}</h2>
                                            <Link to={`/job-details/${job._id}`}>
                                                <button className='btn btn-accent text-white w-full'>Bid Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=''>
                            {/* <h1>graphicDesign Jobs</h1> */}
                            <div className='grid grid-cols-3 gap-4'>
                                {graphicDesignJobs.map(job => (
                                    <div key={job._id}>
                                        <div className='border p-6 space-y-2 rounded bg-cyan-100  '>
                                            <h2>job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                                            <h2>Deadline: {job.deadline}</h2>
                                            <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                                            <h2>Description: {job.description}</h2>
                                            <Link to={`/job-details/${job._id}`}>
                                                <button className='btn btn-accent text-white w-full'>Bid Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Jobs;


