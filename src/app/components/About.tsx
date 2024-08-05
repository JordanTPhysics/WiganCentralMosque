import React from 'react';

const About: React.FC = () => {
    const buttonClassName = "text-heading text-xs md:text-lg lg:text-lg m-0 p-0 md:p-2 lg:p-2 md:m-2 lg:m-2 lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm lg:m-3 md:m-2 sm:m-1 m-2 custom-link text-nowrap transition-all";
    const listClassName = "navigation-menu flex flex-wrap flex-grow justify-center lg:m-3 sm:m-1 md:m-2 md:col-span-5 lg:col-span-5 sm:col-span-1 sm:row-span-1";

    return (
        <div className="bg-primary/90 rounded-sm w-screen p-4 mt-4 mb-4">

            <h1 className="text-5xl text-heading">About</h1>
            <h2 className="text-3xl text-heading text-center">Wigan Central Mosque</h2>
            <img src="/resources/images/front.jpeg" alt="The Old Building" className="w-1/2 md:w-1/4 lg:w-1/4 mx-auto rounded-md mt-2 mb-2" />
            <h3 className="text-2xl text-heading text-center">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h3>

            <span className='text-menu'>
                The muslim community in Wigan has been growing rapidly over the past few years. The need for an additional Mosque has been long overdue.
                Wigan Central Mosque is a New Project to convert this old unused building into a Mosque. The mosque will be open to all visitors and will provide a range of services to the community.
                Planned community services:
                <br />
                <ul className='text-center mt-4 mb-4'>
                    <li>Five daily prayers</li>
                    <li>Jumu'ah prayers</li>
                    <li>Islamic classes for children and adults</li>
                    <li>Community events and engagement</li>
                    <li>Interfaith events</li>
                    <li>Foodbank</li>
                </ul>

                Please share our page with your friends and family and help us raise the funds needed to make this project a reality.
                You can find our donation options below, as well as links to our social media pages.
                <ul className={listClassName}>
                    <li >
                        <a target='_blank' href="https://www.instagram.com/impactcommunityuk1/" ><img src="/resources/images/facebook.png" alt='facebook' className='icon'/></a>
                    </li>
                    <li >
                        <a target='_blank' href="https://youtube.com/@impactcommunitygroup6243?si=ca41x-vyLe2hwhF3" ><img src="/resources/images/youtube.png" alt='youtube' className='icon'/></a>
                    </li>
                    <li >
                        <a target='_blank' href="https://www.instagram.com/impactcommunityuk1/" ><img src="/resources/images/instagram.png" alt='instagram' className='icon'/></a>
                    </li>
                </ul>
            </span>

        </div>
    );
};

export default About;