import React from 'react';
import './Achievements.css';
import Image from 'next/image';

const Achievements: React.FC = () => {
  return (
    <div className='achievements' id='achievements'>
      <h1>Achievements</h1>
      <div className="achievements-grid">
        <div className="achievement-item">
          <Image src='/profile.jfif' alt="Profile" width={250} height={250} className="profile-image" />
          <p>
            Ranked 35/22,000 in CodeChef Starters 90, 496/22,282 in LeetCode Biweekly 101, 906/16,000 in Codeforces Round 878.
          </p>
        </div>
        <div className="achievement-item">
          <Image src='/profile.jfif' alt="Profile" width={250} height={250} className="profile-image" />
          <p>
            Solved 900+ DSA questions on various online coding platforms (LeetCode, CodeChef, GeeksForGeeks, Codeforces).
          </p>
        </div>
        <div className="achievement-item">
          <Image src='/profile.jfif' alt="Profile" width={250} height={250} className="profile-image" />
          <p>
            Achieved Knight Badge on LeetCode with a rating of 1860+ and Specialist on Codeforces with a rating of 1410+.
          </p>
        </div>
        <div className="achievement-item">
          <Image src='/chess.png' alt="Profile" width={250} height={250} className="profile-image" />
          <p>
            Achieved 1st place and 3rd position in the Collegiate Chess League in 2021 and 2023, respectively. Surpassing 160 global colleges.
          </p>
        </div>
        <div className="achievement-item">
          <Image src='/fitness.jpg' alt="Profile" width={250} height={250} className="profile-image" />
          <p>
            Secured a silver medal at Inter IIIT Kancheepuram 2023 in Powerlifting and Chess.
          </p>
        </div>
        <div className="achievement-item">
          <Image src='/youtube.png' alt="Profile" width={250} height={250} className="profile-image" />
          <p>
            Content creator at YouTube, produced 50+ educational videos that have amassed over 100,000+ views and 1,100+ subscribers. Over 4,000 hours of educational content has been watched by viewers all over the world. <a href="YOUR_YOUTUBE_LINK">Link</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
