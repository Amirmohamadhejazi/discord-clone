import {
    avatar_me,
    avatarBardia,
    avatarDany,
    avatarErfan,
    avatarMont,
    avatarNereix,
    avatarShayan,
    avatarSobhan,
    avatarTheCode,
    avatarYounes,
    bannerTheCode,
    Kekw7_emoji,
    Pedarsag_emoji,
    PepeThinking_emoji,
    PES_Melt_emoji,
    Speak_emoji,
    Troll_emoji
} from '@public/images'

export const static_data_menu = [
    { name: 'Online', id: 1 },
    { name: 'All', id: 2 },
    { name: 'Pending', id: 3 },
    // { name: 'Suggestions', id: 4 },
    { name: 'Blocked', id: 4 }
]
export const emoji_data = [
    { name: 'Kekw7', img: Kekw7_emoji.src },
    { name: 'Pepe_Thinking', img: PepeThinking_emoji.src },
    { name: 'Pes_melt', img: PES_Melt_emoji.src },
    { name: 'speak', img: Speak_emoji.src },
    { name: 'troll', img: Troll_emoji.src },
    { name: 'pedarsag', img: Pedarsag_emoji.src }
]

// , ,
export const static_data_me = {
    displayName: 'Amirmohamad',
    colors: ['black', 'hsla(257, 100%, 26.3%, 1)'],

    username: 'amirmohamad',
    created: 'May 11, 2015',
    avatar: avatar_me,
    useId: '991284573726060615',
    status: 'online',
    badges: [
        { name: 'hypeSquad-events' },
        { name: 'bot-developer' },
        { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
        { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 18 },
        { name: 'id', userName: 'Amirmohamad#0001' }
    ],
    social: [
        { name: 'Amirmohamad9731', type: 'spotify', link: 'https://open.spotify.com/user/3sj5vwqgdthqmrernetdo8lld' },
        { name: 'Amirmohamad', type: 'steam', link: 'https://steamcommunity.com/profiles/76561198073694544' },
        { name: 'amirmohamad_hr', type: 'twitch', link: 'https://www.twitch.tv/amirmohamad_hr' },
        { name: 'amirmohamad_hr', type: 'instagram', link: 'https://www.instagram.com/amirmohamad_hr' },
        { name: 'amirmohamadhr', type: 'twitter', link: 'https://twitter.com/amirmohamadhr' }
    ],
    me: true,
    about: 'i need another life with life soda'
}
//  Moderator Program Alumni Badge - HypeSquad Events - hypeSquad
//  bugHunter - Active developer - bot developer
//  Early Supporter - nit - boost - id
export const static_data_social = [
    {
        displayName: 'TriTium',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],
        username: 'thetritium',
        created: 'May 12, 2015',
        avatar: avatarShayan,
        useId: '214280633692717056',
        status: 'doNotDisturb',
        badges: [
            { name: 'moderator-program' },
            { name: 'hypeSquad-events' },
            { name: 'bot-developer' },
            { name: 'early-supporter' },
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'tritium#0001' }
        ],
        social: [
            {
                name: 'TriTium-SS',
                type: 'spotify',
                link: 'https://open.spotify.com/user/4h86kvn0oq4b2irftxds2c3ob'
            }
        ],
        about: 'Always stay curious and keep learning!'
    },
    {
        displayName: '家 𝒀𝒐𝒖𝒏𝒆𝒔 𝑯𝒊𝒅𝒅𝒆𝒏',
        colors: ['hsla(340, 91.7%, 23.7%, 1)', 'black'],

        username: 'younes_hidden',
        created: 'May 13, 2015',
        avatar: avatarYounes,
        useId: '218498762350395405',
        badges: [
            { name: 'bot-developer' },
            { name: 'early-supporter' },
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'younes#0001' }
        ],
        status: 'online',
        social: [
            {
                name: 'Younes_XD',
                type: 'spotify',
                link: 'https://open.spotify.com/user/kczxhdbz83hq20mz3qox60ejj'
            }
        ],
        about: 'Success is a journey, not a destination. Enjoy the process!'
    },
    {
        displayName: '- Erfan AtRisk',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],

        username: 'atri3k',
        created: 'May 11, 2016',
        avatar: avatarErfan,
        useId: '185842812888023040',
        status: 'idle',
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'erfan#0001' }
        ],
        about: 'Take risks and embrace challenges; that’s where growth happens.'
    },
    {
        displayName: '- Bardia',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],

        username: 'bardiaxv',
        created: 'May 11, 2016',
        avatar: avatarBardia,
        useId: '180204915942096896',
        status: 'doNotDisturb',
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'bardia#0001' }
        ],
        about: 'Balance is the key to a happy and successful life.'
    },
    {
        displayName: 'Mont',
        colors: ['black', '#013c5e'],

        username: 'freezemont',
        created: 'May 11, 2016',
        avatar: avatarMont,
        useId: '505051488779894794',
        status: 'doNotDisturb',
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'freezemont#0001' }
        ],
        about: "Don’t be afraid to fail; it's a stepping stone to success."
    },
    {
        displayName: '- The.Code',
        username: 'thecode',
        created: 'May 11, 2016',
        avatar: avatarTheCode,
        banner: bannerTheCode,
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'radin#0001' }
        ],
        colors: ['hsla(222, 100%, 30%, 1)', 'hsla(286, 70.9%, 41.8%, 1)'],
        status: 'doNotDisturb',
        about: 'Coding is like  solving puzzles; enjoy the problem-solving process.',
        social: [
            {
                name: 'The Code',
                type: 'spotify',
                link: 'https://open.spotify.com/user/kwsb9pnyi0tud8juzpthq39w1'
            }
        ],
        useId: '179939072075235329'
    },
    {
        displayName: 'NothingToSay',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],

        username: 'nereix',
        created: 'May 11, 2016',
        avatar: avatarNereix,
        useId: '1095366826797576344',
        status: 'doNotDisturb',
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'reza#0001' }
        ],
        about: 'Find joy in the simple moments of life.'
    },
    {
        displayName: 'خــودِ دَنــی',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],

        username: 'daniyartune',
        created: 'May 11, 2016',
        avatar: avatarDany,
        useId: '325301808543170569',
        status: 'offline',
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 24 },
            { name: 'id', userName: 'dany#0001' }
        ],
        about: 'Disconnect to reconnect; take time for yourself.'
    },
    {
        displayName: '!sobhan!',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],

        username: 'sobhan002',
        created: 'May 11, 2016',
        avatar: avatarSobhan,
        useId: '510109656098537475',
        status: 'online',
        about: 'Surround yourself with positive energy and like-minded people.',
        badges: [
            { name: 'nitro', type: 'default', timeNitro: '21 july 2021' },
            { name: 'nitro', type: 'boost', timeBoost: '21 july 2021', badgeLevel: 9 },
            { name: 'id', userName: 'sobhan#0001' }
        ]
    }
]
// :Kekw7:
// :Pepe_Thinking:
export const static_data_directs = [
    // messagesDirect sort by this date

    {
        personId: '214280633692717056',
        lastUpdateData: '',
        messages: [
            {
                sender: 'audience',
                message: 'hi where are you Amir?',
                messageId: '1',
                date: ''
            },
            {
                sender: 'audience',
                message: 'im in front of your home where are you? we want buy ice cream 🥶',
                messageId: '2',
                date: ''
            },
            { sender: 'me', message: `hi doesn't feel like having fun`, messageId: '3', date: '' },
            {
                sender: 'audience',
                message: `younes is here, come down`,
                messageId: '4',
                date: ''
            },
            {
                sender: 'audience',
                message: `please amir`,
                messageId: '5',
                date: ''
            },
            {
                sender: 'audience',
                message: `come on amir`,
                messageId: '6',
                date: ''
            },
            {
                sender: 'me',
                message: `ok shayan ❤`,
                messageId: '7',
                date: ''
            },
            {
                sender: 'audience',
                message: 'Hey there! How about a relaxing day at the beach this weekend?',
                messageId: '1',
                date: '2024-03-02T09:15:00'
            },
            {
                sender: 'me',
                message: 'That sounds like a great idea! I could use some sunshine and waves.',
                messageId: '2',
                date: '2024-03-02T09:20:00'
            },
            {
                sender: 'audience',
                message: "Awesome! I'll bring some snacks. What's your favorite beach activity?",
                messageId: '3',
                date: '2024-03-02T09:25:00'
            },
            {
                sender: 'me',
                message: "I love building sandcastles! It's so therapeutic.",
                messageId: '4',
                date: '2024-03-02T09:30:00'
            },
            {
                sender: 'audience',
                message: 'Haha, that sounds fun! We can have a sandcastle-building competition.',
                messageId: '5',
                date: '2024-03-02T09:35:00'
            },
            {
                sender: 'me',
                message: 'Challenge accepted! Winner gets a virtual high-five.',
                messageId: '6',
                date: '2024-03-02T09:40:00'
            },
            {
                sender: 'audience',
                message: 'Deal! Looking forward to a day of sun, sea, and sandcastles!',
                messageId: '7',
                date: '2024-03-02T09:45:00'
            },
            {
                sender: 'audience',
                message: 'Hey, I found this cool board game. How about a game night at my place?',
                messageId: '8',
                date: '2024-03-03T18:30:00'
            },
            {
                sender: 'me',
                message: "Sounds like a blast! I'm in. What game are we playing?",
                messageId: '9',
                date: '2024-03-03T18:35:00'
            },
            {
                sender: 'audience',
                message: 'I was thinking of trying out "Codenames." It\'s a word game. Have you played it before?',
                messageId: '10',
                date: '2024-03-03T18:40:00'
            },
            {
                sender: 'me',
                message: 'I love Codenames! Count me in. Let the word games begin!',
                messageId: '11',
                date: '2024-03-03T18:45:00'
            },
            {
                sender: 'audience',
                message: "Awesome! I'll bring some snacks and drinks. Get ready for a night of laughter and strategy!",
                messageId: '12',
                date: '2024-03-03T18:50:00'
            },
            {
                sender: 'me',
                message: "Can't wait! It's going to be a legendary game night!",
                messageId: '13',
                date: '2024-03-03T18:55:00'
            },
            {
                sender: 'audience',
                message: 'Hey, I stumbled upon a new relaxation playlist. Want me to share it with you?',
                messageId: '14',
                date: '2024-03-04T12:00:00'
            },
            {
                sender: 'me',
                message: 'Sure, I could use some new tunes. Send it over!',
                messageId: '15',
                date: '2024-03-04T12:05:00'
            },
            {
                sender: 'audience',
                message: "Here's the link. It's a mix of chill beats and calming melodies. Enjoy!",
                messageId: '16',
                date: '2024-03-04T12:10:00'
            },
            {
                sender: 'me',
                message: "Thanks! I'll give it a listen during my afternoon break. You have great taste!",
                messageId: '17',
                date: '2024-03-04T12:15:00'
            },
            {
                sender: 'audience',
                message:
                    'Hey, I heard about this new comedy show in town. Are you up for some laughter therapy this weekend?',
                messageId: '18',
                date: '2024-03-05T20:00:00'
            },
            {
                sender: 'me',
                message: "Absolutely! I could use a good laugh. Count me in. What's the name of the show?",
                messageId: '19',
                date: '2024-03-05T20:05:00'
            },
            {
                sender: 'audience',
                message: "It's called 'Comic Relief Night.' Heard it's hilarious! Let's grab some tickets.",
                messageId: '20',
                date: '2024-03-05T20:10:00'
            },
            {
                sender: 'me',
                message: "Sounds like a plan! I'm ready for a night filled with laughter and good company.",
                messageId: '21',
                date: '2024-03-05T20:15:00'
            },
            {
                sender: 'audience',
                message:
                    "Hey, have you tried meditation? I found this amazing app with guided sessions. It's been a game-changer!",
                messageId: '22',
                date: '2024-03-06T08:30:00'
            },
            {
                sender: 'me',
                message: "I've been meaning to try meditation. What's the app called? I'm open to suggestions.",
                messageId: '23',
                date: '2024-03-06T08:35:00'
            },
            {
                sender: 'audience',
                message: "It's called 'Mindful Moments.' Give it a shot, and let me know how you feel after a session.",
                messageId: '24',
                date: '2024-03-06T08:40:00'
            },
            {
                sender: 'me',
                message: "Thanks for the recommendation! I'll download it and give it a try tonight.",
                messageId: '25',
                date: '2024-03-06T08:45:00'
            },
            {
                sender: 'audience',
                message:
                    'Hey, I just got a new hammock for my backyard. How about a lazy Sunday afternoon hanging out and enjoying the breeze?',
                messageId: '26',
                date: '2024-03-07T14:00:00'
            },
            {
                sender: 'me',
                message: "That sounds incredibly relaxing! Count me in. I'll bring some snacks.",
                messageId: '27',
                date: '2024-03-07T14:05:00'
            },
            {
                sender: 'audience',
                message: 'Perfect! Looking forward to a chill day of hammock hangs and good company.',
                messageId: '28',
                date: '2024-03-07T14:10:00'
            },
            {
                sender: 'audience',
                message:
                    'Hey, have you ever tried a virtual reality game? I found this mind-blowing VR escape room we can check out.',
                messageId: '29',
                date: '2024-03-08T19:30:00'
            },
            {
                sender: 'me',
                message:
                    "That sounds exciting! I've never tried VR before. Let's do it! Where can we find this escape room?",
                messageId: '30',
                date: '2024-03-08T19:35:00'
            },
            {
                sender: 'audience',
                message:
                    "I'll send you the link. It's called 'Virtual Quest.' Get ready for a mind-bending experience!",
                messageId: '31',
                date: '2024-03-08T19:40:00'
            },
            {
                sender: 'me',
                message: "Awesome! I can't wait to dive into the virtual world with you. Thanks for sharing!",
                messageId: '32',
                date: '2024-03-08T19:45:00'
            },
            {
                sender: 'audience',
                message: 'Hey, heard about a new sushi place in town. How about a sushi night this Friday?',
                messageId: '33',
                date: '2024-03-09T21:00:00'
            },
            {
                sender: 'me',
                message: "I'm always up for sushi! Count me in. What's the name of the place?",
                messageId: '34',
                date: '2024-03-09T21:05:00'
            },
            {
                sender: 'audience',
                message: "It's called 'Sushi Haven.' I heard they have a unique dragon roll you've got to try!",
                messageId: '35',
                date: '2024-03-09T21:10:00'
            },
            {
                sender: 'me',
                message:
                    "Sounds delicious! I'm already looking forward to our sushi adventure. Thanks for the recommendation!",
                messageId: '36',
                date: '2024-03-09T21:15:00'
            },
            {
                sender: 'audience',
                message: 'Hey, feeling stressed lately? How about a spa day this weekend to relax and unwind?',
                messageId: '37',
                date: '2024-03-10T12:30:00'
            },
            {
                sender: 'me',
                message: 'That sounds like exactly what I need! A spa day it is. Any specific spa you have in mind?',
                messageId: '38',
                date: '2024-03-10T12:35:00'
            },
            {
                sender: 'audience',
                message:
                    "I recommend 'Tranquil Retreat Spa.' Their massages are heavenly. Book a treatment, and let's pamper ourselves!",
                messageId: '39',
                date: '2024-03-10T12:40:00'
            },
            {
                sender: 'me',
                message:
                    "Perfect! I'll book a massage and join you for a day of relaxation. Thanks for the spa suggestion!",
                messageId: '40',
                date: '2024-03-10T12:45:00'
            },
            {
                sender: 'audience',
                message: 'Hey, 🌟 I found this cool board game. How about a game night at my place? 🎲',
                messageId: '41',
                date: '2024-03-11T19:00:00'
            },
            {
                sender: 'me',
                message: "Sounds like a blast! I'm in. What game are we playing? 🤔",
                messageId: '42',
                date: '2024-03-11T19:05:00'
            },
            {
                sender: 'audience',
                message: 'I was thinking of trying out "Codenames." It\'s a word game. Have you played it before? 🕵️‍♂️',
                messageId: '43',
                date: '2024-03-11T19:10:00'
            },
            {
                sender: 'me',
                message: 'I love Codenames! Count me in. Let the word games begin! 🏆',
                messageId: '44',
                date: '2024-03-11T19:15:00'
            },
            {
                sender: 'audience',
                message:
                    "Awesome! I'll bring some snacks and drinks. Get ready for a night of laughter and strategy! 🍿🥤",
                messageId: '45',
                date: '2024-03-11T19:20:00'
            },
            {
                sender: 'me',
                message: "Can't wait! It's going to be a legendary game night! 🎉",
                messageId: '46',
                date: '2024-03-11T19:25:00'
            },
            {
                sender: 'audience',
                message: 'Hey, 🎤 I stumbled upon a new relaxation playlist. Want me to share it with you? 🎶',
                messageId: '47',
                date: '2024-03-12T11:30:00'
            },
            {
                sender: 'me',
                message: 'Sure, I could use some new tunes. Send it over! 📲',
                messageId: '48',
                date: '2024-03-12T11:35:00'
            },
            {
                sender: 'audience',
                message: "Here's the link. It's a mix of chill beats and calming melodies. Enjoy! 🎧😌",
                messageId: '49',
                date: '2024-03-12T11:40:00'
            },
            {
                sender: 'me',
                message: "Thanks! I'll give it a listen during my afternoon break. You have great taste! 👌",
                messageId: '50',
                date: '2024-03-12T11:45:00'
            },
            {
                sender: 'me',
                message: ':speak:',
                messageId: '49',
                date: '2024-03-12T11:40:00'
            },
            {
                sender: 'audience',
                message: ':troll:',
                messageId: '49',
                date: '2024-03-12T11:40:00'
            }
        ]
    },
    {
        personId: '218498762350395405',
        lastUpdateData: '',
        messages: [
            {
                sender: 'audience',
                message: 'hi Amir this is fun! dont cry brother 😢',
                messageId: '1',
                date: ''
            },
            {
                sender: 'audience',
                message: 'dont delete your ac .. give me your ac dont delete 😂😂😂😂 ',
                messageId: '2',
                date: ''
            },
            {
                sender: 'me',
                message: 'hey life is dead',
                messageId: '3',
                date: ''
            },
            {
                sender: 'me',
                message: 'Feeling so stressed today. 😞',
                messageId: '1',
                date: '2024-03-02T10:30:00'
            },
            {
                sender: 'audience',
                message: 'Hey, I totally get it. Have you tried taking a break?',
                messageId: '2',
                date: '2024-03-02T10:35:00'
            },
            {
                sender: 'me',
                message: 'Yeah, but nothing seems to be working. Thinking about lighting up a cigarette.',
                messageId: '3',
                date: '2024-03-02T10:40:00'
            },
            {
                sender: 'audience',
                message: "Smoking won't solve the problem, mate. It might make you feel worse.",
                messageId: '4',
                date: '2024-03-02T10:45:00'
            },
            {
                sender: 'me',
                message: "I know, but it's hard to resist sometimes.",
                messageId: '5',
                date: '2024-03-02T10:50:00'
            },
            {
                sender: 'audience',
                message: 'Try doing something you enjoy instead of smoking. It might help improve your mood.',
                messageId: '6',
                date: '2024-03-02T10:55:00'
            },
            {
                sender: 'me',
                message: "You're right. I'll give it a shot. Thanks for the advice.",
                messageId: '7',
                date: '2024-03-02T11:00:00'
            },
            {
                sender: 'audience',
                message: 'Glad I could help! What are some activities you enjoy?',
                messageId: '8',
                date: '2024-03-02T11:05:00'
            },
            {
                sender: 'me',
                message: "I used to love playing guitar, but it's been a while since I picked it up.",
                messageId: '9',
                date: '2024-03-02T11:10:00'
            },
            {
                sender: 'audience',
                message: "Maybe it's time to dust off that guitar and play some tunes. It could be therapeutic!",
                messageId: '10',
                date: '2024-03-02T11:15:00'
            },
            {
                sender: 'me',
                message: "You're right. I'll do that tonight. Thanks for the motivation!",
                messageId: '11',
                date: '2024-03-02T11:20:00'
            },
            {
                sender: 'audience',
                message: 'No problem! Let me know how it goes. Music has a way of lifting spirits.',
                messageId: '12',
                date: '2024-03-02T11:25:00'
            },
            {
                sender: 'me',
                message:
                    "Absolutely. It's been ages since I played. I'll share a video with you if I manage to play something decent.",
                messageId: '13',
                date: '2024-03-02T11:30:00'
            },
            {
                sender: 'audience',
                message:
                    'Looking forward to it! Music is a great way to connect with emotions. Enjoy your time with the guitar!',
                messageId: '14',
                date: '2024-03-02T11:35:00'
            },
            {
                sender: 'me',
                message: 'Just picked up the guitar. It feels strange yet nostalgic.',
                messageId: '15',
                date: '2024-03-02T19:00:00'
            },
            {
                sender: 'audience',
                message: "That's awesome! What song are you going to play first?",
                messageId: '16',
                date: '2024-03-02T19:05:00'
            },
            {
                sender: 'me',
                message: "Thinking of starting with some classic rock, maybe 'Stairway to Heaven.'",
                messageId: '17',
                date: '2024-03-02T19:10:00'
            },
            {
                sender: 'audience',
                message: 'Great choice! A timeless classic. Go for it!',
                messageId: '18',
                date: '2024-03-02T19:15:00'
            },
            {
                sender: 'me',
                message: 'Here goes nothing! 🎸',
                messageId: '19',
                date: '2024-03-02T19:20:00'
            },
            {
                sender: 'audience',
                message: "Wow, that was amazing! You've still got it!",
                messageId: '20',
                date: '2024-03-02T19:25:00'
            },
            {
                sender: 'me',
                message: 'Thanks! Playing really lifted my mood. Should do this more often.',
                messageId: '21',
                date: '2024-03-02T19:30:00'
            },
            {
                sender: 'audience',
                message:
                    'Absolutely! Music has a magical way of making us feel better. Any other songs you plan to play?',
                messageId: '22',
                date: '2024-03-02T19:35:00'
            },
            {
                sender: 'me',
                message: 'Thinking of diving into some blues next. Any recommendations?',
                messageId: '23',
                date: '2024-03-02T19:40:00'
            },
            {
                sender: 'audience',
                message: "How about 'Stormy Monday' by T-Bone Walker? It's a soulful blues classic.",
                messageId: '24',
                date: '2024-03-02T19:45:00'
            },
            {
                sender: 'me',
                message: "Sounds perfect. I'll give it a shot. Thanks for the suggestion!",
                messageId: '25',
                date: '2024-03-02T19:50:00'
            },
            {
                sender: 'me',
                message: ':Kekw7:',
                messageId: '25',
                date: '2024-03-02T19:50:00'
            }
        ]
    },
    {
        personId: '505051488779894794',
        lastUpdateData: '',
        messages: [
            { sender: 'audience', message: 'Amir what are you doing?', messageId: '1', date: '' },
            { sender: 'audience', message: 'voice?', messageId: '2', date: '' },
            { sender: 'me', message: 'ok i call you in dm!', messageId: '3', date: '' },
            { sender: 'audience', message: '😔😔😔😔', messageId: '4', date: '' },
            {
                sender: 'audience',
                message: 'Hey, did you catch the latest episode of the science fiction series last night?',
                messageId: '21',
                date: '2024-03-02T14:15:30'
            },
            {
                sender: 'me',
                message: 'Unfortunately, I missed it. How was it? Any mind-blowing plot twists?',
                messageId: '22',
                date: '2024-03-02T14:16:15'
            },
            {
                sender: 'audience',
                message:
                    'Absolutely! The plot took an unexpected turn, and the special effects were out of this world. You have to watch the rerun.',
                messageId: '23',
                date: '2024-03-02T14:17:00'
            },
            {
                sender: 'me',
                message: "Sounds intriguing! I'll catch up on it tonight. Thanks for the heads up!",
                messageId: '24',
                date: '2024-03-02T14:18:20'
            },
            {
                sender: 'audience',
                message: 'Hey, have you read any good books lately? I need some recommendations.',
                messageId: '25',
                date: '2024-03-02T14:19:10'
            },
            {
                sender: 'me',
                message:
                    "Absolutely! If you're into mysteries, 'The Silent Observer' is a gripping read. For fantasy, 'Realm of Dreams' is fantastic.",
                messageId: '26',
                date: '2024-03-02T14:20:00'
            },
            {
                sender: 'audience',
                message: "Thanks! I'll add them to my reading list. Can't wait to dive into a good story.",
                messageId: '27',
                date: '2024-03-02T14:21:30'
            },
            {
                sender: 'me',
                message: "You're welcome! Happy reading! 📚",
                messageId: '28',
                date: '2024-03-02T14:22:15'
            },
            {
                sender: 'audience',
                message: "Hey, I heard you're into photography. Any tips for capturing stunning landscapes?",
                messageId: '29',
                date: '2024-03-02T14:23:00'
            },
            {
                sender: 'me',
                message:
                    'Absolutely! Use the golden hour for soft and warm lighting, and experiment with different angles. Patience is key for the perfect shot!',
                messageId: '30',
                date: '2024-03-02T14:24:20'
            },
            {
                sender: 'audience',
                message: 'Ammirrrrr',
                messageId: '29',
                date: '2024-03-02T14:23:00'
            },
            {
                sender: 'audience',
                message: ':pedarsag:',
                messageId: '29',
                date: '2024-03-02T14:23:00'
            }
        ]
    },
    {
        personId: '179939072075235329',
        lastUpdateData: '',
        messages: [
            { sender: 'audience', message: 'Hi amir are you have ac 2016 for sell?', messageId: '1', date: '' },
            { sender: 'me', message: '2016: 50$', messageId: '2', date: '' },
            { sender: 'me', message: '2017: 45$', messageId: '3', date: '' },
            { sender: 'me', message: '2018: 30$', messageId: '4', date: '' },
            { sender: 'me', message: '2019: 10$', messageId: '5', date: '' },
            { sender: 'audience', message: 'this is very expensive brooo', messageId: '6', date: '' },
            { sender: 'me', message: 'give my money brother', messageId: '5', date: '' },
            { sender: 'me', message: ':Pepe_Thinking:', messageId: '5', date: '' },
            { sender: 'audience', message: 'wait im not a scamer 😔', messageId: '5', date: '' }
        ]
    },
    {
        personId: '180204915942096896',
        lastUpdateData: '',
        messages: [
            {
                sender: 'audience',
                message: 'hi where are you Amir? :Kekw7:',
                messageId: '1',
                date: ''
            },
            {
                sender: 'me',
                message: 'hi how are you brother?? :Pepe_Thinking: i need some bug to work out',
                messageId: '2',
                date: ''
            },
            {
                sender: 'audience',
                message: 'hhh nice :Pepe_Thinking:',
                messageId: '1',
                date: ''
            },
            {
                sender: 'audience',
                message: 'i need siegal ',
                messageId: '1',
                date: ''
            },
            {
                sender: 'audience',
                message: ':Pes_melt:',
                messageId: '1',
                date: ''
            }
        ]
    }
]
