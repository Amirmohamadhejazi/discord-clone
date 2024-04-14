import { type TCriticalAnyType } from '@core/types/common/critical-any'

import {
    avatar_me,
    avatarBardia,
    avatarDany,
    avatarErfan,
    avatarJockieMusic,
    avatarMont,
    avatarNereix,
    avatarShayan,
    avatarTheCode,
    avatarYounes,
    bannerTheCode,
    post_img1,
    post_img2,
    post_img3,
    post_img4,
    Transylvania,
    Transylvania_banner,
    TransylvaniaImg
} from '@public/images'

export const static_data_roles_server = [
    { name: 'Dracula', color: '#969292', roleId: '942037639765311509' },
    { name: 'Griffin', color: '#969292', roleId: '952907129034014740' },
    { name: 'Bax-------------', color: '#969292', roleId: '1215696573129031712' },
    { name: 'Hidden Family', color: '#969292', roleId: '1215998618419462266' },
    { name: 'Draven Family', color: '#969292', roleId: '1215998618503352360' },
    { name: 'Zenyx Family', color: '#969292', roleId: '1216057420804260040' },
    { name: 'Ares Family', color: '#969292', roleId: '1216057418841194616' },
    { name: '〢𝐌𝐀𝐑𝐓𝐘  ————————', color: '#0fff00', roleId: '1217199704769822803' },
    { name: 'Ban', color: '#da0606', roleId: '1217565199989604504' }
]

export const static_data_users_servers = [
    {
        name: 'Amirmohamad',
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
            {
                name: 'Amirmohamad9731',
                type: 'spotify',
                link: 'https://open.spotify.com/user/3sj5vwqgdthqmrernetdo8lld'
            },
            { name: 'Amirmohamad', type: 'steam', link: 'https://steamcommunity.com/profiles/76561198073694544' },
            { name: 'amirmohamad_hr', type: 'twitch', link: 'https://www.twitch.tv/amirmohamad_hr' },
            { name: 'amirmohamad_hr', type: 'instagram', link: 'https://www.instagram.com/amirmohamad_hr' },
            { name: 'amirmohamadhr', type: 'twitter', link: 'https://twitter.com/amirmohamadhr' }
        ],
        me: true,
        about: 'i need another life with life soda',
        roles: ['952907129034014740', '1215998618503352360']
    },
    {
        name: 'TriTium',
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
        about: 'Always stay curious and keep learning!',
        roles: ['942037639765311509', '1215998618503352360']
    },
    {
        name: '家 𝒀𝒐𝒖𝒏𝒆𝒔 𝑯𝒊𝒅𝒅𝒆𝒏',
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
        about: 'Success is a journey, not a destination. Enjoy the process!',
        roles: ['942037639765311509'],
        ownerServer: true
    },
    {
        name: '- Erfan AtRisk',
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
        about: 'Take risks and embrace challenges; that’s where growth happens.',
        roles: ['952907129034014740', '1215998618503352360']
    },
    {
        name: '- Bardia',
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
        about: 'Balance is the key to a happy and successful life.',
        roles: ['1215998618503352360']
    },
    {
        name: 'Mont',
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
        about: "Don’t be afraid to fail; it's a stepping stone to success.",
        roles: ['1215998618503352360']
    },
    {
        name: '- The.Code',
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
        useId: '179939072075235329',
        roles: ['952907129034014740', '1215998618503352360']
    },
    {
        name: 'NothingToSay',
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
        about: 'Find joy in the simple moments of life.',
        roles: ['1215998618503352360']
    },
    {
        name: 'خــودِ دَنــی',
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
        about: 'Disconnect to reconnect; take time for yourself.',
        roles: ['1217565199989604504']
    },
    {
        name: 'Jockie Music',
        colors: ['black', 'hsla(30, 1.9%, 59.2%, 1)'],

        username: 'JockieMusic',
        created: 'feb 10, 2018',
        avatar: avatarJockieMusic,
        useId: '411916947773587456',
        status: 'online',
        badges: [{ name: 'id', userName: 'JockieMusic#8585' }],
        about: 'The most feature -rich Discord music (multi - )bot with support for sources such as Spotify , Apple Music , Deezer , Soundcloud and more . This is the first of the four available free bots!',
        roles: ['1217199704769822803']
    }
]

export const static_data_servers = [
    {
        serverName: '𝐓𝐫𝐚𝐧𝐬𝐲𝐥𝐯𝐚𝐧𝐢𝐚',
        id: '911668092877283329',
        icon_gif: Transylvania.src,
        icon_image: TransylvaniaImg.src,
        banner: Transylvania_banner.src,
        channelsContent: [
            {
                category: { name: '「 𝑺𝒆𝒓𝒗𝒆𝒓 」————————', id: 0 },
                channels: [
                    {
                        name: '┎︱𝐇𝐨𝐭𝐞𝐥 𝐓𝐫𝐚𝐧𝐬𝐲𝐥𝐯𝐚𝐧𝐢𝐚',
                        channelTopic: '',
                        type: 'voice',
                        isPrivate: true,
                        id: 0
                    },
                    {
                        name: '〢︱𝐌𝐞𝐦𝐛𝐞𝐫𝐬 : 23524',
                        channelTopic: '',
                        type: 'voice',
                        isPrivate: true,
                        id: 0
                    },
                    {
                        name: '〢︱𝐃𝐢𝐬𝐜𝐨𝐫𝐝.𝐠𝐠/𝐓𝐫𝐚𝐧𝐬𝐲𝐥𝐯𝐚𝐧𝐢𝐚',
                        channelTopic: '',
                        type: 'voice',
                        isPrivate: true,
                        id: 0
                    },
                    {
                        name: "┗︱𝐃𝐫𝐚𝐜𝐮𝐥𝐚'𝐬 𝐂𝐚𝐬𝐭𝐥𝐞",
                        channelTopic: '',
                        type: 'voice',
                        membersConnected: ['214280633692717056', '218498762350395405'],
                        isPrivate: true,
                        id: 0
                    }
                ]
            },
            {
                category: { name: '「 𝑶𝒇𝒇𝒊𝒄𝒆 」————————', id: 0 },
                channels: [
                    {
                        name: '🚨・𝐓𝐨𝐭𝐚𝐥 𝐎𝐟𝐟𝐢𝐜𝐞.',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 0
                    }
                ]
            },
            {
                category: { name: '「 𝑹𝒐𝒍𝒆 」————————', id: 0 },
                channels: [
                    {
                        name: '🎨・𝘊𝘰𝘭𝘰𝘳',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        messages: [
                            {
                                sender: '218498762350395405',
                                message: 'Enter the desired number to get the color',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '218498762350395405',
                                message: '1️⃣ black',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '218498762350395405',
                                message: '2️⃣ red',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '218498762350395405',
                                message: '3️⃣ blue',
                                messageId: '1',
                                date: ''
                            }
                        ],
                        href: `/channels/911668092877283329/1231313`
                    }
                ]
            },
            {
                category: { name: '「 𝑻𝒊𝒄𝒌𝒆𝒕」————————', id: 0 },
                channels: [
                    {
                        name: '🟡・𝘘𝘶𝘢𝘳𝘢𝘯𝘵𝘪𝘯𝘦',
                        channelTopic: '',
                        isPrivate: true,
                        type: 'text',
                        id: 1,
                        roles: ['942037639765311509', '952907129034014740', '1217565199989604504'],
                        messages: [
                            {
                                sender: '325301808543170569',
                                message: 'brother i just kidding .. pls ',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '325301808543170569',
                                message: ':pedarsag: ',
                                messageId: '1',
                                date: ''
                            }
                        ],
                        href: `/channels/911668092877283329/12412452`
                    },
                    {
                        name: '🔴・𝘉𝘢𝘯-𝘙𝘦𝘢𝘴𝘰𝘯',
                        channelTopic: '',
                        isPrivate: true,
                        type: 'text',
                        messages: [
                            {
                                sender: '218498762350395405',
                                message: 'dany was banned, example: speak from hot place!',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '218498762350395405',
                                message: '@daniyartune was banned, example: speak from hot place!',
                                messageId: '1',
                                date: ''
                            }
                        ],
                        id: 1,
                        roles: ['942037639765311509', '952907129034014740', '1217565199989604504'],
                        href: `/channels/911668092877283329/12315332`
                    },
                    {
                        name: '🚫︳𝐁𝐚𝐧',
                        channelTopic: '',
                        isPrivate: true,
                        type: 'voice',
                        membersConnected: ['325301808543170569'],
                        id: 0
                    }
                ]
            },
            {
                category: { name: '「 𝑻𝒓𝒂𝒏𝒔𝒚𝒍𝒗𝒂𝒏𝒊𝒂 」————————', id: 0 },
                channels: [
                    {
                        name: '👻・𝘔𝘦𝘮𝘦',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        messages: [
                            {
                                sender: '1095366826797576344',
                                message: "Why don't scientists trust atoms? Because they make up everything!",
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: 'Nice!',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: "Why don't skeletons fight each other?",
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: "They don't have the guts!",
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: ':Kekw7:',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '1095366826797576344',
                                message: ':Kekw7:',
                                messageId: '1',
                                date: ''
                            }
                        ],
                        href: `/channels/911668092877283329/124456323`
                    },
                    {
                        name: '💞・𝘙𝘰𝘮𝘢𝘯𝘵𝘪𝘤',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/1241456547`
                    },
                    {
                        name: '📸・𝘚𝘵𝘺𝘭𝘦',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/12312355476`
                    },
                    {
                        name: '😂・𝘚𝘰𝘰𝘵𝘪',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/4524527`
                    },
                    {
                        name: '📷・𝘗𝘰𝘴𝘵',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        messages: [
                            {
                                sender: '214280633692717056',
                                message: '',
                                img: post_img2,
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '214280633692717056',
                                message: '',
                                img: post_img3,
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '218498762350395405',
                                message: '',
                                img: post_img1,
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: '',
                                img: post_img4,
                                messageId: '1',
                                date: ''
                            }
                        ],
                        href: `/channels/911668092877283329/4245f3423`
                    },
                    {
                        name: '🤖・𝘉𝘰𝘵-𝘊𝘰𝘮𝘮𝘢𝘯𝘥',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/ewrwr34324`
                    }
                ]
            },
            {
                category: { name: '「 𝑯𝒐𝒕𝒆𝒍 」————————', id: 0 },
                channels: [
                    {
                        name: '🔔・𝘌𝘷𝘦𝘯𝘵-𝘕𝘦𝘸𝘴',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/2346456`
                    },
                    {
                        name: '🌟・𝘙𝘦𝘸𝘢𝘳𝘥',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/234234623`
                    },
                    {
                        name: '💬・𝘊𝘩𝘪𝘵-𝘊𝘩𝘢𝘵',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/879785656`
                    },
                    {
                        name: '📝・𝘗𝘶𝘯𝘪𝘴𝘩',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/123134545`
                    },
                    {
                        name: '🎧・𝘔𝘶𝘴𝘪𝘤-𝘚𝘦𝘢𝘳𝘤𝘩',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/12313545645756`
                    },
                    {
                        name: '╻🩸╹𝐎𝐫𝐢𝐠𝐢𝐧𝐚𝐥𝐬',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻🏰╹𝐇𝐮𝐧𝐞𝐝𝐨𝐚𝐫𝐚',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻💀╹𝐖𝐡𝐢𝐭𝐛𝐲',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻👻╹𝐆𝐫𝐢𝐬𝐰𝐨𝐥𝐝',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻🎃╹𝐑𝐢𝐜𝐡𝐦𝐨𝐧𝐝',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻🐺╹𝐍𝐢𝐠𝐡𝐭𝐰𝐨𝐥𝐟',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻🕸╹𝐕𝐞𝐧𝐨𝐦 𝐕𝐚𝐥𝐞',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻🌙╹𝐁𝐥𝐨𝐨𝐝𝐦𝐨𝐨𝐧',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    },
                    {
                        name: '╻🌑╹𝐌𝐢𝐝𝐧𝐢𝐠𝐡𝐭',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 1
                    }
                ]
            },
            {
                category: { name: '「 「𝐃𝐫𝐚𝐯𝐞𝐧 𝐀𝐫𝐞𝐚」————————', id: 0 },
                channels: [
                    {
                        name: '💬・𝘓𝘰𝘶𝘯𝘨𝘦',
                        channelTopic: '',
                        isPrivate: true,
                        type: 'text',
                        id: 1,
                        roles: ['1215998618503352360', '1217199704769822803'],
                        messages: [
                            {
                                sender: '991284573726060615',
                                message: ':Peepo_SuperPeepo:',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: 'this game is very nice https://www.youtube.com/watch?v=bPlbu7z57JI',
                                messageId: '1',
                                date: ''
                            }
                        ],
                        href: `/channels/911668092877283329/1219358947048161452`
                    },
                    {
                        name: '🎵・𝘔𝘶𝘴𝘪𝘤-𝘚𝘦𝘢𝘳𝘤𝘩',
                        channelTopic: '',
                        isPrivate: true,
                        type: 'text',
                        messages: [
                            {
                                sender: '179939072075235329',
                                message: '3p https://youtu.be/Z7pKl8aSq5M?si=O8y8oekzcKE2bwrp ',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '411916947773587456',
                                message: 'Amin Tijay - TEH RUN (Official Audio) ',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '179939072075235329',
                                message: "Guys, install Discord, it's better than this",
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: ':troll:',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '179939072075235329',
                                message: ':Peepo_SipSpin:',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '214280633692717056',
                                message: 'Radin became a clown',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '214280633692717056',
                                message: ':Kekw7:',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: 'where is yazdan mm',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '179939072075235329',
                                message: 'she is dancing',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '179939072075235329',
                                message: ':Peepo_Dance::Yazdan_mom_dancing:',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '991284573726060615',
                                message: '+p https://www.youtube.com/watch?v=-pX6gTaSUcQ',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '411916947773587456',
                                message: 'PutaK x Khalse - HABIBI AZIZAM (Official Music video) ',
                                messageId: '1',
                                date: ''
                            },
                            {
                                sender: '505051488779894794',
                                message:
                                    '3p https://open.spotify.com/album/1RAPneGUjUO11XiVPTSYz0?si=-P2KBAenRiGxZryylEj2QQ',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '411916947773587456',
                                message: 'Hala Ke Man Inam ',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '214280633692717056',
                                message: '3p https://soundcloud.com/arshiaparvane/bache-aseman-prod-da-baby-type',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '411916947773587456',
                                message: 'Bache Aseman (Da Baby Type Beat - Big Bag) ',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '505051488779894794',
                                message: '3p https://www.deezer.com/us/track/1999525067',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '411916947773587456',
                                message: 'Rich Flex by Drake ',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '179939072075235329',
                                message: '3p https://open.spotify.com/track/10seI1aWbosvrnlA9Cidhc',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '411916947773587456',
                                message: 'Miss You - Remix ',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '214280633692717056',
                                message: '3p https://soundcloud.com/travisscott-2/travis-scott-fe-n',
                                messageId: '1',
                                date: ''
                            },

                            {
                                sender: '411916947773587456',
                                message: 'travis-scott-fe-n',
                                messageId: '1',
                                date: ''
                            }
                        ],
                        id: 1,
                        roles: ['1215998618503352360', '1217199704769822803'],
                        href: `/channels/911668092877283329/1219358988387483779`
                    },
                    {
                        name: "🔊︳𝐃𝐞𝐯𝐢𝐥'𝐬 𝐃𝐮𝐧𝐠𝐞𝐨𝐧",
                        channelTopic: '',
                        isPrivate: true,
                        type: 'voice',
                        membersConnected: [
                            '991284573726060615',
                            '180204915942096896',
                            '505051488779894794',
                            '411916947773587456'
                        ],
                        id: 0
                    }
                ]
            },
            {
                category: { name: '「 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 」————————', id: 0 },
                channels: [
                    {
                        name: '⚙・𝘚𝘦𝘵𝘵𝘪𝘯𝘨',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/6260678129`
                    },
                    {
                        name: '🎧・𝘔𝘶𝘴𝘪𝘤-𝘚𝘦𝘢𝘳𝘤𝘩',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'text',
                        id: 1,
                        roles: [],
                        href: `/channels/911668092877283329/21540ewr15`
                    },
                    {
                        name: '➕ 𝐂𝐫𝐞𝐚𝐭𝐞 𝐂𝐡𝐚𝐧𝐧𝐞𝐥',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        id: 0
                    },
                    {
                        name: '- The.Code Channel',
                        channelTopic: '',
                        isPrivate: false,
                        type: 'voice',
                        membersConnected: ['185842812888023040', '179939072075235329', '1095366826797576344'],
                        id: 1
                    }
                ]
            }
        ]
    }
]

export const data_profile_me: TCriticalAnyType = static_data_users_servers.find((items) => items.me)
