import React from 'react';
import './Description.css';

export function Description(props){
    return (
        <section className="description" id="description">
            <h2>Zhongli</h2>
            <h3>Sub title</h3>
            <p>Wangsheng Funeral Parlor's mysterious consultant. Handsome, elegant, and surpassingly learned. Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals.</p>
            <hr />
            <div>
                {/* Icons */}
                <div>
                    Element
                </div>
                <div>
                    Weapon
                </div>
                <div>
                    Nation
                </div>
            </div>
            <hr />
        </section>
    );
};