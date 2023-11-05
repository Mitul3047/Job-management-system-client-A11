import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Jobs = () => {
    return (
        <div className='p-28'>
            <Tabs>
                <TabList>
                    <Tab>Web development</Tab>
                    <Tab>Digital marketing</Tab>
                    <Tab>Graphics design</Tab>
                </TabList>

<div className='w-4/5 mx-auto'>
<TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
</div>
            </Tabs>
        </div>
    );
};

export default Jobs;