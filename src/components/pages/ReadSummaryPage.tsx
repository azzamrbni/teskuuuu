import { ArrowLeft, ChevronRight, ChevronDown, Type, Star, X, List, Highlighter, PanelLeftClose, PanelLeftOpen, BookOpen, AlignLeft, AlignJustify, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState, useEffect } from 'react';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment' | 'completed-books';

interface ReadSummaryPageProps {
  bookId: number | null;
  onNavigate: (page: Page, bookId?: number) => void;
}

interface Highlight {
  text: string;
  id: string;
}

interface Section {
  id: string;
  title: string;
}

interface Chapter {
  id: string;
  title: string;
  content: JSX.Element;
  sections: Section[];
}

export function ReadSummaryPage({ bookId, onNavigate }: ReadSummaryPageProps) {
  const [sidebarView, setSidebarView] = useState<'toc' | 'highlights'>('toc');
  const [isFavorite, setIsFavorite] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isHighlightMode, setIsHighlightMode] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [textAlign, setTextAlign] = useState<'left' | 'justify'>('left');
  const [isCompleted, setIsCompleted] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<number[]>([0]);

  const chapters: Chapter[] = [
    {
      id: '1-page-summary',
      title: '1-Page Summary',
      sections: [],
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            <strong>Atomic Habits</strong> explains how small, consistent changes in your daily routines can lead to remarkable results over time. James Clear argues that focusing on systems rather than goals, and making tiny improvements (1% better each day), compounds into significant transformation.
          </p>
          <p>
            The book is built around a simple four-step framework for building good habits and breaking bad ones: <strong>make it obvious, make it attractive, make it easy, and make it satisfying</strong>. This system works by understanding how habits form in the brain and leveraging that knowledge to design your environment for success.
          </p>
          <p>
            Key insights include: habits are the compound interest of self-improvement, your identity is shaped by your habits, and small changes lead to remarkable results when compounded over time. The book emphasizes that you don't rise to the level of your goals, you fall to the level of your systems.
          </p>
          <p>
            Clear demonstrates that success is not about dramatic transformations or revolutionary changes. Instead, it's about the accumulation of tiny gains - 1% improvements that add up over time. Whether you want to lose weight, build a business, write a book, win a championship, or achieve any other goal, the same principles apply.
          </p>
          <p>
            The key is to focus on who you wish to become, not what you want to achieve. Every action you take is a vote for the type of person you wish to become. The more you repeat a behavior, the more you reinforce the identity associated with that behavior.
          </p>
          <p>
            Throughout the book, Clear provides practical examples and research-backed strategies. He shows how British Cycling transformed from mediocrity to dominance through marginal gains - improving every aspect of cycling by just 1%. This philosophy applies to personal development as well.
          </p>
          <p>
            One of the most powerful concepts in the book is the idea of identity-based habits. Instead of focusing on what you want to achieve (outcome-based), focus on who you wish to become (identity-based). Don't aim to read a book, aim to become a reader. Don't aim to run a marathon, aim to become a runner.
          </p>
          <p>
            Clear also addresses the valley of disappointment - that period where you're working hard but not seeing results. This is where most people give up. But if you can push through this plateau, you'll eventually reach a breakthrough. Habits need time to compound before the results become visible.
          </p>
          <p>
            The Four Laws of Behavior Change form the backbone of the book's practical advice. To build a good habit: (1) Make it obvious by designing your environment to make cues visible, (2) Make it attractive by bundling habits with things you enjoy, (3) Make it easy by reducing friction and starting with two-minute versions, and (4) Make it satisfying by tracking your habits and celebrating small wins.
          </p>
          <p>
            To break a bad habit, simply invert these laws: make it invisible, make it unattractive, make it difficult, and make it unsatisfying. By manipulating these four factors, you can design an environment that makes good habits easier and bad habits harder.
          </p>
          <p>
            Clear emphasizes that the secret to getting results that last is to never stop making improvements. It's not about perfect, it's about persistence. Small habits don't add up, they compound. And that's the power of atomic habits - tiny changes that deliver remarkable results when given enough time.
          </p>
          <p>
            The book concludes with a powerful reminder: you don't need to be perfect. You just need to be consistent. Miss once, and it's an accident. Miss twice, and it's the start of a new habit. The goal is not to never fail, but to get back on track as quickly as possible. Success is not a destination, it's a direction.
          </p>
        </div>
      )
    },
    {
      id: 'fundamentals',
      title: 'The Fundamentals: Why Tiny Changes Make a Big Difference',
      sections: [
        { id: 'surprising-power', title: 'The Surprising Power of Atomic Habits' },
        { id: 'valley-disappointment', title: 'The Valley of Disappointment' },
        { id: 'goals-systems', title: 'Forget About Goals, Focus on Systems' },
        { id: 'habits-identity', title: 'How Your Habits Shape Your Identity' }
      ],
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h3 id="surprising-power" className="text-xl text-gray-900 dark:text-white scroll-mt-20">The Surprising Power of Atomic Habits</h3>
          <p>
            James Clear begins by explaining the power of small habits through the story of the British Cycling team. When Sir Dave Brailsford became the coach in 2003, the team had been mediocre for nearly a century. Brailsford applied a philosophy of marginal gains - the idea that if you improve every area related to cycling by just 1%, the aggregated gains would be remarkable.
          </p>
          <p>
            The team started by optimizing obvious things like nutrition and training, but they didn't stop there. They tested different types of massage gels to find which one led to the fastest muscle recovery. They tested various fabrics in a wind tunnel to find which suits were most aerodynamic. They even painted the inside of the team truck white to spot any dust that might affect bike performance.
          </p>
          <p>
            The results were incredible. Just five years after Brailsford took over, the British Cycling team dominated the 2008 Beijing Olympics, winning 60% of the gold medals available. Four years later in London, they set nine Olympic records and seven world records. From 2007 to 2017, British cyclists won 178 world championships and 66 Olympic or Paralympic gold medals.
          </p>
          <p>
            This transformation happened not because of one revolutionary change, but because of hundreds of tiny improvements. This is the core principle of atomic habits: small changes often appear to make no difference until you cross a critical threshold. The effect of small habits compounds over time.
          </p>
          
          <h3 id="valley-disappointment" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">The Valley of Disappointment</h3>
          <p>
            One of the biggest challenges with building better habits is that improvements often don't feel significant in the moment. If you go to the gym for 20 minutes and you're still out of shape, it's easy to think, "What's the point?" If you study a new language for an hour and you still don't speak it, you feel frustrated.
          </p>
          <p>
            Clear calls this the "valley of disappointment." You expect linear progress, but instead, you get a long flat line of latent potential before you see any results. This is why so many people give up. They put in weeks or months of effort and see little change, so they conclude the work isn't worth it.
          </p>
          <p>
            But here's what's actually happening: habits need time to compound before they deliver obvious results. Ice doesn't melt at 20 degrees, 25 degrees, or even 31 degrees Fahrenheit. It melts at 32 degrees. All the heating that happened before 32 degrees wasn't wasted - it was necessary to push the ice over the threshold.
          </p>
          <p>
            Similarly, breakthrough moments are often the result of many previous actions that build up the potential required to unleash a major change. Bamboo can barely be seen for the first five years as it builds extensive root systems underground, but then it can grow 90 feet in just six weeks. Would you call the first five years a waste?
          </p>
          <p>
            The most powerful outcomes are delayed. This can make the process of building habits frustrating because we live in a world that values instant gratification. We want quick results. But if you can delay gratification and persist through the valley of disappointment, you'll eventually reach a point where your habits compound into remarkable results.
          </p>

          <h3 id="goals-systems" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">Forget About Goals, Focus on Systems</h3>
          <p>
            Clear argues that goals are overrated and systems are underrated. Winners and losers have the same goals. Every Olympic athlete wants to win a gold medal. Every candidate wants to get the job. Every entrepreneur wants to build a successful company. So if the goals are the same, why do only some people succeed?
          </p>
          <p>
            The difference is in their systems. Your system is the collection of daily habits and processes you follow. A goal is about the results you want to achieve. A system is about the processes that lead to those results. Goals are good for setting direction, but systems are best for making progress.
          </p>
          <p>
            There are three problems with being too goal-oriented. First, winners and losers have the same goals. Second, achieving a goal only creates a momentary change. If you clean your room, you now have a clean room - but if you don't change the habits that led to a messy room in the first place, it will soon be messy again. Third, goals restrict your happiness. You're either working toward a goal (and not yet happy) or you've achieved it (and you're only happy for a moment before you set a new goal).
          </p>
          <p>
            When you fall in love with the process rather than the product, you don't have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running. A system is about continuous refinement. It's about getting 1% better every day. It's about playing the long game.
          </p>

          <h3 id="habits-identity" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">How Your Habits Shape Your Identity</h3>
          <p>
            There are three layers of behavior change: outcomes, processes, and identity. Outcomes are about what you get. Processes are about what you do. Identity is about what you believe. Most people start with outcomes: "I want to lose weight" or "I want to write a book." But Clear suggests we should start with identity.
          </p>
          <p>
            Behind every system of actions is a system of beliefs. Your behaviors are usually a reflection of your identity. What you do is an indication of the type of person you believe you are. When your behavior and your identity are fully aligned, you are no longer pursuing behavior change. You are simply acting like the type of person you already believe yourself to be.
          </p>
          <p>
            The key insight is that habits are not just about achieving outcomes, they're about becoming the type of person who achieves those outcomes. The goal is not to read a book, the goal is to become a reader. The goal is not to run a marathon, the goal is to become a runner. The goal is not to learn an instrument, the goal is to become a musician.
          </p>
          <p>
            Your identity emerges out of your habits. Every action is a vote for the type of person you wish to become. The more you repeat a behavior, the more you reinforce the identity associated with that behavior. This is a two-way street: your habits shape your identity, and your identity shapes your habits.
          </p>
          <p>
            To change your habits, start by changing your beliefs about yourself. Ask yourself: "Who is the type of person that could get the outcome I want?" Then prove it to yourself with small wins. Each time you write a page, you're becoming a writer. Each time you practice violin, you're becoming a musician. Each time you go to the gym, you're becoming an athlete.
          </p>
          <p>
            True behavior change is identity change. You might start a habit because of motivation, but the only reason you'll stick with one is that it becomes part of your identity. When your habits become part of who you are, you don't have to rely on motivation or discipline. You're simply acting like the person you believe yourself to be.
          </p>
        </div>
      )
    },
    {
      id: 'four-laws',
      title: 'The Four Laws of Behavior Change',
      sections: [
        { id: 'law-1', title: 'The 1st Law: Make It Obvious' },
        { id: 'law-2', title: 'The 2nd Law: Make It Attractive' },
        { id: 'law-3', title: 'The 3rd Law: Make It Easy' },
        { id: 'law-4', title: 'The 4th Law: Make It Satisfying' }
      ],
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h3 id="law-1" className="text-xl text-gray-900 dark:text-white scroll-mt-20">The 1st Law: Make It Obvious</h3>
          <p>
            The process of behavior change always starts with awareness. Before we can effectively build new habits, we need to get a handle on our current ones. This is where the Habits Scorecard comes in. Make a list of your daily habits, from when you wake up to when you go to sleep. Then, categorize each habit as positive (+), negative (-), or neutral (=).
          </p>
          <p>
            The purpose of this exercise is to become aware of your habits. Many of our daily actions are performed on autopilot. We're often running on auto-pilot, and it's only by bringing awareness to our habits that we can begin to change them. Point-and-call your habits to raise your level of awareness from a nonconscious habit to a more conscious level.
          </p>
          <p>
            Once you're aware of your habits, you can begin to make cues more obvious. One of the best ways to build a new habit is to identify a current habit you already do each day and then stack your new behavior on top. This is called habit stacking. The formula is: "After [CURRENT HABIT], I will [NEW HABIT]."
          </p>
          <p>
            For example: "After I pour my morning cup of coffee, I will meditate for one minute." "After I take off my work shoes, I will immediately change into my workout clothes." "After I sit down to dinner, I will say one thing I'm grateful for that happened today." Habit stacking works because you're taking advantage of the natural momentum that comes from one behavior leading into the next.
          </p>
          <p>
            Your environment shapes your behavior more than you realize. Every habit is initiated by a cue, and we are more likely to notice cues that stand out. Make the cues of good habits obvious in your environment. If you want to remember to take your medication each night, put your pill bottle directly next to the faucet on the bathroom counter.
          </p>
          <p>
            The most powerful of all human sensory abilities is vision. We are visual creatures. A small change in what you see can lead to a big shift in what you do. The idea is to make the cues of your good habits obvious and the cues of your bad habits invisible. Design your environment so that good habits are as easy as possible and bad habits are as difficult as possible.
          </p>
          <p>
            Context is the cue. It's easier to build new habits in a new environment because you're not fighting against old cues. If you can't completely redesign your environment, you can use a new space for a specific activity. Want to develop a reading habit? Create a reading corner in your home. Want to exercise more? Set up a home gym or lay out your workout clothes the night before.
          </p>

          <h3 id="law-2" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">The 2nd Law: Make It Attractive</h3>
          <p>
            The more attractive an opportunity is, the more likely it is to become habit-forming. This is why food scientists work so hard to make processed foods as attractive as possible - they hit the perfect combination of salt, sugar, and fat that keeps us coming back for more.
          </p>
          <p>
            One way to make habits more attractive is through temptation bundling. The strategy is to pair an action you want to do with an action you need to do. For example: "After I pull out my phone, I will do ten burpees (need to do). After I do ten burpees, I will check Facebook (want to do)." You're linking something you want with something you need to create a more attractive habit.
          </p>
          <p>
            We are constantly scanning the world for signs of reward. Our brain notices when an action leads to pleasure and makes a note to repeat that behavior in the future. Every time you feel pleasure, dopamine is released, and your brain associates that feeling with the behavior that preceded it. This creates a feedback loop: cue, craving, response, reward.
          </p>
          <p>
            You can make hard habits more attractive by learning to associate them with a positive experience. Create a motivation ritual. Do something you enjoy immediately before a difficult habit. For example, if you want to feel happier, you could create a morning routine where you make your favorite coffee and listen to uplifting music before you start work.
          </p>
          <p>
            The culture we live in determines which behaviors are attractive to us. We tend to adopt habits that are praised and approved of by our culture because we have a strong desire to fit in and belong to the tribe. One of the most effective things you can do to build better habits is to join a culture where your desired behavior is the normal behavior.
          </p>
          <p>
            We imitate the habits of three groups: the close (family and friends), the many (the tribe), and the powerful (those with status and prestige). Join a group where (1) your desired behavior is the normal behavior and (2) you already have something in common with the group. Your culture sets your expectation for what is normal. Surround yourself with people who have the habits you want to have yourself.
          </p>
          <p>
            You can also make habits more attractive by highlighting the benefits rather than the drawbacks. Reframe your mindset. Change "I have to" into "I get to." You don't "have to" wake up early to exercise. You "get to" wake up early to build a stronger, healthier body. This simple shift in perspective can make the habit feel less like an obligation and more like an opportunity.
          </p>

          <h3 id="law-3" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">The 3rd Law: Make It Easy</h3>
          <p>
            The most effective form of learning is practice, not planning. You can become an expert through deliberate practice, but you can't become an expert through planning alone. Focus on taking action, not being in motion. Being in motion feels like you're getting things done, but you're really just preparing to get things done.
          </p>
          <p>
            Human behavior follows the Law of Least Effort. We will naturally gravitate toward the option that requires the least amount of work. Create an environment where doing the right thing is as easy as possible. Reduce the friction associated with good behaviors. When friction is low, habits are easy. Increase the friction associated with bad behaviors. When friction is high, habits are difficult.
          </p>
          <p>
            Addition by subtraction. When we remove the points of friction that sap our time and energy, we can achieve more with less effort. If you want to eat healthier, remove junk food from your house. If you want to spend less time on your phone, leave it in another room. If you want to watch less television, move the TV out of the bedroom. Prime your environment to make future actions easier.
          </p>
          <p>
            The Two-Minute Rule states: "When you start a new habit, it should take less than two minutes to do." The idea is to make your habits as easy as possible to start. Anyone can meditate for one minute, read one page, or put one item of clothing away. A habit must be established before it can be improved.
          </p>
          <p>
            Master the habit of showing up. The point is to master the habit of showing up. The truth is, a habit can be completed in just a few seconds, but it can also shape the actions that you take for minutes or hours afterward. Standardize before you optimize. You can't improve a habit that doesn't exist.
          </p>
          <p>
            Use commitment devices to lock in future behavior. A commitment device is a choice you make in the present that controls your actions in the future. It's a way to lock in future behavior, bind you to good habits, and restrict you from bad ones. For example, you could leave your phone at home when you go out for a walk, or you could set up automatic transfers to your savings account.
          </p>
          <p>
            The best way to break a bad habit is to make it impractical to do. Increase the friction until you don't even have the option to act. For example, if you waste too much time watching television, unplug it after each use. If you play too many video games, hide the console in a closet after each session. These simple actions increase the friction and make it less likely you'll repeat the bad habit.
          </p>

          <h3 id="law-4" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">The 4th Law: Make It Satisfying</h3>
          <p>
            We are more likely to repeat a behavior when the experience is satisfying. This is the fourth law of behavior change - make it satisfying. What is immediately rewarded is repeated. What is immediately punished is avoided. The human brain evolved to prioritize immediate rewards over delayed rewards.
          </p>
          <p>
            The first three laws of behavior change increase the odds that a behavior will be performed this time. The fourth law increases the odds that a behavior will be repeated next time. It completes the habit loop. But there's a problem: we live in what scientists call a delayed-return environment. Most of the choices we make today will not benefit us immediately.
          </p>
          <p>
            The road less traveled is the road of delayed gratification. If you're willing to wait for the rewards, you'll face less competition and often get a bigger payoff. As the saying goes, the last mile is always the least crowded. But our brains are wired for instant gratification. This is why the consequences of bad habits are delayed while the rewards are immediate, and why the consequences of good habits are immediate while the rewards are delayed.
          </p>
          <p>
            To make good habits satisfying, we need to find a way to get some immediate reward. One solution is to reinforce your behavior right after it happens. For example, if you want to build a savings habit, you could transfer $50 to your savings account and then celebrate immediately by doing something you enjoy. The key is to connect the behavior to a feeling of success right away.
          </p>
          <p>
            Habit tracking is a simple and effective way to make your habits satisfying. The most basic format is to get a calendar and cross off each day you stick with your routine. Don't break the chain. This visual cue creates immediate satisfaction. It's satisfying to cross off each day and see your progress. Plus, habit tracking helps keep you honest. You're less likely to skip when you see the streak you've built.
          </p>
          <p>
            Habit tracking provides immediate satisfaction in three ways: First, it's obvious. You can see your progress and know exactly how you're doing. Second, it's attractive. It's satisfying to watch your progress grow over time. Third, it's satisfying. The mere act of tracking your behavior is satisfying because you get to see yourself making progress.
          </p>
          <p>
            But what happens when you break the chain? This is where the rule "never miss twice" comes in. The first mistake is never the one that ruins you. It is the spiral of repeated mistakes that follows. Missing once is an accident. Missing twice is the start of a new habit. This is a key insight: you don't need to be perfect, you just need to get back on track quickly.
          </p>
          <p>
            We are less likely to repeat a bad habit if it is painful or unsatisfying. This is why accountability partners work so well. An accountability partner can create an immediate cost to not following through. If you don't show up for your morning jog, your friend will call you out. If you don't submit your work on time, your colleague will notice. Knowing that someone is watching can be a powerful motivator.
          </p>
        </div>
      )
    },
    {
      id: 'advanced-tactics',
      title: 'Advanced Tactics: How to Go from Good to Great',
      sections: [
        { id: 'talent', title: 'The Truth About Talent' },
        { id: 'goldilocks', title: 'The Goldilocks Rule' },
        { id: 'downside', title: 'The Downside of Creating Good Habits' },
        { id: 'conclusion', title: 'Conclusion: The Secret to Results That Last' }
      ],
      content: (
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h3 id="talent" className="text-xl text-gray-900 dark:text-white scroll-mt-20">The Truth About Talent</h3>
          <p>
            Genes do not determine your destiny. They determine your areas of opportunity. The areas where you are genetically predisposed to success are the areas where habits are more likely to be satisfying. The people at the top of any competitive field are not only well trained, they are also well suited to the task. And this is why, if you want to be truly great, selecting the right habit is crucial.
          </p>
          <p>
            How do you find the habits that are right for you? The answer is through exploration and experimentation. Try lots of different things. See what feels natural. See what makes you lose track of time. See what comes easily to you but is difficult for others. The goal is to find the intersection of your natural inclinations and what society values.
          </p>
          <p>
            Your genes are like a deck of cards. You don't get to choose the hand you're dealt, but you can choose how to play it. The key is to play a game that favors your strengths. If you can find a more favorable environment, you can transform the situation from one where the odds are against you to one where they are in your favor.
          </p>
          <p>
            Habits are easier to build when they align with your natural abilities. Choose the habit that comes easy to you but hard to others. The more you can make your habits align with your natural inclinations, the more likely you are to stick with them. Work hard on the things that come easy.
          </p>

          <h3 id="goldilocks" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">The Goldilocks Rule</h3>
          <p>
            The Goldilocks Rule states that humans experience peak motivation when working on tasks that are right on the edge of their current abilities. Not too hard. Not too easy. Just right. This is one of the key reasons why games are so engaging. They are designed to push you to the edge of your abilities, where you are neither bored nor overwhelmed.
          </p>
          <p>
            When you're starting a new habit, it's important to keep the behavior easy. But once you've established the habit, you need to continue advancing in small ways. If you want to stay motivated, you need to make sure your habits continue to push you slightly beyond your current abilities. This keeps you engaged and prevents boredom.
          </p>
          <p>
            The greatest threat to success is not failure but boredom. We get bored with habits because they stop offering novelty. When a habit becomes routine, we stop paying attention. We become less sensitive to feedback. And this is where most people go wrong. They think that successful people have some special willpower or discipline that they lack. But the truth is that successful people have learned to love boredom.
          </p>
          <p>
            The only way to become excellent is to be endlessly fascinated by doing the same thing over and over. You have to fall in love with boredom. If you want to be great, you have to embrace the mundane. Elite performers do the boring things that everyone else avoids. They show up even when they don't feel like it. They do the work whether they're motivated or not.
          </p>

          <h3 id="downside" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">The Downside of Creating Good Habits</h3>
          <p>
            The upside of habits is that we can do things without thinking. The downside is that we stop paying attention to little errors. We assume we're doing better than we actually are. When you can do something well enough on autopilot, you stop thinking about how to do it better. This is why mastery requires not only practice, but also deliberate practice.
          </p>
          <p>
            To prevent bad habits from sneaking back in, you need to establish a system for reflection and review. The key is to never let your habits become stale. You need to periodically reflect on your performance and consider how you can improve. This is where habits scorecards and annual reviews come in handy.
          </p>
          <p>
            One way to remain focused on continuous improvement is to establish a practice of reflection and review. Set aside time each year to reflect on your progress and consider what you want to change. Ask yourself: "What went well this year? What didn't go so well? What did I learn?" Use this reflection to adjust your habits and identity for the coming year.
          </p>
          <p>
            The tighter we cling to an identity, the harder it becomes to grow beyond it. One solution is to redefine yourself such that you get to keep important aspects of your identity even if your particular role changes. For example, instead of identifying as a "marathon runner," you could identify as someone who "stays physically active." This gives you more flexibility to adapt as circumstances change.
          </p>

          <h3 id="conclusion" className="text-xl text-gray-900 dark:text-white mt-8 scroll-mt-20">Conclusion: The Secret to Results That Last</h3>
          <p>
            Success is not a goal to reach or a finish line to cross. It is a system to improve, an endless process to refine. In the end, your commitment to the process will determine your progress. The secret to getting results that last is to never stop making improvements.
          </p>
          <p>
            Small habits don't add up. They compound. That's the power of atomic habits. Tiny changes. Remarkable results. If you can get 1 percent better each day for one year, you'll end up thirty-seven times better by the time you're done. And if you can get 1 percent worse each day for one year, you'll decline nearly down to zero.
          </p>
          <p>
            Habits are the compound interest of self-improvement. The same way that money multiplies through compound interest, the effects of your habits multiply as you repeat them. They seem to make little difference on any given day and yet the impact they deliver over the months and years can be enormous.
          </p>
          <p>
            The holy grail of habit formation is not a single 1 percent improvement, but a thousand of them. It's a bunch of atomic habits stacking up, each one a fundamental unit of the overall system. At first, small improvements can seem insignificant. But as you stick with them, you'll reach a tipping point. Suddenly, it feels easier to stick with good habits. The weight of the system is working for you rather than against you.
          </p>
          <p>
            You don't have to be the victim of your environment. You can also be the architect of it. Change your habits, change your identity. Change your identity, change your life. Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity.
          </p>
          <p>
            This is why meaningful change does not require radical change. Small habits can make a meaningful difference by providing evidence of a new identity. And if a tiny change can transform your life, imagine what you can accomplish if you adopted dozens of these small habits.
          </p>
          <p>
            The path to success lies in the daily decisions you make. Will you choose to get 1% better today? Will you show up even when you don't feel like it? Will you embrace boredom and do the work that others avoid? These are the questions that determine your destiny.
          </p>
          <p>
            Remember: you don't rise to the level of your goals, you fall to the level of your systems. Focus on your systems, not your goals. Focus on the process, not the outcome. Focus on who you wish to become, not what you want to achieve. And most importantly, focus on getting 1% better every single day.
          </p>
          <p>
            The journey of a thousand miles begins with a single step. And the journey of building atomic habits begins with a single decision. The decision to show up. The decision to take action. The decision to become the person you wish to be. Start small. Stay consistent. And watch as small habits compound into remarkable results.
          </p>
          <p>
            This is the power of atomic habits. This is how tiny changes lead to remarkable results. This is how you become the best version of yourself. One small habit at a time.
          </p>
        </div>
      )
    }
  ];

  const currentChapter = chapters[currentChapterIndex];
  const isLastChapter = currentChapterIndex === chapters.length - 1;
  const isFirstChapter = currentChapterIndex === 0;

  const toggleChapter = (index: number) => {
    setExpandedChapters(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToNextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
  };

  const handleHighlight = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const text = selection.toString();
      const highlightId = `highlight-${Date.now()}`;
      
      // Store the highlight text
      setHighlights(prev => [...prev, { text, id: highlightId }]);
      
      // Clear selection
      selection.removeAllRanges();
    }
  };

  const removeHighlight = (highlightId: string) => {
    setHighlights(prev => prev.filter(h => h.id !== highlightId));
  };

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  useEffect(() => {
    if (isHighlightMode) {
      document.addEventListener('mouseup', handleHighlight);
    } else {
      document.removeEventListener('mouseup', handleHighlight);
    }
    return () => document.removeEventListener('mouseup', handleHighlight);
  }, [isHighlightMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1a1a] pb-24">
      {/* Compact Header */}
      <div className="bg-white dark:bg-[#0f0f0f] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => onNavigate('summary', bookId || undefined)}
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <ArrowLeft className="mr-1" size={16} />
                Back
              </Button>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-[#E3762B]" />
                <div>
                  <h1 className="text-base text-gray-900 dark:text-white">Atomic Habits</h1>
                  <p className="text-xs text-gray-500 dark:text-gray-500">by James Clear</p>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? 'text-[#E3762B]' : 'text-gray-400'}
            >
              <Star size={18} fill={isFavorite ? 'currentColor' : 'none'} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Cleaner Sidebar */}
        {isSidebarVisible && (
          <aside className="hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] w-72 bg-white dark:bg-[#0f0f0f] border-r border-gray-200 dark:border-gray-800">
            {/* Sidebar Header */}
            <div className="border-b border-gray-200 dark:border-gray-800 p-4">
              {/* Font Size Controls - Centered */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <button
                  onClick={decreaseFontSize}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                >
                  <Type size={14} className="text-gray-600 dark:text-gray-400" />
                </button>
                <span className="text-xs text-gray-500 dark:text-gray-500 min-w-[40px] text-center">{fontSize}px</span>
                <button
                  onClick={increaseFontSize}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                >
                  <Type size={18} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Text Alignment Controls */}
              <div className="flex gap-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-1 mb-3">
                <button
                  onClick={() => setTextAlign('left')}
                  className={`flex-1 flex items-center justify-center p-1.5 rounded-md transition-colors ${
                    textAlign === 'left'
                      ? 'bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                  }`}
                  title="Align left"
                >
                  <AlignLeft size={14} />
                </button>
                <button
                  onClick={() => setTextAlign('justify')}
                  className={`flex-1 flex items-center justify-center p-1.5 rounded-md transition-colors ${
                    textAlign === 'justify'
                      ? 'bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                  }`}
                  title="Justify"
                >
                  <AlignJustify size={14} />
                </button>
              </div>
              
              <div className="flex gap-1 bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
                <button
                  onClick={() => setSidebarView('toc')}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors ${
                    sidebarView === 'toc'
                      ? 'bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <List size={14} />
                  Contents
                </button>
                <button
                  onClick={() => setSidebarView('highlights')}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs transition-colors ${
                    sidebarView === 'highlights'
                      ? 'bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Highlighter size={14} />
                  Highlights ({highlights.length})
                </button>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="overflow-y-auto h-[calc(100%-130px)]">
              {sidebarView === 'toc' ? (
                <nav className="p-3">
                  {chapters.map((chapter, index) => (
                    <div key={chapter.id} className="mb-1">
                      <button
                        onClick={() => {
                          setCurrentChapterIndex(index);
                          toggleChapter(index);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                          currentChapterIndex === index
                            ? 'bg-[#FDC448]/10 text-[#E3762B]'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span className="text-left flex-1">{chapter.title}</span>
                        {chapter.sections.length > 0 && (
                          <ChevronDown
                            size={14}
                            className={`transition-transform flex-shrink-0 ml-1 ${
                              expandedChapters.includes(index) ? '' : '-rotate-90'
                            }`}
                          />
                        )}
                      </button>
                      {/* Sub-sections with indentation */}
                      {expandedChapters.includes(index) && chapter.sections.length > 0 && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {chapter.sections.map((section) => (
                            <button
                              key={section.id}
                              onClick={() => {
                                setCurrentChapterIndex(index);
                                scrollToSection(section.id);
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#E3762B]"
                            >
                              {section.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              ) : (
                <div className="p-3">
                  {highlights.length === 0 ? (
                    <div className="text-center py-8">
                      <Highlighter className="mx-auto text-gray-400 dark:text-gray-600 mb-2" size={32} />
                      <p className="text-sm text-gray-500 dark:text-gray-500">No highlights yet</p>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
                        Click the highlighter button, then select text to highlight
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {highlights.map((highlight) => (
                        <div
                          key={highlight.id}
                          className="relative bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-3 rounded-r-lg group shadow-sm"
                        >
                          <p className="text-xs text-gray-700 dark:text-gray-300 pr-6 leading-relaxed">{highlight.text}</p>
                          <button
                            onClick={() => removeHighlight(highlight.id)}
                            className="absolute top-2 right-2 p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-yellow-200 dark:hover:bg-yellow-800/50 transition-all"
                          >
                            <X size={12} className="text-gray-500 dark:text-gray-400" />
                          </button>
                          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-amber-100/50 to-transparent dark:from-amber-900/10 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className={`flex-1 ${isSidebarVisible ? '' : 'max-w-4xl mx-auto'}`}>
          <div className="px-8 py-12">
            <article style={{ fontSize: `${fontSize}px`, textAlign }} className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-6">{currentChapter.title}</h2>
              {currentChapter.content}
            </article>
          </div>
        </main>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            {!isFirstChapter ? (
              <Button
                onClick={goToPrevChapter}
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                <ChevronRight className="mr-2 rotate-180" size={18} />
                Previous
              </Button>
            ) : (
              <div></div>
            )}

            {/* Chapter Progress */}
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Chapter {currentChapterIndex + 1} of {chapters.length}
              </p>
            </div>

            {/* Next or Complete Button */}
            {isLastChapter ? (
              <Button
                onClick={handleComplete}
                disabled={isCompleted}
                className={`${
                  isCompleted 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900'
                } transition-all`}
              >
                <CheckCircle className="mr-2" size={18} />
                {isCompleted ? 'Completed!' : 'Complete'}
              </Button>
            ) : (
              <Button
                onClick={goToNextChapter}
                className="bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
              >
                Next
                <ChevronRight className="ml-2" size={18} />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Toggle Sidebar Button - Fixed Position */}
      <button
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
        className="fixed bottom-24 left-6 z-50 p-3 bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
        title={isSidebarVisible ? 'Hide sidebar' : 'Show sidebar'}
      >
        {isSidebarVisible ? (
          <PanelLeftClose size={20} className="text-gray-600 dark:text-gray-400" />
        ) : (
          <PanelLeftOpen size={20} className="text-gray-600 dark:text-gray-400" />
        )}
      </button>

      {/* Floating Highlight Button - Fixed Position */}
      <button
        onClick={() => setIsHighlightMode(!isHighlightMode)}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#FDC448] to-[#E3762B] rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center ${
          isHighlightMode ? 'ring-4 ring-[#FDC448]/30 scale-105' : ''
        }`}
        title={isHighlightMode ? 'Click to disable highlight mode' : 'Click to enable highlight mode'}
      >
        <Highlighter size={24} className="text-white" />
      </button>
    </div>
  );
}