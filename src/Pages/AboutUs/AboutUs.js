import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='mx-16'>
            {/* breadcrumb */}
            <div className="text-sm breadcrumbs my-2">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>About Us</li>
                </ul>
                <div className="divider mt-1"></div>
            </div>
            <div>
                <h1 className="text-4xl">About Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, fuga.</p>
                <div className="divider mt-1"></div>
                <h6 className="text-xl text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error libero aliquid accusantium. Dolorum, consequuntur. Quae velit optio, qui quia aut at cupiditate a neque!
                </h6>
                <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur itaque atque modi, nam eum voluptates iste dicta id distinctio nemo, praesentium, quis illo in! Est voluptatum, ipsa adipisci neque quos vitae doloremque dolorem sunt? Temporibus possimus illo distinctio veniam fugit exercitationem recusandae nisi ipsum numquam dignissimos omnis a error impedit ducimus accusantium, non quae. Amet praesentium odit, voluptates voluptatum expedita similique et odio, quas saepe ex pariatur soluta minima sit eius hic placeat commodi. Repellat corporis soluta voluptatibus deserunt iure, pariatur molestiae ex, eaque enim suscipit modi impedit aut voluptate maxime aliquam non magni officia dolores ducimus velit dicta.</p>
            </div>
        </div>
    );
};

export default AboutUs;