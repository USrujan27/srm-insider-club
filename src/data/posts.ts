export type Category = 'Placements' | 'Internships' | 'Campus Life';

export interface Post {
  id: string;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  readTime: string;
  likes: number;
  author: {
    name: string;
    avatarInitials: string;
    color: string;
  };
  date: string;
  content: string;
}

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "How I cracked the Microsoft SWE Internship at SRM",
    category: "Internships",
    description: "A detailed breakdown of the interview rounds, resume tips, and what to focus on during your 3rd year.",
    tags: ["Microsoft", "SWE", "Interview Prep", "3rd Year"],
    readTime: "7 min read",
    likes: 342,
    author: { name: "Aarav Mishra", avatarInitials: "AM", color: "bg-blue-500" },
    date: "Mar 15, 2026",
    content: "The Microsoft SWE internship drive at SRM is one of the most anticipated events. It usually begins with an online coding round focusing heavily on DSA. I spent roughly 3 months grinding LeetCode Mediums and Hards before this drive.\n\nIn the first round, the questions were standard arrays and tree transversals. The tricky part was writing clean, optimal code within the time limit. Moving on to the technical interviews, my focus shifted to system design basics and deep-diving into my projects.\n\nThe final HR round was purely behavioral. My advice? Be honest, show passion for technology, and understand Microsoft's core values. Don't fake your resume; they will find out."
  },
  {
    id: "2",
    title: "Ultimate Guide to Placements 2026: What Recruiters Want",
    category: "Placements",
    description: "Insights from top tier recruiters who visited the campus last semester. Learn the secret sauce of getting shortlisted.",
    tags: ["Placements", "Advice", "Recruiters"],
    readTime: "10 min read",
    likes: 512,
    author: { name: "Sneha Reddy", avatarInitials: "SR", color: "bg-indigo-500" },
    date: "Feb 28, 2026",
    content: "When companies visit the SRM campus, they usually sift through hundreds of resumes. I spoke with HRs from Amazon, Cisco, and JP Morgan to understand what exactly catches their eye.\n\nFirst and foremost, a well-structured resume is non-negotiable. One-page format, clean fonts, and impact-driven bullet points (using the XYZ format: Accompanied X, as measured by Y, by doing Z). They also emphasized practical projects over generic ones. A unique full-stack project beats a simple to-do app any day.\n\nFinally, communication skills matter during the interview. You might be a brilliant coder, but if you can't explain your thought process clearly, it's a huge red flag."
  },
  {
    id: "3",
    title: "Surviving Tech Park: Best Food Spots You Did Not Know About",
    category: "Campus Life",
    description: "Tired of the regular mess food or Java green? We explored every corner around Tech Park for the best hidden eateries.",
    tags: ["Food", "Tech Park", "Exploration"],
    readTime: "5 min read",
    likes: 890,
    author: { name: "Karan Singh", avatarInitials: "KS", color: "bg-orange-500" },
    date: "Apr 01, 2026",
    content: "Tech Park is the heart of SRM, but finding good food without waiting in massively long lines can be a challenge. Most people flock to the usual spots, but there are hidden gems if you know where to look.\n\nJust behind the D-Block, there's a small sandwich stall that opens exactly at 11 AM. For 60 bucks, you get the most cheese-loaded, spicy grilled sandwich on campus. Try it when you have a 10-minute break between continuous labs.\n\nAlso, if you're pulling an all-nighter for an assignment, the 24/7 cafe near the main gate is a lifesaver. The Maggi there hits differently at 3 AM."
  },
  {
    id: "4",
    title: "Google Women Techmakers Scholarship: My Journey",
    category: "Internships",
    description: "Step-by-step unrolling of the application process from an SRMite who won it last year.",
    tags: ["Google", "Scholarship", "WTM", "Diversity"],
    readTime: "8 min read",
    likes: 415,
    author: { name: "Priya Sharma", avatarInitials: "PS", color: "bg-green-500" },
    date: "Jan 22, 2026",
    content: "Applying for the WTM scholarship was intimidating. I remember staring at the essay prompts and feeling like my achievements weren't 'big enough'. But I decided to focus on my community impact rather than just technical skills.\n\nThe essay is the most crucial part. They want to see your leadership and how you plan to uplift other women in tech. I wrote about the coding club I started for junior girls in my hostel. \n\nThe technical interviews were standard problem-solving rounds, but they cared heavily about my communication and thought process. To anyone applying next year: start your essays early!"
  },
  {
    id: "5",
    title: "Why I rejected a FAANG offer for a Y-Combinator Startup",
    category: "Placements",
    description: "A controversial take on why high-growth startups might offer a better trajectory than established giants right out of college.",
    tags: ["Startups", "Career Advice", "FAANG"],
    readTime: "6 min read",
    likes: 672,
    author: { name: "Rahul Verma", avatarInitials: "RV", color: "bg-red-500" },
    date: "Mar 10, 2026",
    content: "When I got the offer from a well-known tech giant, everyone told me I was set for life. However, simultaneously, I had an offer from an early-stage YC startup. The pay was slightly less, but the equity was significant.\n\nI realized that at a big tech company, I would be a small cog in a massive machine. At the startup, I was given ownership of an entire product module from day one. I learned more about deployments, architecture scaling, and business strategy in 3 months than I would have in 2 years elsewhere.\n\nIt's high risk, but if you value extreme learning curves and responsibility over a brand name, startups are the way to go."
  },
  {
    id: "6",
    title: "The Reality of 85% Attendance and How to Manage It",
    category: "Campus Life",
    description: "Let's be real, juggling hackathons, placements prep, and classes is hard. Here's a tactical guide to managing attendance.",
    tags: ["Attendance", "Tips", "Time Management"],
    readTime: "4 min read",
    likes: 1205,
    author: { name: "Neha Gupta", avatarInitials: "NG", color: "bg-purple-500" },
    date: "Feb 14, 2026",
    content: "The 85% rule in SRM is strict, and we all know the fear of falling into the condonation zone. But managing it isn't impossible, it just requires strategic planning.\n\nFirst, never skip the first two weeks of the semester. Build a buffer early. If you need to bunk for an event, make sure you OD (On Duty) application is processed *before* the event, not after.\n\nAlso, figure out which professors are particular about attendance and which ones are more lenient. Keep track using a dedicated app, not your memory. A single missed lab can tank your percentage wildly."
  },
  {
    id: "7",
    title: "Mastering the Aptitude Round for Mass Recruiters",
    category: "Placements",
    description: "A cheat sheet for clearing TCS, Cognizant, and Wipro aptitude tests with 90%+ accuracy.",
    tags: ["Aptitude", "Mass Recruiters", "Cheat Sheet"],
    readTime: "5 min read",
    likes: 310,
    author: { name: "Vikram Das", avatarInitials: "VD", color: "bg-teal-500" },
    date: "Nov 12, 2025",
    content: "Many students focus entirely on coding and fail the aptitude test, which is step one for mass recruiters. The questions aren't hard, but the clock is incredibly fast.\n\nYou need to memorize shortcuts for percentages, time-speed-distance, and blood relations. I practiced on platforms like IndiaBix for 30 minutes daily during my 6th semester.\n\nDon't waste time on a single question. If you can't solve it in 45 seconds, guess and move on. Accuracy matters, but completing the section matters more since there's often no negative marking."
  },
  {
    id: "8",
    title: "Off-Campus Internship Hunt: A Brutal Reality",
    category: "Internships",
    description: "Why cold emailing works and how I landed a 6-month remote internship in the US.",
    tags: ["Off-Campus", "Cold Email", "Remote"],
    readTime: "9 min read",
    likes: 854,
    author: { name: "Ananya Iyer", avatarInitials: "AI", color: "bg-pink-500" },
    date: "Oct 25, 2025",
    content: "On-campus opportunities are great, but off-campus opens up the whole world. I decided to target US startups since the currency conversion meant great pay even as an intern.\n\nI sent over 300 personalized cold emails. My template was short: who I am, what specific problem I noticed in their product, and how I could fix it. Out of 300, I got 15 replies, and 3 interviews.\n\nThe key is persistence and not taking ghosting personally. Keep refining your pitch and make sure your GitHub is immaculate."
  },
  {
    id: "9",
    title: "Milan 2026: What to Expect This Year",
    category: "Campus Life",
    description: "The lineup, the events, and how to get the most out of our national level cultural fest.",
    tags: ["Milan", "Fest", "Events"],
    readTime: "3 min read",
    likes: 932,
    author: { name: "Rohan Kapoor", avatarInitials: "RK", color: "bg-yellow-500" },
    date: "Jan 05, 2026",
    content: "Milan is back and it's supposedly larger than ever this year. With a budget increase, the organizers are hinting at a massive Pro-Show lineup. Rumors say it's an international DJ this time.\n\nIf you want to enjoy it, register for events early. Don't just attend the concerts; the informal events during the afternoon are ridiculously fun. Also, volunteer if you can! The networking and free food are completely worth the running around.\n\nStay tuned for the official schedule drop next week."
  },
  {
    id: "10",
    title: "Cracking the OAs (Online Assessments)",
    category: "Placements",
    description: "Why you keep failing the first round despite knowing DSA, and how to fix it.",
    tags: ["OA", "Coding", "DSA"],
    readTime: "6 min read",
    likes: 421,
    author: { name: "Siddharth Nair", avatarInitials: "SN", color: "bg-blue-600" },
    date: "Sep 18, 2025",
    content: "OAs are designed to filter out 90% of candidates. You might know DP and Graphs, but if you don't account for edge cases, hidden test cases will destroy your score.\n\nAlways dry run your code with empty inputs, negative numbers, and massive inputs (N=10^5) before submitting. Don't just rely on the sample test cases passing. I started doing regular virtual participation on Codeforces to build speed.\n\nAlso, learn standard template code for segment trees, union-find, and string matching. You don't have time to derive these from scratch in a 60-minute test."
  },
  {
    id: "11",
    title: "A Guide to Open Source (GSoC) from Campus",
    category: "Internships",
    description: "Everything you need to know about Google Summer of Code, from organization selection to proposal drafting.",
    tags: ["GSoC", "Open Source", "Guide"],
    readTime: "11 min read",
    likes: 567,
    author: { name: "Meera Joshi", avatarInitials: "MJ", color: "bg-indigo-600" },
    date: "Dec 10, 2025",
    content: "GSoC changed my career trajectory. The trick isn't being a god-level coder; it's being a great communicator and a consistent contributor.\n\nI started contributing in January, months before the deadline. I joined their Discord, asked intelligent questions, and fixed tiny documentation bugs first. Once the maintainers recognized my name, I tackled larger issues.\n\nWhen writing my proposal, I shared it with the mentors early for feedback. If your proposal is a surprise on deadline day, you've already lost."
  },
  {
    id: "12",
    title: "Hostel vs Flat: The Ultimate Showdown",
    category: "Campus Life",
    description: "Moving out of Adhiyaman/Nelson Mandela? Read this before you sign a lease for a flat.",
    tags: ["Accommodation", "Hostel", "Living"],
    readTime: "5 min read",
    likes: 888,
    author: { name: "Arjun Desai", avatarInitials: "AD", color: "bg-gray-500" },
    date: "Apr 20, 2026",
    content: "The freedom of a flat sounds amazing until the Wi-Fi breaks and the maid doesn't show up for a week. I moved out in my 3rd year and learned life skills the hard way.\n\nHostels offer convenience. Food is ready, security is present, and your friends are next door. Flats offer independence, late-night cooking, and no curfews. \n\nBefore taking a flat in Abode or Estancia, factor in electricity bills, travel time to 8 AM classes, and the dynamic you have with your roommates. A bad roommate in a flat is 10x worse than in a hostel."
  },
  {
    id: "13",
    title: "JPMorgan Chase Software Engg Internship Review",
    category: "Internships",
    description: "What happens during the JPMC Code for Good hackathon and subsequent interview.",
    tags: ["JPMC", "CFG", "Hackathon"],
    readTime: "7 min read",
    likes: 670,
    author: { name: "Kriti Menon", avatarInitials: "KM", color: "bg-cyan-600" },
    date: "May 10, 2025",
    content: "JPMC recruits primarily through their Code For Good hackathon. It's a grueling 24-hour event where you build a solution for an NGO. \n\nThe mentors evaluate you silently during the hackathon. They watch how you collaborate. Don't be a lone wolf—help your teammates, communicate clearly, and take initiative. My team didn't win, but 4 of us got the internship offer because our mentor loved our team dynamics.\n\nBrush up on React/Spring Boot; they love full-stack ready students."
  },
  {
    id: "14",
    title: "The Top 5 Electives You MUST Take in 4th Year",
    category: "Campus Life",
    description: "Boost your GPA and learn something actually useful. Breaking down the best electives to pick.",
    tags: ["Academics", "Electives", "GPA"],
    readTime: "4 min read",
    likes: 1102,
    author: { name: "Varun Bajaj", avatarInitials: "VB", color: "bg-emerald-500" },
    date: "Dec 01, 2025",
    content: "Course registration is a war. If you want high scoring, easy-to-manage electives that also offer modern knowledge, you need to act fast.\n\nCloud Computing and HCI (Human-Computer Interaction) are highly recommended. The syllabi are modern, and the professors evaluating them emphasize project work over rote learning for exams. \n\nAvoid obscure hardware electives unless you genuinely have a passion for them; the grading curves are notoriously brutal."
  },
  {
    id: "15",
    title: "Building a Killer Portfolio Website",
    category: "Placements",
    description: "Why a PDF resume is no longer enough and how to build a portfolio that stands out.",
    tags: ["Portfolio", "Web Dev", "Design"],
    readTime: "6 min read",
    likes: 540,
    author: { name: "Pooja Patil", avatarInitials: "PP", color: "bg-purple-600" },
    date: "Aug 15, 2025",
    content: "I started getting 3x more interview callbacks once I linked a personalized portfolio website. It shows effort.\n\nYou don't need a crazy 3D WebGL experience. Keep it clean. Use Next.js, a nice font like Inter, and deploy on Vercel. Make sure your projects have live links and GitHub repository links attached.\n\nMost importantly, write a case study for your best project. Explain *why* you built it and *how* you solved a difficult bug. Senior engineers love reading about your thought process."
  }
];
