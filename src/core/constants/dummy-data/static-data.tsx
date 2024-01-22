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
    avatarYounes
} from '@public/images'

export const static_data_menu = [
    { name: 'Online', id: 1 },
    { name: 'All', id: 2 },
    { name: 'Pending', id: 3 },
    // { name: 'Suggestions', id: 4 },
    { name: 'Blocked', id: 4 }
]
export const static_data_me = {
    displayName: 'Amirmohamad',
    username: 'amirmohamad',
    avatar: avatar_me,
    useId: '991284573726060615'
}
export const static_data_social = [
    {
        displayName: 'TriTium',
        username: 'thetritium',
        avatar: avatarShayan,
        useId: '214280633692717056',
        status: 'doNotDisturb'
    },
    {
        displayName: '家 𝒀𝒐𝒖𝒏𝒆𝒔 𝑯𝒊𝒅𝒅𝒆𝒏',
        username: 'younes_hidden',
        avatar: avatarYounes,
        useId: '218498762350395405',
        status: 'online'
    },
    {
        displayName: '- Erfan AtRisk',
        username: 'atri3k',
        avatar: avatarErfan,
        useId: '185842812888023040',
        status: 'idle'
    },
    {
        displayName: '- Bardia',
        username: 'bardiaxv',
        avatar: avatarBardia,
        useId: '180204915942096896',
        status: 'doNotDisturb'
    },
    {
        displayName: 'Mont',
        username: 'freezemont',
        avatar: avatarMont,
        useId: '505051488779894794',
        status: 'doNotDisturb'
    },
    {
        displayName: '- The.Code',
        username: 'thecode',
        avatar: avatarTheCode,
        useId: '179939072075235329',
        status: 'doNotDisturb'
    },
    {
        displayName: 'NothingToSay',
        username: 'nereix',
        avatar: avatarNereix,
        useId: '1095366826797576344',
        status: 'doNotDisturb'
    },
    {
        displayName: 'خــودِ دَنــی',
        username: 'daniyartune',
        avatar: avatarDany,
        useId: '325301808543170569',
        status: 'offline'
    },
    {
        displayName: '!sobhan!',
        username: 'sobhan002',
        avatar: avatarSobhan,
        useId: '510109656098537475',
        status: 'online'
    }
]
export const static_data_directs = [
    {
        personId: '214280633692717056',
        // messagesDirect sort by this date
        lastUpdateData: '',
        messages: [
            {
                sender: 'audience',
                message: 'hi where are you Amir?',
                messageId: '1',
                date: ''
            },
            { sender: 'audience', message: 'hi', messageId: '1', date: '' },
            { sender: 'me', message: 'hi Im well', messageId: '1', date: '' }
        ]
    },
    {
        personId: '218498762350395405',
        // messagesDirect sort by this date
        lastUpdateData: '',
        messages: [
            {
                message: 'hi where are22 you Amir?',
                messageId: '1',
                date: ''
            },
            {
                message: 'hi22',
                messageId: '1',
                date: ''
            }
        ]
    },
    {
        personId: '505051488779894794',
        // messagesDirect sort by this date
        lastUpdateData: '',
        messages: [
            {
                message: 'hi where33 are you Amir?',
                messageId: '1',
                date: ''
            },
            {
                message: 'hi33',
                messageId: '1',
                date: ''
            }
        ]
    }
]
