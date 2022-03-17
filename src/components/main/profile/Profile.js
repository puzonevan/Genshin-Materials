import React from 'react';
import './Profile.css';
import { Description } from './description/Description';

export function Profile(props) {

    return (
        <section className="profile" id="profile">
            {/* Main Image */}
            <div className="image-container" >
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/deeqrmg-2f0ccbc4-b403-43d2-b105-d62ca5a3fc94.png/v1/fill/w_1280,h_1490,strp/zhongli_genshin_impact_character_png_by_deg5270_deeqrmg-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5MCIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGVlcXJtZy0yZjBjY2JjNC1iNDAzLTQzZDItYjEwNS1kNjJjYTVhM2ZjOTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rdRHGbC_oRjnpMnNxbcQMhqK-QjoDaf2zfqoTHsIbPI" alt="Character Profile Image"/>
            </div>
            {/*  Description */}
            <Description />
        </section>
    );
};