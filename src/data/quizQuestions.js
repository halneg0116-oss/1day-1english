// Quiz questions database with category classification
export const QUIZ_QUESTIONS = [
    // ========== VERBS CATEGORY ==========
    {
        id: 1,
        category: 'verbs',
        text: "映画を『見る』。この時の気分は？",
        englishText: "Watch a movie",
        situation: "スクリーンで映画を楽しんでいる",
        icon: '🎬',
        options: [
            { id: 'a', text: 'Look', icon: '🔍', nuance: '視線を向ける', advice: '静止している物をじっと見る時に使います。', example: "Look at this picture." },
            { id: 'b', text: 'See', icon: '👀', nuance: '視界に入る', advice: '意図せずに自然と目に入ってくる時に使います。', example: "I see a bird in the tree." },
            { id: 'c', text: 'Watch', icon: '📺', nuance: '動くものを追う', advice: '動いている物を注意深く見る時に使います。', example: "I watch TV every day." }
        ],
        correctId: 'c',
        explanation: "Watchは「動いているものを目で追う」というニュアンスだよ。映画やスポーツ観戦に使われるね。"
    },
    {
        id: 2,
        category: 'verbs',
        text: "遠くの景色が『見える』",
        englishText: "See the scenery",
        situation: "窓から美しい景色が自然と目に入ってくる",
        icon: '🏔️',
        options: [
            { id: 'a', text: 'Look', icon: '🔍', nuance: '視線を向ける', advice: '「見て！」と何かに視線を向けさせる時に使います。', example: "Look at the mountains!" },
            { id: 'b', text: 'See', icon: '👀', nuance: '視界に入る', advice: '目を開けていれば自然と入ってくる、そんな感覚の時に使います。', example: "Can you see the moon?" },
            { id: 'c', text: 'Watch', icon: '📺', nuance: '動くものを追う', advice: '変化するものを観察する時に使います。', example: "Watch the magician carefully." }
        ],
        correctId: 'b',
        explanation: "Seeは「自然と視界に入ってくる」状態を表すよ。意識しなくても見えているんだ。"
    },
    {
        id: 3,
        category: 'verbs',
        text: "地図を『見て』道を確認する",
        englishText: "Look at the map",
        situation: "迷子にならないように地図をじっと見る",
        icon: '🗺️',
        options: [
            { id: 'a', text: 'Look at', icon: '🔍', nuance: '視線を向ける', advice: '意識的に視線を向けて、情報を得ようとする時に使います。', example: "Please look at page 5." },
            { id: 'b', text: 'See', icon: '👀', nuance: '視界に入る', advice: '会う、わかる、などの意味で使うことが多いです。', example: "I see what you mean." },
            { id: 'c', text: 'Watch', icon: '📺', nuance: '動くものを追う', advice: '動きや変化を見守る時に使います。', example: "Watch your step!" }
        ],
        correctId: 'a',
        explanation: "Look atは「意識的に視線を向ける」動作。地図や写真など、静止しているものを見る時に使うよ。"
    },
    {
        id: 4,
        category: 'verbs',
        text: "音楽を『聴く』",
        englishText: "Listen to music",
        situation: "イヤホンで好きな曲を聴いている",
        icon: '🎵',
        options: [
            { id: 'a', text: 'Listen to', icon: '👂', nuance: '耳を傾ける', advice: '意識して内容を聴こうとする時に使います。', example: "Listen to the teacher." },
            { id: 'b', text: 'Hear', icon: '🔔', nuance: '聞こえてくる', advice: '自然と耳に入ってくる音に対して使います。', example: "I can hear the wind." },
            { id: 'c', text: 'Sound', icon: '🔊', nuance: '音がする', advice: '「〜のように聞こえる（思える）」という判断に使います。', example: "That sounds great!" }
        ],
        correctId: 'a',
        explanation: "Listen toは「意識して耳を傾ける」こと。音楽や人の話を聴く時に使うよ。"
    },
    {
        id: 5,
        category: 'verbs',
        text: "鳥の鳴き声が『聞こえる』",
        englishText: "Hear birds singing",
        situation: "窓の外から鳥の声が自然と聞こえてくる",
        icon: '🐦',
        options: [
            { id: 'a', text: 'Listen to', icon: '👂', nuance: '耳を傾ける', advice: '集中して聴く時に使います。', example: "Listen carefully." },
            { id: 'b', text: 'Hear', icon: '🔔', nuance: '聞こえてくる', advice: '向こうから音がやってくる感覚の時に使います。', example: "Did you hear that noise?" },
            { id: 'c', text: 'Sound', icon: '🔊', nuance: '音がする', advice: '音そのものの質や印象を言う時に使います。', example: "The alarm sounds loud." }
        ],
        correctId: 'b',
        explanation: "Hearは「自然と耳に入ってくる」状態。意識しなくても聞こえる音に使うよ。"
    },
    {
        id: 6,
        category: 'verbs',
        text: "サッカーの試合を『観戦する』",
        englishText: "Watch a soccer game",
        situation: "スタジアムで選手の動きを追っている",
        icon: '⚽',
        options: [
            { id: 'a', text: 'Look at', icon: '🔍', nuance: '視線を向ける', advice: '一点に視線を向ける時に使います。', example: "Look at the ball." },
            { id: 'b', text: 'See', icon: '👀', nuance: '視界に入る', advice: '結果を見届ける、という意味でも使われます。', example: "Wait and see." },
            { id: 'c', text: 'Watch', icon: '📺', nuance: '動くものを追う', advice: '試合や映画など、動きのあるものを楽しむ時に使います。', example: "We watched the game yesterday." }
        ],
        correctId: 'c',
        explanation: "Watchはスポーツ観戦にもぴったり。動いている選手たちを目で追うイメージだね。"
    },
    {
        id: 7,
        category: 'verbs',
        text: "星空を『眺める』",
        englishText: "Look at the stars",
        situation: "夜空を見上げて星を探している",
        icon: '✨',
        options: [
            { id: 'a', text: 'Look at', icon: '🔍', nuance: '視線を向ける', advice: '美しいものや興味のあるものをじっと見る時に使います。', example: "Look at the stars." },
            { id: 'b', text: 'See', icon: '👀', nuance: '視界に入る', advice: 'ただ目に見えている状態の時に使います。', example: "I see a shooting star." },
            { id: 'c', text: 'Watch', icon: '📺', nuance: '動くものを追う', advice: '星の動き（流星群など）を観察するなら使えます。', example: "Watching for shooting stars." }
        ],
        correctId: 'a',
        explanation: "Look atは静止している景色をじっと見る時に使うよ。星空を眺めるのにぴったりだね。"
    },
    {
        id: 8,
        category: 'verbs',
        text: "友達の話を『聞く』",
        englishText: "Listen to a friend",
        situation: "カフェで友達の悩みに耳を傾けている",
        icon: '☕',
        options: [
            { id: 'a', text: 'Listen to', icon: '👂', nuance: '耳を傾ける', advice: '相手の話を理解しようと、集中して聞く時に使います。', example: "I'm listening to you." },
            { id: 'b', text: 'Hear', icon: '🔔', nuance: '聞こえてくる', advice: '単に声が物理的に届いているか確認する時に使います。', example: "Can you hear me?" },
            { id: 'c', text: 'Sound', icon: '🔊', nuance: '音がする', advice: '「〜のように聞こえる」という印象を言う時に使います。', example: "That sounds fun." }
        ],
        correctId: 'a',
        explanation: "Listen toは会話や話を「注意して聴く」時に使うよ。相手に集中しているイメージだね。"
    },
    {
        id: 9,
        category: 'verbs',
        text: "雷の音が『聞こえた』",
        englishText: "Heard thunder",
        situation: "突然ゴロゴロという音が聞こえてきた",
        icon: '⚡',
        options: [
            { id: 'a', text: 'Listen to', icon: '👂', nuance: '耳を傾ける', advice: '耳を澄まして音を探す時に使います。', example: "Listen for the sound." },
            { id: 'b', text: 'Hear', icon: '🔔', nuance: '聞こえてくる', advice: '突然の音や、意図せず聞こえた音に対して使います。', example: "I heard a loud bang." },
            { id: 'c', text: 'Sound', icon: '🔊', nuance: '音がする', advice: '音の様子だけを説明する時に使います。', example: "It sounds like thunder." }
        ],
        correctId: 'b',
        explanation: "Hearは予期せず聞こえてくる音に使うよ。雷みたいに突然の音にぴったりだね。"
    },
    {
        id: 10,
        category: 'verbs',
        text: "赤ちゃんが泣いているのが『見える』",
        englishText: "See a baby crying",
        situation: "公園で遊んでいる赤ちゃんが視界に入った",
        icon: '👶',
        options: [
            { id: 'a', text: 'Look at', icon: '🔍', nuance: '視線を向ける', advice: '「見て！」と注意を引く時に使います。', example: "Look at that baby." },
            { id: 'b', text: 'See', icon: '👀', nuance: '視界に入る', advice: 'ある事態を目撃した、という時に使います。', example: "I saw the accident." },
            { id: 'c', text: 'Watch', icon: '📺', nuance: '動くものを追う', advice: 'ベビーシッターとして「見守る」時はWatchを使います。', example: "Can you watch the baby?" }
        ],
        correctId: 'b',
        explanation: "Seeは「目に入ってくる」状態。赤ちゃんの姿が自然と見えたという感じだね。"
    },
    {
        id: 11,
        category: 'verbs',
        text: "本を『借りる』",
        englishText: "Borrow a book",
        situation: "図書館で本を持ち帰る",
        icon: '📚',
        options: [
            { id: 'a', text: 'Borrow', icon: '📖', nuance: '一時的に借りる' },
            { id: 'b', text: 'Lend', icon: '🤝', nuance: '貸してあげる' },
            { id: 'c', text: 'Rent', icon: '💰', nuance: 'お金を払って借りる' }
        ],
        correctId: 'a',
        explanation: "Borrowは「無料で一時的に借りる」こと。図書館の本はborrowだね。"
    },
    {
        id: 12,
        category: 'verbs',
        text: "友達に鉛筆を『貸す』",
        englishText: "Lend a pencil",
        situation: "困っている友達に自分の鉛筆を貸してあげる",
        icon: '✏️',
        options: [
            { id: 'a', text: 'Borrow', icon: '📖', nuance: '借りる' },
            { id: 'b', text: 'Lend', icon: '🤝', nuance: '貸す' },
            { id: 'c', text: 'Rent', icon: '💰', nuance: 'お金を取って貸す' }
        ],
        correctId: 'b',
        explanation: "Lendは「誰かに貸してあげる」こと。Borrowの反対だね。"
    },
    {
        id: 13,
        category: 'verbs',
        text: "車を『借りる』",
        englishText: "Rent a car",
        situation: "レンタカーを1週間使う",
        icon: '🚗',
        options: [
            { id: 'a', text: 'Borrow', icon: '📖', nuance: '無料で借りる' },
            { id: 'b', text: 'Lend', icon: '🤝', nuance: '貸す' },
            { id: 'c', text: 'Rent', icon: '💰', nuance: 'お金を払って借りる' }
        ],
        correctId: 'c',
        explanation: "Rentは「お金を払って借りる」こと。レンタカーや賃貸アパートに使うよ。"
    },
    {
        id: 14,
        category: 'verbs',
        text: "英語を『話す』",
        englishText: "Speak English",
        situation: "外国人と英語で会話している",
        icon: '🗣️',
        options: [
            { id: 'a', text: 'Say', icon: '💬', nuance: '言葉を言う' },
            { id: 'b', text: 'Tell', icon: '📢', nuance: '伝える' },
            { id: 'c', text: 'Speak', icon: '🌍', nuance: '言語を話す' }
        ],
        correctId: 'c',
        explanation: "Speakは「言語を話す」時に使うよ。I speak Englishのように。"
    },
    {
        id: 15,
        category: 'verbs',
        text: "『こんにちは』と言う",
        englishText: "Say 'Hello'",
        situation: "知り合いに挨拶をする",
        icon: '👋',
        options: [
            { id: 'a', text: 'Say', icon: '💬', nuance: '言葉を言う' },
            { id: 'b', text: 'Tell', icon: '📢', nuance: '人に伝える' },
            { id: 'c', text: 'Speak', icon: '🌍', nuance: '言語を話す' }
        ],
        correctId: 'a',
        explanation: "Sayは「言葉や文を言う」時に使うよ。Say 'Hello' のように。"
    },
    {
        id: 16,
        category: 'verbs',
        text: "秘密を『教える』",
        englishText: "Tell a secret",
        situation: "友達に内緒話を打ち明ける",
        icon: '🤫',
        options: [
            { id: 'a', text: 'Say', icon: '💬', nuance: '言葉を言う' },
            { id: 'b', text: 'Tell', icon: '📢', nuance: '人に伝える' },
            { id: 'c', text: 'Speak', icon: '🌍', nuance: '言語を話す' }
        ],
        correctId: 'b',
        explanation: "Tellは「人に何かを伝える」時に使うよ。Tell someone a secretのように。"
    },
    {
        id: 17,
        category: 'verbs',
        text: "服を『着る』",
        englishText: "Wear clothes",
        situation: "シャツを着ている状態",
        icon: '👔',
        options: [
            { id: 'a', text: 'Wear', icon: '👕', nuance: '着ている状態' },
            { id: 'b', text: 'Put on', icon: '🔄', nuance: '着る動作' },
            { id: 'c', text: 'Dress', icon: '👗', nuance: '服を着せる' }
        ],
        correctId: 'a',
        explanation: "Wearは「着ている状態」を表すよ。I wear a shirtは「シャツを着ている」だね。"
    },
    {
        id: 18,
        category: 'verbs',
        text: "靴を『履く』動作",
        englishText: "Put on shoes",
        situation: "これから靴を履こうとしている",
        icon: '👟',
        options: [
            { id: 'a', text: 'Wear', icon: '👕', nuance: '着ている状態' },
            { id: 'b', text: 'Put on', icon: '🔄', nuance: '着る動作' },
            { id: 'c', text: 'Take off', icon: '⬇️', nuance: '脱ぐ動作' }
        ],
        correctId: 'b',
        explanation: "Put onは「着る・履く動作」。これから身につける時に使うよ。"
    },
    {
        id: 19,
        category: 'verbs',
        text: "料理を『作る』",
        englishText: "Cook dinner",
        situation: "キッチンで夕食を準備している",
        icon: '👨‍🍳',
        options: [
            { id: 'a', text: 'Make', icon: '🔨', nuance: '材料から作る' },
            { id: 'b', text: 'Do', icon: '✅', nuance: '行為をする' },
            { id: 'c', text: 'Cook', icon: '🍳', nuance: '調理する' }
        ],
        correctId: 'c',
        explanation: "Cookは「食べ物を調理する」専用の動詞。料理にはcookがぴったりだね。"
    },
    {
        id: 20,
        category: 'verbs',
        text: "ベッドを『整える』",
        englishText: "Make the bed",
        situation: "朝起きてシーツを整えている",
        icon: '🛏️',
        options: [
            { id: 'a', text: 'Make', icon: '🔨', nuance: '作る・整える' },
            { id: 'b', text: 'Do', icon: '✅', nuance: '行為をする' },
            { id: 'c', text: 'Fix', icon: '🔧', nuance: '修理する' }
        ],
        correctId: 'a',
        explanation: "Make the bedは「ベッドを整える」という決まった表現。Makeには「整える」の意味もあるんだ。"
    },

    // New Questions (Verbs)
    {
        id: 66,
        category: 'verbs',
        text: "バスに『乗る』",
        englishText: "Get on the bus",
        situation: "バス停からバスに乗り込む",
        icon: '🚌',
        options: [
            { id: 'a', text: 'Get on', icon: '⬆️', nuance: '乗る（大きな乗り物）' },
            { id: 'b', text: 'Get in', icon: '🚗', nuance: '乗る（小さな乗り物）' },
            { id: 'c', text: 'Ride', icon: '🚴', nuance: 'またがる' }
        ],
        correctId: 'a',
        explanation: "Get onはバスや電車など「歩いて乗れる」乗り物に使います。タクシーならGet inだよ。"
    },
    {
        id: 67,
        category: 'verbs',
        text: "電気を『つける』",
        englishText: "Turn on the light",
        situation: "暗い部屋のスイッチを押す",
        icon: '💡',
        options: [
            { id: 'a', text: 'Open', icon: '🚪', nuance: '開ける' },
            { id: 'b', text: 'Turn on', icon: '🔛', nuance: 'スイッチを入れる' },
            { id: 'c', text: 'Start', icon: '🏁', nuance: '始める' }
        ],
        correctId: 'b',
        explanation: "Turn onは電気製品のスイッチを入れる時に使います。Openは使いません。"
    },

    // ========== ADJECTIVES CATEGORY ==========
    {
        id: 21,
        category: 'adjectives',
        text: "この本は『面白い』",
        englishText: "This book is interesting",
        situation: "読んでいて楽しい本",
        icon: '📖',
        options: [
            { id: 'a', text: 'Interesting', icon: '🤔', nuance: '興味深い' },
            { id: 'b', text: 'Fun', icon: '😄', nuance: '楽しい' },
            { id: 'c', text: 'Funny', icon: '😂', nuance: '面白おかしい' }
        ],
        correctId: 'a',
        explanation: "Interestingは「知的に興味をそそる」こと。本や話題に使うよ。"
    },
    {
        id: 22,
        category: 'adjectives',
        text: "パーティーが『楽しかった』",
        englishText: "The party was fun",
        situation: "友達との集まりが楽しかった",
        icon: '🎉',
        options: [
            { id: 'a', text: 'Interesting', icon: '🤔', nuance: '興味深い' },
            { id: 'b', text: 'Fun', icon: '😄', nuance: '楽しい' },
            { id: 'c', text: 'Funny', icon: '😂', nuance: 'おかしい' }
        ],
        correctId: 'b',
        explanation: "Funは「楽しい・面白い」活動や経験に使うよ。パーティーにぴったりだね。"
    },
    {
        id: 23,
        category: 'adjectives',
        text: "そのジョークは『笑える』",
        englishText: "That joke is funny",
        situation: "冗談を聞いて笑った",
        icon: '🤣',
        options: [
            { id: 'a', text: 'Interesting', icon: '🤔', nuance: '興味深い' },
            { id: 'b', text: 'Fun', icon: '😄', nuance: '楽しい' },
            { id: 'c', text: 'Funny', icon: '😂', nuance: '面白おかしい' }
        ],
        correctId: 'c',
        explanation: "Funnyは「笑いを誘う」こと。ジョークやコメディに使うよ。"
    },
    {
        id: 24,
        category: 'adjectives',
        text: "このケーキは『おいしい』",
        englishText: "This cake is delicious",
        situation: "食べて満足している",
        icon: '🍰',
        options: [
            { id: 'a', text: 'Delicious', icon: '😋', nuance: 'とてもおいしい' },
            { id: 'b', text: 'Tasty', icon: '👍', nuance: '美味しい' },
            { id: 'c', text: 'Good', icon: '✨', nuance: '良い' }
        ],
        correctId: 'a',
        explanation: "Deliciousは食べ物が「とても美味しい」時の最高の褒め言葉だよ。"
    },
    {
        id: 25,
        category: 'adjectives',
        text: "彼女は『美しい』",
        englishText: "She is beautiful",
        situation: "女性の外見を褒める",
        icon: '👸',
        options: [
            { id: 'a', text: 'Beautiful', icon: '💖', nuance: '美しい' },
            { id: 'b', text: 'Pretty', icon: '☺️', nuance: 'かわいい' },
            { id: 'c', text: 'Handsome', icon: '👨', nuance: 'ハンサム(男性)' }
        ],
        correctId: 'a',
        explanation: "Beautifulは女性の美しさを表す一般的な言葉。格式ばった印象もあるよ。"
    },
    {
        id: 26,
        category: 'adjectives',
        text: "部屋が『大きい』",
        englishText: "The room is large",
        situation: "広々とした部屋",
        icon: '🏠',
        options: [
            { id: 'a', text: 'Big', icon: '📏', nuance: '大きい(一般)' },
            { id: 'b', text: 'Large', icon: '🌍', nuance: '大きい(サイズ)' },
            { id: 'c', text: 'Huge', icon: '🏔️', nuance: '巨大な' }
        ],
        correctId: 'b',
        explanation: "Largeは面積やサイズが大きい時に使うよ。Bigより少しフォーマルだね。"
    },
    {
        id: 27,
        category: 'adjectives',
        text: "彼は『賢い』",
        englishText: "He is smart",
        situation: "頭の良い人を褒める",
        icon: '🧠',
        options: [
            { id: 'a', text: 'Smart', icon: '💡', nuance: '頭が切れる' },
            { id: 'b', text: 'Intelligent', icon: '🎓', nuance: '知的な' },
            { id: 'c', text: 'Wise', icon: '👴', nuance: '賢明な' }
        ],
        correctId: 'a',
        explanation: "Smartはカジュアルで日常的な「頭が良い」。会話でよく使われるよ。"
    },
    {
        id: 28,
        category: 'adjectives',
        text: "今日は『寒い』",
        englishText: "It is cold today",
        situation: "気温が低い",
        icon: '🥶',
        options: [
            { id: 'a', text: 'Cold', icon: '❄️', nuance: '寒い・冷たい' },
            { id: 'b', text: 'Cool', icon: '🍃', nuance: '涼しい' },
            { id: 'c', text: 'Chilly', icon: '🌬️', nuance: 'ひんやりする' }
        ],
        correctId: 'a',
        explanation: "Coldは「寒い」の一般的な表現。気温にも物の温度にも使えるよ。"
    },
    {
        id: 29,
        category: 'adjectives',
        text: "この問題は『簡単だ』",
        englishText: "This problem is easy",
        situation: "すぐに解ける問題",
        icon: '✅',
        options: [
            { id: 'a', text: 'Easy', icon: '😌', nuance: '簡単な' },
            { id: 'b', text: 'Simple', icon: '🎯', nuance: 'シンプルな' },
            { id: 'c', text: 'Light', icon: '🪶', nuance: '軽い' }
        ],
        correctId: 'a',
        explanation: "Easyは「簡単・容易」の最も一般的な言葉。反対語はdifficultだね。"
    },
    {
        id: 30,
        category: 'adjectives',
        text: "彼は『親切だ』",
        englishText: "He is kind",
        situation: "優しく助けてくれる人",
        icon: '🤗',
        options: [
            { id: 'a', text: 'Kind', icon: '💝', nuance: '親切な' },
            { id: 'b', text: 'Nice', icon: '😊', nuance: '良い・優しい' },
            { id: 'c', text: 'Gentle', icon: '🕊️', nuance: '穏やかな' }
        ],
        correctId: 'a',
        explanation: "Kindは「親切な・優しい」性格を表すよ。人柄を褒める時に使うね。"
    },
    {
        id: 31,
        category: 'adjectives',
        text: "映画が『退屈だった』",
        englishText: "The movie was boring",
        situation: "つまらなくて眠くなった",
        icon: '😴',
        options: [
            { id: 'a', text: 'Boring', icon: '🥱', nuance: '退屈な' },
            { id: 'b', text: 'Tired', icon: '😫', nuance: '疲れた' },
            { id: 'c', text: 'Bored', icon: '😑', nuance: '退屈している' }
        ],
        correctId: 'a',
        explanation: "Boringは「退屈な・つまらない」こと。映画や話に使うよ。Boredは「退屈している」気持ちだね。"
    },
    {
        id: 32,
        category: 'adjectives',
        text: "試験前で『緊張している』",
        englishText: "I am nervous",
        situation: "ドキドキして落ち着かない",
        icon: '😰',
        options: [
            { id: 'a', text: 'Nervous', icon: '😬', nuance: '緊張している' },
            { id: 'b', text: 'Exciting', icon: '🎊', nuance: 'わくわくさせる' },
            { id: 'c', text: 'Scared', icon: '😨', nuance: '怖い' }
        ],
        correctId: 'a',
        explanation: "Nervousは「緊張している・不安な」気持ち。試験前によくある感情だね。"
    },
    {
        id: 33,
        category: 'adjectives',
        text: "ニュースに『驚いた』",
        englishText: "I was surprised",
        situation: "予想外の出来事にびっくり",
        icon: '😲',
        options: [
            { id: 'a', text: 'Surprised', icon: '😮', nuance: '驚いた' },
            { id: 'b', text: 'Surprising', icon: '🎉', nuance: '驚かせる' },
            { id: 'c', text: 'Shocked', icon: '😱', nuance: 'ショックを受けた' }
        ],
        correctId: 'a',
        explanation: "Surprisedは「驚いた」気持ち。-edは感情を表すよ。Surprisingは「驚かせるような」事柄だね。"
    },
    {
        id: 34,
        category: 'adjectives',
        text: "景色が『美しい』",
        englishText: "The view is beautiful",
        situation: "絵のような美しい風景",
        icon: '🌅',
        options: [
            { id: 'a', text: 'Beautiful', icon: '💖', nuance: '美しい' },
            { id: 'b', text: 'Pretty', icon: '🌸', nuance: 'かわいい' },
            { id: 'c', text: 'Scenic', icon: '🏞️', nuance: '風光明媚な' }
        ],
        correctId: 'a',
        explanation: "Beautifulは景色や自然の美しさにも使えるよ。万能な褒め言葉だね。"
    },
    {
        id: 35,
        category: 'adjectives',
        text: "仕事が『忙しい』",
        englishText: "I am busy with work",
        situation: "やることが多くて大変",
        icon: '💼',
        options: [
            { id: 'a', text: 'Busy', icon: '⏰', nuance: '忙しい' },
            { id: 'b', text: 'Hurry', icon: '🏃', nuance: '急ぐ' },
            { id: 'c', text: 'Full', icon: '📦', nuance: 'いっぱい' }
        ],
        correctId: 'a',
        explanation: "Busyは「忙しい」状態。I'm busyで「忙しいです」だね。"
    },

    // New Questions (Adjectives)
    {
        id: 68,
        category: 'adjectives',
        text: "値段が『高い』",
        englishText: "It is expensive",
        situation: "高級なレストラン",
        icon: '💰',
        options: [
            { id: 'a', text: 'High', icon: '⬆️', nuance: '高い（高さ）' },
            { id: 'b', text: 'Expensive', icon: '💵', nuance: '高価な' },
            { id: 'c', text: 'Rich', icon: '👑', nuance: '豊かな' }
        ],
        correctId: 'b',
        explanation: "Expensiveは「値段が高い」こと。Highは位置やレベルが高い時に使います。"
    },
    {
        id: 69,
        category: 'adjectives',
        text: "部屋が『汚い』",
        englishText: "The room is dirty",
        situation: "掃除をしていない",
        icon: '🧹',
        options: [
            { id: 'a', text: 'Dirty', icon: '🗑️', nuance: '汚れた' },
            { id: 'b', text: 'Messy', icon: '🌀', nuance: '散らかった' },
            { id: 'c', text: 'Bad', icon: '👎', nuance: '悪い' }
        ],
        correctId: 'a',
        explanation: "Dirtyは「汚れがついている」という意味。Messyは「散らかっている」状態だよ。"
    },

    // ========== PREPOSITIONS CATEGORY ==========
    {
        id: 36,
        category: 'prepositions',
        text: "机『の上に』本がある",
        englishText: "On the desk",
        situation: "本が机の表面に置いてある",
        icon: '📚',
        options: [
            { id: 'a', text: 'on', icon: '⬆️', nuance: '〜の上に(接触)' },
            { id: 'b', text: 'in', icon: '📦', nuance: '〜の中に' },
            { id: 'c', text: 'at', icon: '📍', nuance: '〜に(地点)' }
        ],
        correctId: 'a',
        explanation: "Onは「〜の上に」で、表面に接触している時に使うよ。"
    },
    {
        id: 37,
        category: 'prepositions',
        text: "箱『の中に』入っている",
        englishText: "In the box",
        situation: "何かが箱に入れられている",
        icon: '📦',
        options: [
            { id: 'a', text: 'on', icon: '⬆️', nuance: '〜の上に' },
            { id: 'b', text: 'in', icon: '📥', nuance: '〜の中に' },
            { id: 'c', text: 'at', icon: '📍', nuance: '〜に' }
        ],
        correctId: 'b',
        explanation: "Inは「〜の中に」。空間や容器の内部を表すよ。"
    },
    {
        id: 38,
        category: 'prepositions',
        text: "学校『で』勉強する",
        englishText: "At school",
        situation: "学校という場所にいる",
        icon: '🏫',
        options: [
            { id: 'a', text: 'on', icon: '⬆️', nuance: '〜の上に' },
            { id: 'b', text: 'in', icon: '📦', nuance: '〜の中に' },
            { id: 'c', text: 'at', icon: '📍', nuance: '〜で(地点)' }
        ],
        correctId: 'c',
        explanation: "Atは「〜で・〜に」で、特定の地点や場所を示すよ。At schoolは「学校で」だね。"
    },
    {
        id: 39,
        category: 'prepositions',
        text: "3時『に』会いましょう",
        englishText: "At 3 o'clock",
        situation: "時刻を指定する",
        icon: '🕒',
        options: [
            { id: 'a', text: 'at', icon: '⏰', nuance: '〜に(時刻)' },
            { id: 'b', text: 'on', icon: '📅', nuance: '〜に(日)' },
            { id: 'c', text: 'in', icon: '📆', nuance: '〜に(期間)' }
        ],
        correctId: 'a',
        explanation: "Atは時刻を表す時に使うよ。At 3 o'clockで「3時に」だね。"
    },
    {
        id: 40,
        category: 'prepositions',
        text: "月曜日『に』会議がある",
        englishText: "On Monday",
        situation: "曜日を指定する",
        icon: '📅',
        options: [
            { id: 'a', text: 'at', icon: '⏰', nuance: '〜に(時刻)' },
            { id: 'b', text: 'on', icon: '📆', nuance: '〜に(日・曜日)' },
            { id: 'c', text: 'in', icon: '🗓️', nuance: '〜に(月・年)' }
        ],
        correctId: 'b',
        explanation: "Onは曜日や日付を表す時に使うよ。On Mondayで「月曜日に」だね。"
    },
    {
        id: 41,
        category: 'prepositions',
        text: "夏『に』旅行する",
        englishText: "In summer",
        situation: "季節を指定する",
        icon: '☀️',
        options: [
            { id: 'a', text: 'at', icon: '⏰', nuance: '〜に(時刻)' },
            { id: 'b', text: 'on', icon: '📅', nuance: '〜に(日)' },
            { id: 'c', text: 'in', icon: '📆', nuance: '〜に(月・季節)' }
        ],
        correctId: 'c',
        explanation: "Inは月、季節、年など長い期間を表す時に使うよ。In summerで「夏に」だね。"
    },
    {
        id: 42,
        category: 'prepositions',
        text: "彼女『について』話す",
        englishText: "Talk about her",
        situation: "話題・テーマを示す",
        icon: '💬',
        options: [
            { id: 'a', text: 'about', icon: '💭', nuance: '〜について' },
            { id: 'b', text: 'to', icon: '➡️', nuance: '〜へ' },
            { id: 'c', text: 'for', icon: '🎁', nuance: '〜のために' }
        ],
        correctId: 'a',
        explanation: "Aboutは「〜について」でテーマや話題を表すよ。Talk aboutで「〜について話す」だね。"
    },
    {
        id: 43,
        category: 'prepositions',
        text: "東京『へ』行く",
        englishText: "Go to Tokyo",
        situation: "目的地を示す",
        icon: '🚄',
        options: [
            { id: 'a', text: 'to', icon: '🎯', nuance: '〜へ(方向)' },
            { id: 'b', text: 'for', icon: '🎁', nuance: '〜のために' },
            { id: 'c', text: 'from', icon: '⬅️', nuance: '〜から' }
        ],
        correctId: 'a',
        explanation: "Toは「〜へ」で方向や目的地を表すよ。Go to Tokyoで「東京へ行く」だね。"
    },
    {
        id: 44,
        category: 'prepositions',
        text: "あなた『のために』作った",
        englishText: "Made for you",
        situation: "誰かのために何かをする",
        icon: '🎁',
        options: [
            { id: 'a', text: 'to', icon: '➡️', nuance: '〜へ' },
            { id: 'b', text: 'for', icon: '💝', nuance: '〜のために' },
            { id: 'c', text: 'with', icon: '🤝', nuance: '〜と一緒に' }
        ],
        correctId: 'b',
        explanation: "Forは「〜のために」で、利益や目的を表すよ。Made for youで「あなたのために作った」だね。"
    },
    {
        id: 45,
        category: 'prepositions',
        text: "友達『と一緒に』行く",
        englishText: "Go with friends",
        situation: "誰かと同行する",
        icon: '👭',
        options: [
            { id: 'a', text: 'to', icon: '➡️', nuance: '〜へ' },
            { id: 'b', text: 'for', icon: '🎁', nuance: '〜のために' },
            { id: 'c', text: 'with', icon: '🤝', nuance: '〜と一緒に' }
        ],
        correctId: 'c',
        explanation: "Withは「〜と一緒に」で同伴を表すよ。Go with friendsで「友達と行く」だね。"
    },

    // ========== IDIOMS CATEGORY ==========
    {
        id: 46,
        category: 'idioms',
        text: "'Break the ice' の意味は？",
        englishText: "Break the ice",
        situation: "初対面の人たちとの会話",
        icon: '❄️',
        options: [
            { id: 'a', text: '氷を壊す', icon: '🔨', nuance: '文字通りの意味' },
            { id: 'b', text: '緊張をほぐす', icon: '😊', nuance: '慣用句の意味' },
            { id: 'c', text: '約束を破る', icon: '💔', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Break the iceは「緊張をほぐす・場を和ませる」という慣用句だよ。"
    },
    {
        id: 47,
        category: 'idioms',
        text: "'Piece of cake' の意味は？",
        englishText: "Piece of cake",
        situation: "簡単な課題について",
        icon: '🍰',
        options: [
            { id: 'a', text: 'ケーキ1切れ', icon: '🎂', nuance: '文字通り' },
            { id: 'b', text: 'とても簡単', icon: '✌️', nuance: '慣用句' },
            { id: 'c', text: 'おいしい', icon: '😋', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Piece of cakeは「朝飯前・とても簡単」という意味の慣用句だよ。"
    },
    {
        id: 48,
        category: 'idioms',
        text: "'Hit the books' の意味は？",
        englishText: "Hit the books",
        situation: "試験前の学生",
        icon: '📚',
        options: [
            { id: 'a', text: '本を殴る', icon: '👊', nuance: '文字通り' },
            { id: 'b', text: '勉強する', icon: '✍️', nuance: '慣用句' },
            { id: 'c', text: '本を売る', icon: '💰', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Hit the booksは「一生懸命勉強する」という意味の慣用句だよ。"
    },
    {
        id: 49,
        category: 'idioms',
        text: "'Cost an arm and a leg' の意味は？",
        englishText: "Cost an arm and a leg",
        situation: "高価な買い物",
        icon: '💸',
        options: [
            { id: 'a', text: '腕と足がかかる', icon: '🦾', nuance: '文字通り' },
            { id: 'b', text: 'とても高価', icon: '💰', nuance: '慣用句' },
            { id: 'c', text: '危険', icon: '⚠️', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Cost an arm and a legは「とても高価・法外な値段」という意味だよ。"
    },
    {
        id: 50,
        category: 'idioms',
        text: "'Under the weather' の意味は？",
        englishText: "Under the weather",
        situation: "体調について",
        icon: '🌦️',
        options: [
            { id: 'a', text: '天気の下', icon: '☔', nuance: '文字通り' },
            { id: 'b', text: '体調が悪い', icon: '🤒', nuance: '慣用句' },
            { id: 'c', text: '外にいる', icon: '🚶', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Under the weatherは「体調が悪い・気分がすぐれない」という意味だよ。"
    },
    {
        id: 51,
        category: 'idioms',
        text: "'Spill the beans' の意味は？",
        englishText: "Spill the beans",
        situation: "秘密について",
        icon: '🫘',
        options: [
            { id: 'a', text: '豆をこぼす', icon: '💧', nuance: '文字通り' },
            { id: 'b', text: '秘密を漏らす', icon: '🤫', nuance: '慣用句' },
            { id: 'c', text: '料理する', icon: '👨‍🍳', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Spill the beansは「秘密を漏らす・うっかり話してしまう」という意味だよ。"
    },
    {
        id: 52,
        category: 'idioms',
        text: "'Once in a blue moon' の意味は？",
        englishText: "Once in a blue moon",
        situation: "頻度について",
        icon: '🌙',
        options: [
            { id: 'a', text: '青い月に一度', icon: '🔵', nuance: '文字通り' },
            { id: 'b', text: 'めったにない', icon: '⏰', nuance: '慣用句' },
            { id: 'c', text: '毎月', icon: '📅', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Once in a blue moonは「めったにない・ごくたまに」という意味だよ。"
    },
    {
        id: 53,
        category: 'idioms',
        text: "'Let the cat out of the bag' の意味は？",
        englishText: "Let the cat out of the bag",
        situation: "秘密について",
        icon: '🐱',
        options: [
            { id: 'a', text: '猫を出す', icon: '🎒', nuance: '文字通り' },
            { id: 'b', text: '秘密を明かす', icon: '💡', nuance: '慣用句' },
            { id: 'c', text: 'ペットを飼う', icon: '🏠', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Let the cat out of the bagは「秘密を明かす・うっかり漏らす」という意味だよ。"
    },
    {
        id: 54,
        category: 'idioms',
        text: "'Barking up the wrong tree' の意味は？",
        englishText: "Barking up the wrong tree",
        situation: "問題解決について",
        icon: '🌳',
        options: [
            { id: 'a', text: '間違った木に吠える', icon: '🐕', nuance: '文字通り' },
            { id: 'b', text: '見当違いをする', icon: '❌', nuance: '慣用句' },
            { id: 'c', text: '諦める', icon: '🏳️', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "Barking up the wrong treeは「見当違いをする・間違った方法で取り組む」という意味だよ。"
    },
    {
        id: 55,
        category: 'idioms',
        text: "'The ball is in your court' の意味は？",
        englishText: "The ball is in your court",
        situation: "決断について",
        icon: '🎾',
        options: [
            { id: 'a', text: 'ボールがコートに', icon: '🎯', nuance: '文字通り' },
            { id: 'b', text: 'あなたの番', icon: '👉', nuance: '慣用句' },
            { id: 'c', text: 'ゲーム中', icon: '🏆', nuance: '別の意味' }
        ],
        correctId: 'b',
        explanation: "The ball is in your courtは「次はあなたの番・あなたが決める番」という意味だよ。"
    },

    // ========== BUSINESS CATEGORY ==========
    {
        id: 56,
        category: 'business',
        text: "会議を『予定する』",
        englishText: "Schedule a meeting",
        situation: "ミーティングの日時を決める",
        icon: '📅',
        options: [
            { id: 'a', text: 'Schedule', icon: '⏰', nuance: '予定を組む' },
            { id: 'b', text: 'Plan', icon: '📋', nuance: '計画する' },
            { id: 'c', text: 'Organize', icon: '📊', nuance: '組織する' }
        ],
        correctId: 'a',
        explanation: "Scheduleは「予定を組む・スケジュールする」という意味。ビジネスで頻繁に使うよ。"
    },
    {
        id: 57,
        category: 'business',
        text: "締め切り『を守る』",
        englishText: "Meet the deadline",
        situation: "期限内に仕事を終える",
        icon: '⏱️',
        options: [
            { id: 'a', text: 'Meet', icon: '🎯', nuance: '満たす・守る' },
            { id: 'b', text: 'Keep', icon: '✅', nuance: '保つ' },
            { id: 'c', text: 'Follow', icon: '👣', nuance: '従う' }
        ],
        correctId: 'a',
        explanation: "Meet the deadlineは「締め切りを守る」という決まった表現だよ。"
    },
    {
        id: 58,
        category: 'business',
        text: "提案を『提出する』",
        englishText: "Submit a proposal",
        situation: "企画書を出す",
        icon: '📄',
        options: [
            { id: 'a', text: 'Send', icon: '📧', nuance: '送る' },
            { id: 'b', text: 'Submit', icon: '📮', nuance: '提出する' },
            { id: 'c', text: 'Give', icon: '🤲', nuance: '与える' }
        ],
        correctId: 'b',
        explanation: "Submitは「正式に提出する」というフォーマルな表現。ビジネスや学術で使うよ。"
    },
    {
        id: 59,
        category: 'business',
        text: "プロジェクトを『監督する』",
        englishText: "Supervise the project",
        situation: "チームを管理する",
        icon: '👔',
        options: [
            { id: 'a', text: 'Watch', icon: '👀', nuance: '見る' },
            { id: 'b', text: 'Supervise', icon: '👨‍💼', nuance: '監督する' },
            { id: 'c', text: 'Control', icon: '🎮', nuance: '支配する' }
        ],
        correctId: 'b',
        explanation: "Superviseは「監督する・管理する」という意味。上司がチームを管理する時に使うよ。"
    },
    {
        id: 60,
        category: 'business',
        text: "契約を『交渉する』",
        englishText: "Negotiate a contract",
        situation: "条件について話し合う",
        icon: '🤝',
        options: [
            { id: 'a', text: 'Discuss', icon: '💬', nuance: '議論する' },
            { id: 'b', text: 'Negotiate', icon: '⚖️', nuance: '交渉する' },
            { id: 'c', text: 'Talk', icon: '🗣️', nuance: '話す' }
        ],
        correctId: 'b',
        explanation: "Negotiateは「交渉する」という意味。ビジネスの契約や条件交渉に使うよ。"
    },
    {
        id: 61,
        category: 'business',
        text: "同僚と『協力する』",
        englishText: "Collaborate with colleagues",
        situation: "チームワークを大切にする",
        icon: '👥',
        options: [
            { id: 'a', text: 'Help', icon: '🆘', nuance: '助ける' },
            { id: 'b', text: 'Work with', icon: '🤜🤛', nuance: '一緒に働く' },
            { id: 'c', text: 'Collaborate', icon: '🤝', nuance: '協力する' }
        ],
        correctId: 'c',
        explanation: "Collaborateは「協力する・共同で取り組む」という意味。プロフェッショナルな響きがあるよ。"
    },
    {
        id: 62,
        category: 'business',
        text: "データを『分析する』",
        englishText: "Analyze data",
        situation: "情報を詳しく調べる",
        icon: '📊',
        options: [
            { id: 'a', text: 'Look at', icon: '👀', nuance: '見る' },
            { id: 'b', text: 'Check', icon: '✅', nuance: '確認する' },
            { id: 'c', text: 'Analyze', icon: '🔍', nuance: '分析する' }
        ],
        correctId: 'c',
        explanation: "Analyzeは「詳しく分析する」という意味。データや情報を深く調べる時に使うよ。"
    },
    {
        id: 63,
        category: 'business',
        text: "目標を『達成する』",
        englishText: "Achieve a goal",
        situation: "目的を成し遂げる",
        icon: '🎯',
        options: [
            { id: 'a', text: 'Get', icon: '👐', nuance: '得る' },
            { id: 'b', text: 'Achieve', icon: '🏆', nuance: '達成する' },
            { id: 'c', text: 'Finish', icon: '🏁', nuance: '終える' }
        ],
        correctId: 'b',
        explanation: "Achieveは「目標を達成する」という意味。ビジネスでよく使う重要な動詞だよ。"
    },
    {
        id: 64,
        category: 'business',
        text: "アイデアを『実装する』",
        englishText: "Implement an idea",
        situation: "計画を実行に移す",
        icon: '💡',
        options: [
            { id: 'a', text: 'Do', icon: '✅', nuance: 'する' },
            { id: 'b', text: 'Make', icon: '🔨', nuance: '作る' },
            { id: 'c', text: 'Implement', icon: '⚙️', nuance: '実装する' }
        ],
        correctId: 'c',
        explanation: "Implementは「実装する・実行する」という意味。アイデアや計画を形にする時に使うよ。"
    },
    {
        id: 65,
        category: 'business',
        text: "クライアントに『報告する』",
        englishText: "Report to the client",
        situation: "進捗を伝える",
        icon: '📢',
        options: [
            { id: 'a', text: 'Tell', icon: '💬', nuance: '伝える' },
            { id: 'b', text: 'Report', icon: '📋', nuance: '報告する' },
            { id: 'c', text: 'Say', icon: '🗣️', nuance: '言う' }
        ],
        correctId: 'b',
        explanation: "Reportは「正式に報告する」という意味。ビジネスで上司やクライアントに報告する時に使うよ。"
    },
    // ========== NATIVE / CASUAL CATEGORY ==========
    {
        id: 1001,
        category: 'native',
        text: "了解した！ (カジュアルに)",
        englishText: "I'm down",
        situation: "友達の提案に賛成する時",
        icon: '👍',
        options: [
            { id: 'a', text: "I understand", icon: '🤔', nuance: '理解した' },
            { id: 'b', text: "I'm down", icon: '👇', nuance: '乗った！' },
            { id: 'c', text: "I agree", icon: '🤝', nuance: '賛成する' }
        ],
        correctId: 'b',
        explanation: "I'm downは「賛成する」「参加する」という意味の軽いスラング。友達との会話でよく使うよ。",
        dialogue: [
            { speaker: "Friend", text: "Want to grab some burgers?" },
            { speaker: "You", text: "I'm down! Let's go." }
        ]
    },
    {
        id: 1002,
        category: 'native',
        text: "ごめん、私のミスだ",
        englishText: "My bad",
        situation: "軽い失敗を謝る時",
        icon: '🙏',
        options: [
            { id: 'a', text: "I'm sorry", icon: '🙇', nuance: 'ごめんなさい' },
            { id: 'b', text: "My bad", icon: '😅', nuance: 'わりぃ！' },
            { id: 'c', text: "Excuse me", icon: '🙋', nuance: '失礼' }
        ],
        correctId: 'b',
        explanation: "My badは「あ、ごめん」「私のミス」という軽い謝罪。深刻な時には使わないでね。",
        dialogue: [
            { speaker: "Friend", text: "You stepped on my foot!" },
            { speaker: "You", text: "Oops, my bad." }
        ]
    },
    {
        id: 1003,
        category: 'native',
        text: "気にしないで！",
        englishText: "No worries",
        situation: "謝られたり、お礼を言われた時",
        icon: '😉',
        options: [
            { id: 'a', text: "Don't mind", icon: '🙅', nuance: '和製英語気味' },
            { id: 'b', text: "No worries", icon: '✨', nuance: '問題ないよ' },
            { id: 'c', text: "You are welcome", icon: '🎩', nuance: 'どういたしまして' }
        ],
        correctId: 'b',
        explanation: "No worriesは「全然大丈夫」「気にしないで」という、とても便利な万能フレーズだよ。",
        dialogue: [
            { speaker: "Colleague", text: "Sorry for the late reply." },
            { speaker: "You", text: "No worries at all." }
        ]
    },
    {
        id: 1004,
        category: 'native',
        text: "もちろん！ (強く肯定)",
        englishText: "You bet",
        situation: "相手の依頼や感謝に対して",
        icon: '💪',
        options: [
            { id: 'a', text: "Of course", icon: '🙆', nuance: 'もちろん' },
            { id: 'b', text: "You bet", icon: '🎰', nuance: '任せて/どういたしまして' },
            { id: 'c', text: "Yes", icon: '⭕', nuance: 'はい' }
        ],
        correctId: 'b',
        explanation: "You betは「もちろん」「どういたしまして」という意味。自信を持って答える時に使おう。",
        dialogue: [
            { speaker: "Boss", text: "Can you finish this by 5?" },
            { speaker: "You", text: "You bet!" }
        ]
    },
    {
        id: 1005,
        category: 'native',
        text: "上手くいくといいね (幸運を祈る)",
        englishText: "Fingers crossed",
        situation: "良い結果を願う時",
        icon: '🤞',
        options: [
            { id: 'a', text: "Good luck", icon: '🍀', nuance: '幸運を' },
            { id: 'b', text: "Fingers crossed", icon: '🤞', nuance: '祈ってるよ' },
            { id: 'c', text: "Hope so", icon: '🙏', nuance: 'そう願う' }
        ],
        correctId: 'b',
        explanation: "Fingers crossedは指をクロスさせて幸運を祈るジェスチャーから。「上手くいきますように」という意味だよ。",
        dialogue: [
            { speaker: "You", text: "I have an interview today." },
            { speaker: "Friend", text: "Good luck! Fingers crossed." }
        ]
    },
    {
        id: 1006,
        category: 'native',
        text: "ちょっと聞いて (注目して)",
        englishText: "Heads up",
        situation: "事前に知らせや警告をする時",
        icon: '⚠️',
        options: [
            { id: 'a', text: "Listen", icon: '👂', nuance: '聞いて' },
            { id: 'b', text: "Look", icon: '👀', nuance: '見て' },
            { id: 'c', text: "Heads up", icon: '🗣️', nuance: '知らせ/警告' }
        ],
        correctId: 'c',
        explanation: "Heads upは「事前の知らせ」「警告」という意味。「ちょっと言っておくけど」という感じで使うよ。",
        dialogue: [
            { speaker: "Colleague", text: "Just a heads up, the meeting is cancelled." },
            { speaker: "You", text: "Thanks for telling me." }
        ]
    },
    {
        id: 1007,
        category: 'native',
        text: "いっぱいいっぱいです (忙しすぎて)",
        englishText: "I'm swamped",
        situation: "仕事などが忙殺されている時",
        icon: '😵',
        options: [
            { id: 'a', text: "I'm busy", icon: '🏃', nuance: '忙しい' },
            { id: 'b', text: "I'm swamped", icon: '🌊', nuance: '沼にハマった位忙しい' },
            { id: 'c', text: "I'm full", icon: '🈵', nuance: 'お腹いっぱい' }
        ],
        correctId: 'b',
        explanation: "Swampedは「沼に沈む」こと。仕事などが山積みで身動きが取れないくらい忙しい時に使うよ。",
        dialogue: [
            { speaker: "Friend", text: "Dinner tonight?" },
            { speaker: "You", text: "Can't. I'm totally swamped." }
        ]
    },
    {
        id: 1008,
        category: 'native',
        text: "今日はもう終わりにしよう",
        englishText: "Call it a day",
        situation: "仕事を切り上げる時",
        icon: '🌙',
        options: [
            { id: 'a', text: "Finish work", icon: '🔚', nuance: '仕事を終える' },
            { id: 'b', text: "Call it a day", icon: '📢', nuance: '今日はここまで' },
            { id: 'c', text: "Go home", icon: '🏠', nuance: '帰る' }
        ],
        correctId: 'b',
        explanation: "Call it a dayは「今日はこれで終わりにする」という決まり文句。残業を切り上げる時にぴったり。",
        dialogue: [
            { speaker: "You", text: "It's already 8 PM." },
            { speaker: "Colleague", text: "Yeah, let's call it a day." }
        ]
    },
    {
        id: 1009,
        category: 'native',
        text: "なんとなく・直感で",
        englishText: "Play it by ear",
        situation: "計画を決めずに流れでやる時",
        icon: '👂',
        options: [
            { id: 'a', text: "No plan", icon: '📝', nuance: '無計画' },
            { id: 'b', text: "Play it by ear", icon: '🎶', nuance: '出たとこ勝負で' },
            { id: 'c', text: "Just do it", icon: '🏃', nuance: 'とりあえずやる' }
        ],
        correctId: 'b',
        explanation: "Play it by earは、楽譜を見ずに耳コピで演奏することから、「臨機応変にやる」「様子を見て決める」という意味。",
        dialogue: [
            { speaker: "Friend", text: "What's the plan for tomorrow?" },
            { speaker: "You", text: "Let's just play it by ear." }
        ]
    },
    {
        id: 1010,
        category: 'native',
        text: "最高！ (スラング)",
        englishText: "It's sick",
        situation: "すごくカッコいいものを見た時",
        icon: '🤩',
        options: [
            { id: 'a', text: "It's sick", icon: '🤒', nuance: 'ヤバい（良い意味）' },
            { id: 'b', text: "It's good", icon: '👍', nuance: '良い' },
            { id: 'c', text: "It's bad", icon: '👎', nuance: '悪い' }
        ],
        correctId: 'a',
        explanation: "Sickは本来「病気」だけど、スラングでは「最高」「ヤバい（かっこいい）」という意味で若者がよく使うよ。",
        dialogue: [
            { speaker: "You", text: "Look at his new car!" },
            { speaker: "Friend", text: "Wow, that's sick!" }
        ]
    },
    // ========== NEW EXPANSION ==========
    {
        id: 111,
        category: 'verbs',
        text: "会議を始めるよ",
        englishText: "Let's start the meeting",
        situation: "会議の開始を告げる時",
        icon: '🎬',
        options: [
            {
                id: 'a',
                text: "start",
                icon: '▶️',
                nuance: '始める（一般的）',
                advice: '日常会話で「さあ始めよう」と軽く言う時に使います。',
                example: "Let's start the party!"
            },
            {
                id: 'b',
                text: "begin",
                icon: '🧐',
                nuance: '始める（硬め）',
                advice: 'スピーチや書き言葉で、少し改まって始める時に使います。',
                example: "Shall we begin the ceremony?"
            },
            {
                id: 'c',
                text: "commence",
                icon: '📜',
                nuance: '開始する（超硬）',
                advice: '式典や法的文書など、極めてフォーマルな場でのみ使います。',
                example: "The ceremony will commence at noon."
            }
        ],
        correctId: 'a',
        explanation: "日常的な会議ならStartでOK。Beginでも間違いではないけど、少しフォーマルな響きになるよ。"
    },
    {
        id: 112,
        category: 'verbs',
        text: "その本、面白いと思うよ (推測)",
        englishText: "I guess that book is interesting",
        situation: "確信はないけどそう思う時",
        icon: '🤔',
        options: [
            {
                id: 'a',
                text: "think",
                icon: '🧠',
                nuance: '思う（自分の意見）',
                advice: '自分の「意見」として、ある程度自信を持って言う時に使います。',
                example: "I think this plan is good."
            },
            {
                id: 'b',
                text: "guess",
                icon: '🎲',
                nuance: '推測する',
                advice: '根拠が薄く「たぶん〜かな」と軽く推測する時に使います。',
                example: "I guess he is busy today."
            },
            {
                id: 'c',
                text: "believe",
                icon: '🙏',
                nuance: '信じる',
                advice: '強い信念や、確信に近い信頼がある時に使います。',
                example: "I believe in you."
            }
        ],
        correctId: 'b',
        explanation: "根拠がなくて「多分そうなんじゃないかな」という時はGuessがぴったり。"
    },
    {
        id: 113,
        category: 'verbs',
        text: "彼は将来有望に見える",
        englishText: "He seems promising",
        situation: "外見や様子から判断する時",
        icon: '👀',
        options: [
            {
                id: 'a',
                text: "looks",
                icon: '👁️',
                nuance: '見える（視覚）',
                advice: 'パッと見の外見だけについて「〜に見える」と言う時に使います。',
                example: "He looks happy."
            },
            {
                id: 'b',
                text: "seems",
                icon: '☁️',
                nuance: '思われる（状況）',
                advice: '雰囲気や状況からして「〜っぽいな」と主観的に判断する時に使います。',
                example: "It seems like it's going to rain."
            },
            {
                id: 'c',
                text: "appears",
                icon: '✨',
                nuance: '見える（客観）',
                advice: '事実に基づいて、客観的に「〜であるようだ」と述べる時に使います。',
                example: "He appears to be calm."
            }
        ],
        correctId: 'b',
        explanation: "Seemsは「（なんとなく）〜のように思われる」という主観的な判断に便利だよ。"
    },
    {
        id: 1011,
        category: 'native',
        text: "やっぱりやめた (計画変更)",
        englishText: "I changed my mind",
        situation: "決断を変える時",
        icon: '🔄',
        options: [
            {
                id: 'a',
                text: "I stopped",
                icon: '🛑',
                nuance: '動作を止めた',
                advice: '歩くのを止めた、話すのを止めた、など「動作」を中断する時に使います。',
                example: "I stopped running."
            },
            {
                id: 'b',
                text: "I changed my mind",
                icon: '🧠',
                nuance: '気が変わった',
                advice: '一度決めたことを「やっぱりこうする！」と変える時に使います。',
                example: "I was going to eat out, but I changed my mind."
            },
            {
                id: 'c',
                text: "I quit",
                icon: '🚪',
                nuance: '辞める',
                advice: '仕事や学校、あるいは悪い習慣を完全に辞める時に使います。',
                example: "I quit smoking."
            }
        ],
        correctId: 'b',
        explanation: "「気が変わった」は英語で Change my mind と言うんだ。よく使うよ。",
        dialogue: [
            { speaker: "Friend", text: "Are you buying that shirt?" },
            { speaker: "You", text: "Nah, I changed my mind." }
        ]
    },
    {
        id: 1012,
        category: 'native',
        text: "これ、おごるよ (私が払う)",
        englishText: "It's on me",
        situation: "会計を支払う時",
        icon: '💳',
        options: [
            {
                id: 'a',
                text: "I pay",
                icon: '💰',
                nuance: '私が払う（事実）',
                advice: '事実として「私が払います」と伝える時に使いますが、おごる時の決まり文句ではありません。',
                example: "I pay the bills every month."
            },
            {
                id: 'b',
                text: "It's on me",
                icon: '☝️',
                nuance: '私のおごりだ',
                advice: '「ここは任せて！」と友人にかっこよくおごる時に使います。',
                example: "Lunch is on me today."
            },
            {
                id: 'c',
                text: "My treat",
                icon: '🎁',
                nuance: '私のおもてなし',
                advice: '「今日は私のおもてなしです」と、少し丁寧に、あるいはデートなどで使います。',
                example: "Let's go for dinner. My treat."
            }
        ],
        correctId: 'b',
        explanation: "Barなどで「ここは俺が持つよ」という時に It's on me と言うとかっこいい！",
        dialogue: [
            { speaker: "Friend", text: "How much is my share?" },
            { speaker: "You", text: "Don't worry, it's on me." }
        ]
    },
    {
        id: 1013,
        category: 'native',
        text: "久しぶり！",
        englishText: "Long time no see",
        situation: "友人と再会した時",
        icon: '👋',
        options: [
            { id: 'a', text: "Long time no see", icon: '🐢', nuance: '久しぶり', reason: '定番の挨拶です。' },
            { id: 'b', text: "Nice to meet you", icon: '🤝', nuance: 'はじめまして', reason: '初対面の挨拶です。再会時には使いません。' },
            { id: 'c', text: "See you later", icon: '🕰️', nuance: 'またね', reason: '別れ際の挨拶です。' }
        ],
        correctId: 'a',
        explanation: "文法的には変だけど、もう完全に定着しているフレーズ。久しぶりの友達にはこれ！",
        dialogue: [
            { speaker: "You", text: "Hey! Long time no see!" },
            { speaker: "Friend", text: "I know! It's been ages." }
        ]
    }
];

// ランダムに問題を取得する関数
export function getRandomQuestions(count = 5) {
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, QUIZ_QUESTIONS.length));
}

// カテゴリ別に問題を取得する関数 (Adaptive Learning)
export function getQuestionsByCategory(categoryId, count = 5, learningState = null) {
    const categoryQuestions = QUIZ_QUESTIONS.filter(q => q.category === categoryId);

    // Safety check: ensure arrays exist even if learningState gives partial data
    const wrongQuestionIds = learningState?.wrongQuestionIds || [];
    const completedQuestionIds = learningState?.completedQuestionIds || [];

    if (!learningState) {
        // Fallback to simple random if no state provided
        const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, categoryQuestions.length));
    }

    // 1. Prioritize Wrong Questions (Review)
    const wrongQuestions = categoryQuestions.filter(q => wrongQuestionIds.includes(q.id));

    // 2. Then New Questions (Unseen)
    const newQuestions = categoryQuestions.filter(q =>
        !completedQuestionIds.includes(q.id) && !wrongQuestionIds.includes(q.id)
    );

    // 3. Then mastered/completed questions (Review/Filler)
    const masteredQuestions = categoryQuestions.filter(q =>
        completedQuestionIds.includes(q.id) && !wrongQuestionIds.includes(q.id)
    );

    let selected = [];

    // Shuffle each group
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    // Logic: Fill with Wrong -> New -> Mastered
    selected = [...selected, ...shuffle(wrongQuestions)];

    if (selected.length < count) {
        selected = [...selected, ...shuffle(newQuestions)];
    }

    if (selected.length < count) {
        selected = [...selected, ...shuffle(masteredQuestions)];
    }

    // Limit to requested count
    return selected.slice(0, Math.min(count, categoryQuestions.length));
}

// 特定のIDの問題を取得
export function getQuestionById(id) {
    return QUIZ_QUESTIONS.find(q => q.id === id);
}

// カテゴリごとの問題数を取得
export function getCategoryQuestionCount(categoryId) {
    return QUIZ_QUESTIONS.filter(q => q.category === categoryId).length;
}

// 全カテゴリの統計を取得
export function getAllCategoryStats() {
    const categories = ['verbs', 'adjectives', 'prepositions', 'idioms', 'business'];
    return categories.map(catId => ({
        id: catId,
        totalQuestions: getCategoryQuestionCount(catId)
    }));
}

