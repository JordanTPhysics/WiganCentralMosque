import React from 'react';

const Donate: React.FC = () => {
    const buttonClassName = "text-heading text-xs md:text-lg lg:text-lg m-0 p-0 md:p-2 lg:p-2 md:m-2 lg:m-2 lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm lg:m-3 md:m-2 sm:m-1 m-2 custom-link text-nowrap transition-all";

    return (
        <div className="bg-primary/90 rounded-sm w-screen p-4 mt-4 mb-4">
            <h1 className="text-5xl text-heading">Donate</h1>

            <span className='text-menu'>
                Please donate to help us build the Mosque. We are in need of funds to help us complete the project.
                <br />
                <ul className='text-center mt-4 mb-4'>
                    <li className='mt-4 mb-4'>Donate via 

                        <a className={buttonClassName} href='https://www.muslimgiving.org/Wigancentralmasjid?fbclid=IwY2xjawEd73NleHRuA2FlbQIxMAABHTb306ITAysVCE15Udn1At9IIzTX2VkY4tEZRug8CNl8vVLPLVAGwEfNfw_aem_8queq6Li0o4OyHka9nbt9A' target='_blank'> MuslimGiving</a>
                    </li>
                    <li className='mt-4 mb-4'>Donate via 
                        <a className={buttonClassName} href='https://www.launchgood.com/v4/campaign/join_us_in_building_our_central_wigan_mosque' target='_blank'> LaunchGood</a>
                    </li>
                    <li className='mt-4 mb-4'>Donate via 
                        <a className={buttonClassName} href='https://www.gofundme.com/f/transforming-a-church-in-wigan-into-a-beacon-of-community?lang=en_GB&utm_campaign=fp_sharesheet&utm_medium=customer&utm_source=whatsapp' target='_blank'> GoFundMe</a>
                    </li>
                </ul>
            </span>
        </div>
    );
};

export default Donate;