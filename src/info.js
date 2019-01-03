const info = [
        {
            name: "Izuku Midoriya",
            class: "izuku",
            quotes: [
               `My motivation might seem trivial compared to yours, but I can't lose either.  I have to live up to the hopes of those who supported me.`,
                `I have to work harder than anyone else to make it! I'll never catch up otherwise...! I want to be like you...! Like you. The strongest hero.`,
                `I'm not gonna be your worthless punching bag Deku forever... Kacchan. I'm... I'm the Deku who always does his best!`,
                `All men are not created equal. This was the reality I learned about society at the young age of four. And that was my first and last setback.`,
                `Sometimes I do feel like I'm a failure. Like there's no hope for me. But even so, I'm not gonna give up. Ever!`
            ]
        },
        {
            name: "Katsuki Bakugo",
            class: "bakugo",
            quotes: [
                `Stop talking. I will win. That's... what heroes do.`,
                `I’m gonna beat you all. Enjoy your win. It’ll never happen again, Dammit!`,
                `If all you ever do is look down on people, you won't be able to recognize your own weaknesses.`,
                `Needless to say... I'll be a hero that surpasses even you!`                
            ]
        },
        {
            name: "All Might",
            class: "all-might",
            quotes: [
                `If you feel yourself hitting up against your limit remember for what cause you clench your fists... remember why you started down this path, and let that memory carry you beyond your limit.`,
                `It's fine now. Why? Because I am here!`,
                `Whether you win or lose... You can always come out ahead by learning from the experience.`,
                `When there's nothing to be gained, rising to the challenge at those times... is surely the mark... of a true hero!!`,
                `You can become a hero!`
            ]
        },
        {
            name: "Shoto Todoroki",
            class: "todoroki",
            quotes: [
                `If you wanna stop this, then stand up! Because I've got one thing to say to you! Never forget who you want to become!`,
                `Should we have let people die, all in the name of your “law”?! Isn’t it a hero’s job to save people?`,
                `Raising me as a hero who could exceed All Might, just to fulfill his own ambitions. I hate it! Being no more than a tool for that human garbage. As I remember it, mom was always crying... "I can't stand to see that left side of yours"... She said, before throwing scalding water in my face.`,
                `Get a hold of yourself. You're an adult aren't you?`
            ]
        },
        {
            name: "Naruto Uzumaki",
            class: "naruto",
            quotes: [
                `If you don’t like the hand that fate’s dealt you with, fight for a new one!`,
                `Believe it!`,
                `While you’re alive, you need a reason for your existence. Being unable to find one is the same as being dead.`,
                `I don’t understand what’s going on, but I’ll just pretend that I do.`,
                `I won’t run away anymore… I won’t go back on my word… That is my ninja way!`
            ]
        },
        {
            name: "Tatsuhiro Satou",
            class: "satou",
            quotes: [
                `Being alone is best. I mean, it's true, isn't it? In the end you'll be absolutely alone; therefore, being alone is natural. If you accept that, nothing bad can happen. That's why I shut myself away in my six-mat one-room apartment.`,
                `No human beings, regardless of who they might be, want to look directly at their own shortcomings.`,
                `Because of our broken instincts, we are in pain. We continue living in pain, because our instincts have been twisted by reason. So, what are we supposed to do? Should we abandon knowledge? Throw away reason? In any event, that wouldn't be possible. For better or for worse, we ate the fruit of knowledge long, long ago.`,
                `It's natural for a person to deny he's a failure as a human being. That's why he searches for somebody who is more miserable than himself.`,
                `If you don't see her, you won't fall in love. If you don't fall in love, you won't get hurt.`
            ]
        },
        {
            name: "Mikasa Ackermann",
            class: "mikasa",
            quotes: [
                `This world is cruel. It is also very beautiful.`,
                `If I can't, then I'll just die.  But if I win I live.  Unless I fight, I cannot win.`,
                `Once I’m dead, I won’t even be able to remember you. So I’ll win, no matter what. I’ll live, no matter what!`,
                `If you think it’s natural for people to sacrifice their own lives to save others, surely you understand that sometimes a single death can save many lives.`,
                `I wonder, what kind of jokes can a corpse tell?`
            ]
        },
        {
            name: "Eren Jaeger",
            class: "eren",
            quotes: [
                `We’re born free. All of us. Free. Some don’t believe it, some try to take it away. To hell with them!`,
                `Nothing can suppress a human’s curiosity.`,
                `If you win, you live. If you lose, you die. If you don’t fight, you can’t win!`,
                `No matter how messed up things get, you can always figure out the best solution.`,
                `What is the point if those with the means and power do not fight?`
            ]
        },
        {
            name: "L",
            class: "l",
            quotes: [
                `He who strikes first, wins.`,
                `Whatever the reason may be, murder is always wrong.`,
                `Let’s value our lives.`,
                `No matter how gifted you are… You, alone, cannot change the world.`,
                `Learn to treasure your life because unfortunately, it can be taken away from you anytime.`
            ]
        },
        {
            name: "Misaki Nakahara",
            class: "misaki",
            quotes: [
                `People who neglect to make efforts or who don't take any actions at all are always the ones who dream some day they will suddenly become wildly successful.`
            ]
        },
        {
            name: "Edward Elric",
            class: "edward",
            quotes: [
                `Stand up and walk. Keep moving forward. You've got two good legs. So get up and use them. You're strong enough to make your own path.`,
                `Even your gravest mistakes shouldn't stop you from moving forward.`,
                `Water, 35 litres. Carbon, 20 kg. Ammonia, 4 litres. Lime, 1.5 kg. Phosphorus, 800 g. Salt, 250 g. Niter, 100 g. Sulphur, 80 g. Fluoride, 7.5 g. Iron, 5 g. Silicon, 3g. And fifteen other elements. Those are the elements to make an average adult human body. You can buy these elemental ingredients at the market with the pocket money of a child. Humans are made so cheaply.`,
                `"Like I always say, can't find a door? Make your own.`,
                `I will do what I can, even if my chance of passing is minuscule, if that will allow me to move forward.`
            ]
        },
        {
            name: "Kakashi Hatake",
            class: "kakashi",
            quotes: [
                `To know what is right and choose to ignore it is the act of a coward.`,
                `Hello students, today I got lost on the road of life.`,
                `Some people want power and they get mad when they don't get it. They take their fury out on everyone else. You don't want it, it becomes you.`,
                `The next generation will always surpass the previous one. It’s one of the never-ending cycles in life.`,
                `Those who break the rules are scum… but those who abandon their friends are worse than scum.`
            ]
        },
        {
            name: "Violet Evergarden",
            class: "violet",
            quotes: [
                `I want to know what “I love you” means…`,
                `No letter that could be sent deserves to go undelivered.`
            ]
        }
     ]


     export default info;
