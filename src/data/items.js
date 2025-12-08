export const ITEMS = [
    {
        id: 'cactus',
        name: 'お気に入りのペン',
        type: 'tool',
        icon: '✒️',
        description: '大切に使っている万年筆。',
        unlockCondition: 'login_3_days'
    },
    {
        id: 'bookshelf',
        name: '英語辞書',
        type: 'book',
        icon: '📖',
        description: '困った時の強い味方。',
        unlockCondition: 'login_7_days'
    },
    {
        id: 'rug',
        name: 'デスクマット',
        type: 'furniture',
        icon: '🗒️',
        description: '集中力が上がる気がする。',
        unlockCondition: 'login_14_days'
    },
    {
        id: 'coffee_set',
        name: 'マイ水筒',
        type: 'tool',
        icon: '🥤',
        description: '水分補給は大事。',
        unlockCondition: 'quiz_10'
    },
    {
        id: 'curtain',
        name: '修了証明書',
        type: 'certificate',
        icon: '📜',
        description: '努力の証。誇らしい。',
        unlockCondition: 'quiz_50'
    },
    {
        id: 'glasses',
        name: 'メガネ',
        type: 'accessory',
        icon: '👓',
        description: 'かけると集中できる。',
        unlockCondition: 'review_100'
    },
    // MVP specific items for immediate gratification
    {
        id: 'plant_starter',
        name: 'はじめてのノート',
        type: 'tool',
        icon: '📓',
        description: '最初のレッスンを終えた記念。',
        unlockCondition: 'quiz_1'
    }
];
