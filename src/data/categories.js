export const CATEGORIES = [
    {
        id: 'verbs',
        name: '動詞のニュアンス',
        icon: '🏃',
        description: '似た意味の動詞の使い分け',
        color: '#FF6B6B'
    },
    {
        id: 'adjectives',
        name: '形容詞',
        icon: '🎨',
        description: '物事の性質や状態を表す',
        color: '#4ECDC4'
    },
    {
        id: 'prepositions',
        name: '前置詞',
        icon: '📍',
        description: '位置や時間の関係を表す',
        color: '#45B7D1'
    },
    {
        id: 'idioms',
        name: '熟語・慣用句',
        icon: '💎',
        description: '表現の幅を広げよう',
        color: '#FFD93D'
    },
    {
        id: 'native',
        name: 'ネイティブ表現',
        icon: '😎',
        description: '生きた英語を学ぼう',
        color: '#FF6B6B'
    },
    {
        id: 'business',
        name: 'ビジネス英語',
        icon: '💼',
        description: '仕事で使う英語表現',
        color: '#FFEAA7'
    }
];

export function getCategoryById(id) {
    return CATEGORIES.find(cat => cat.id === id);
}

export function getAllCategories() {
    return CATEGORIES;
}
