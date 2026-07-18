(function () {
  "use strict";

  /* ========== PAGE-SPECIFIC H1 & SUBTEXT CONFIG ========== */
  var pageConfig = {
    "/": {
      title: "\u2728 Stylish Name Generator",
      subtitle: "Type your name, get 1,000+ fancy styles instantly \u2014 cursive, gothic, bubble, symbols. Works on Free Fire, PUBG, Instagram, Discord, TikTok. One click to copy."
    },
    "/pubg-stylish-name-generator": {
      title: "\u2728 PUBG Stylish Name Generator",
      subtitle: "Create stylish names for PUBG Mobile & BGMI \u2014 instant styles, one click to copy."
    },
    "/free-fire-stylish-name-generator": {
      title: "\u2728 Free Fire Stylish Name Generator",
      subtitle: "Generate stylish Free Fire names instantly \u2014 cursive, gothic, symbols. One click to copy."
    },
    "/instagram-stylish-name-generator": {
      title: "\u2728 Instagram Stylish Name Generator",
      subtitle: "Style your Instagram name and bio instantly \u2014 one click to copy."
    },
    "/facebook-stylish-name-generator": {
      title: "\u2728 Facebook Stylish Name Generator",
      subtitle: "Create stylish Facebook profile names instantly \u2014 one click to copy."
    },
    "/urdu-stylish-name-generator": {
      title: "\u2728 Urdu Stylish Name Generator",
      subtitle: "Turn your name into a beautiful Urdu style instantly \u2014 one click to copy."
    },
    "/hindi-stylish-name-generator": {
      title: "\u2728 Hindi Stylish Name Generator",
      subtitle: "Turn your name into a beautiful Hindi style instantly \u2014 one click to copy."
    }
  };

  /* Detect current page path and apply matching config */
  var currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  var config = pageConfig[currentPath] || pageConfig["/"];

  var pageTitleEl = document.getElementById("sng-page-title");
  var pageSubtitleEl = document.getElementById("sng-page-subtitle");
  if (pageTitleEl) pageTitleEl.textContent = config.title;
  if (pageSubtitleEl) pageSubtitleEl.textContent = config.subtitle;

  /* Ensure viewport meta exists (needed for standalone testing; WordPress themes already have this) */
  if (!document.querySelector('meta[name="viewport"]')) {
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    (document.head || document.getElementsByTagName('head')[0]).appendChild(meta);
  }

  /* ========== DATA ========== */
  var categories = [
    { icon: "★", label: "Best", key: "best" },
    { icon: "❤️", label: "Love", key: "love" },
    { icon: "🎨", label: "Creative", key: "creative" },
    { icon: "🎮", label: "Gaming", key: "gaming" },
    { icon: "🔗", label: "Joiners", key: "joiners" },
    { icon: "💎", label: "Stylish", key: "stylish" },
    { icon: "🔹", label: "Simple", key: "simple" },
    { icon: "😢", label: "Sad", key: "sad" },
    { icon: "✨", label: "Aesthetic", key: "aesthetic" },
    { icon: "😊", label: "Happy", key: "happy" },
    { icon: "🔣", label: "Symbols", key: "symbols" },
    { icon: "😎", label: "Cool", key: "cool" },
    { icon: "💪", label: "Gym", key: "gym" },
    { icon: "👋", label: "Hello", key: "hello" },
    { icon: "🔥", label: "Popular", key: "popular" },
    { icon: "🔫", label: "Free Fire", key: "freefire" },
    { icon: "⭐", label: "Stars", key: "stars" },
    { icon: "😊", label: "Emojis", key: "emojis" },
    { icon: "🤪", label: "Crazy", key: "crazy" },
    { icon: "🎩", label: "Fancy", key: "fancy" },
    { icon: "📦", label: "Boxed", key: "boxed" },
    { icon: "🎂", label: "Birthday", key: "birthday" },
    { icon: "🙏", label: "Thanks", key: "thanks" },
    { icon: "🎉", label: "Party", key: "party" },
    { icon: "🐰", label: "Cute", key: "cute" },
    { icon: "😠", label: "Serious", key: "serious" },
    { icon: "🍬", label: "Sweet", key: "sweet" },
    { icon: "👹", label: "Ugly", key: "ugly" },
    { icon: "👻", label: "Weird", key: "weird" },
    { icon: "🔍", label: "Small", key: "small" },
    { icon: "⚔️", label: "Sword", key: "sword" },
    { icon: "⚽", label: "Sport", key: "sport" },
    { icon: "👾", label: "Anime", key: "anime" },
    { icon: "🔫", label: "Gun", key: "gun" },
    { icon: "🔑", label: "Key", key: "key" },
    { icon: "🔠", label: "Bold", key: "bold" },
    { icon: "🧙", label: "PUBG", key: "pubg" },
    { icon: "✨", label: "Magic", key: "magic" },
    { icon: "📱", label: "Social Media", key: "socialmedia" }
  ];

  var styles = {
    best: [
      "✨ {name} ✨", "꧁ {name} ꧂", "★彡 {name} 彡★", "꧁༒ {name} ༒꧂",
      "▄︻デ {name} ═══━━", "◥꧁ {name} ꧂◤", "☆꧁✬◦ {name} ◦✬꧂☆",
      "╰‿╯ {name} ╰‿╯", "❖ {name} ❖", "⊹⊱ {name} ⊰⊹",
      "『 {name} 』", "〖 {name} 〗"
    ],
    love: [
      "♥ {name} ♥", "💕 {name} 💕", "❤️‍🔥 {name} ❤️‍🔥", "♡ {name} ♡",
      "💗 {name} 💗", "꧁❤ {name} ❤꧂", "°•♡ {name} ♡•°", "💘 {name} 💘",
      "ℒ♡ {name} ♡ℒ", "♥‿♥ {name} ♥‿♥", "❣️ {name} ❣️", "💞 {name} 💞"
    ],
    creative: [
      "⌁ {name} ⌁", "◈ {name} ◈", "⟪ {name} ⟫", "╔══ {name} ══╗",
      "⋆⁺₊ {name} ₊⁺⋆", "░▒▓ {name} ▓▒░", "≋ {name} ≋", "◇─◇ {name} ◇─◇",
      "꧁⁣⁣ {name} ꧂", "▸▸ {name} ◂◂", "⌈ {name} ⌉", "⎯⎯ {name} ⎯⎯"
    ],
    gaming: [
      "乂 {name} 乂", "亗 {name} 亗", "ꔪ {name} ꔪ", "☠ {name} ☠",
      "◤ {name} ◢", "▄︻̷̿┻̿═━一 {name}", "ツ {name} ツ", "卍 {name} 卍",
      "彡 {name} 彡", "刀 {name} 刀", "㋡ {name} ㋡", "⊰ {name} ⊱"
    ],
    joiners: [
      "× {name} ×", "• {name} •", "· {name} ·", "| {name} |",
      "» {name} «", "› {name} ‹", "- {name} -", "~ {name} ~",
      "_ {name} _", "= {name} =", ": {name} :", "+ {name} +"
    ],
    stylish: [
      "꧁𓆩 {name} 𓆪꧂", "✿ {name} ✿", "❃ {name} ❃", "❀ {name} ❀",
      "⚜ {name} ⚜", "☬ {name} ☬", "♛ {name} ♛", "♕ {name} ♕",
      "♔ {name} ♔", "♚ {name} ♚", "◆ {name} ◆", "▪ {name} ▪"
    ],
    simple: [
      "• {name} •", "— {name} —", "○ {name} ○", "□ {name} □",
      "· {name} ·", "- {name} -", "‣ {name} ‣", "› {name} ‹",
      "[ {name} ]", "( {name} )", "{ {name} }", "< {name} >"
    ],
    sad: [
      "😢 {name} 😢", "💔 {name} 💔", "☹ {name} ☹", "╥﹏╥ {name} ╥﹏╥",
      "ಥ_ಥ {name} ಥ_ಥ", "( ˃̣̣̥᷄⌓˂̣̣̥᷅ ) {name}", "༼ ༎ຶ ෴ ༎ຶ༽ {name}",
      "☁ {name} ☁", "🥀 {name} 🥀", "😞 {name} 😞", "💧 {name} 💧", "🖤 {name} 🖤"
    ],
    aesthetic: [
      "⋆˙⟡ {name} ⟡˙⋆", "✧˖° {name} °˖✧", "⁺˚⋆ {name} ⋆˚⁺", "₊˚✧ {name} ✧˚₊",
      "ꕤ {name} ꕤ", "⸝⸝ {name} ⸝⸝", "‧₊˚ {name} ˚₊‧", "✦ {name} ✦",
      "⊹ {name} ⊹", "˗ˏˋ {name} ˎˊ˗", "꒰ {name} ꒱", "⌗ {name} ⌗"
    ],
    happy: [
      "☺ {name} ☺", "😁 {name} 😁", "ヅ {name} ヅ", "ッ {name} ッ",
      "♪ {name} ♪", "☻ {name} ☻", "✌ {name} ✌", "🎈 {name} 🎈",
      "(◕‿◕) {name} (◕‿◕)", "😄 {name} 😄", "🌈 {name} 🌈", "🌟 {name} 🌟"
    ],
    symbols: [
      "† {name} †", "‡ {name} ‡", "⁂ {name} ⁂", "※ {name} ※",
      "⌘ {name} ⌘", "⏣ {name} ⏣", "⎈ {name} ⎈", "⚙ {name} ⚙",
      "⚛ {name} ⚛", "⚡ {name} ⚡", "☢ {name} ☢", "☣ {name} ☣"
    ],
    cool: [
      "😎 {name} 😎", "🕶 {name} 🕶", "⚡ {name} ⚡", "❄ {name} ❄",
      "🔥 {name} 🔥", "☄ {name} ☄", "✯ {name} ✯", "☮ {name} ☮",
      "᎒ {name} ᎒", "♞ {name} ♞", "ꜰ {name} ꜰ", "ᴄ {name} ᴄ"
    ],
    gym: [
      "💪 {name} 💪", "🏋 {name} 🏋", "🔱 {name} 🔱", "⚔ {name} ⚔",
      "🏆 {name} 🏆", "🥇 {name} 🥇", "💥 {name} 💥", "🦾 {name} 🦾",
      "🎯 {name} 🎯", "⚡ {name} ⚡", "🔥 {name} 🔥", "🏅 {name} 🏅"
    ],
    hello: [
      "👋 {name} 👋", "🤗 {name} 🤗", "ᵔᴗᵔ {name} ᵔᴗᵔ", "☀ {name} ☀",
      "✋ {name} ✋", "🙌 {name} 🙌", "🌸 {name} 🌸", "🤝 {name} 🤝",
      "💐 {name} 💐", "🌻 {name} 🌻", "🫶 {name} 🫶", "☘ {name} ☘"
    ],
    popular: [
      "🔥 {name} 🔥", "꧁ {name} ꧂", "★ {name} ★", "✨ {name} ✨",
      "⚡ {name} ⚡", "👑 {name} 👑", "💎 {name} 💎", "🌟 {name} 🌟",
      "♛ {name} ♛", "☆ {name} ☆", "♕ {name} ♕", "💫 {name} 💫"
    ],
    freefire: [
      "꧁𒆜 {name} 𒆜꧂", "꧁⁣⁣⁣ {name} ꧂", "◥꧁ {name} ꧂◤", "▄︻デ {name} ═━",
      "☠ {name} ☠", "亗 {name} 亗", "乂 {name} 乂", "刀 {name} 刀",
      "ꔪ {name} ꔪ", "ꕥ {name} ꕥ", "◈ {name} ◈", "⏤͟͟͞͞ {name} ☆"
    ],
    stars: [
      "★ {name} ★", "☆ {name} ☆", "✩ {name} ✩", "✪ {name} ✪",
      "✫ {name} ✫", "✬ {name} ✬", "✭ {name} ✭", "✮ {name} ✮",
      "✯ {name} ✯", "⭐ {name} ⭐", "🌟 {name} 🌟", "💫 {name} 💫"
    ],
    emojis: [
      "😎 {name} 😎", "🤩 {name} 🤩", "😈 {name} 😈", "👻 {name} 👻",
      "🦋 {name} 🦋", "🌺 {name} 🌺", "🎭 {name} 🎭", "🤖 {name} 🤖",
      "🐉 {name} 🐉", "🦅 {name} 🦅", "🌙 {name} 🌙", "🎪 {name} 🎪"
    ],
    crazy: [
      "🤪 {name} 🤪", "ꉂ {name} ꉂ", "ᕙ(⇀‸↼‶)ᕗ {name}", "¯\\_(ツ)_/¯ {name}",
      "⊂(◉‿◉)つ {name}", "༼ つ ◕_◕ ༽つ {name}", "ᕦ(ò_óˇ)ᕤ {name}",
      "(╯°□°）╯ {name}", "ʕ•ᴥ•ʔ {name} ʕ•ᴥ•ʔ", "ಠ_ಠ {name} ಠ_ಠ",
      "( ͡° ͜ʖ ͡°) {name}", "¬_¬ {name} ¬_¬"
    ],
    fancy: [
      "♚ {name} ♚", "♛ {name} ♛", "♜ {name} ♜", "♝ {name} ♝",
      "♞ {name} ♞", "⚜ {name} ⚜", "☬ {name} ☬", "⚔ {name} ⚔",
      "🏰 {name} 🏰", "👑 {name} 👑", "🎩 {name} 🎩", "🦁 {name} 🦁"
    ],
    boxed: [
      "【 {name} 】", "〘 {name} 〙", "〖 {name} 〗", "「 {name} 」",
      "『 {name} 』", "〔 {name} 〕", "﹝ {name} ﹞", "〈 {name} 〉",
      "《 {name} 》", "⟦ {name} ⟧", "⟨ {name} ⟩", "⟪ {name} ⟫"
    ],
    birthday: [
      "🎂 {name} 🎂", "🎁 {name} 🎁", "🎈 {name} 🎈", "🎊 {name} 🎊",
      "🎉 {name} 🎉", "🥳 {name} 🥳", "🍰 {name} 🍰", "🧁 {name} 🧁",
      "🎀 {name} 🎀", "🎆 {name} 🎆", "🎇 {name} 🎇", "🪅 {name} 🪅"
    ],
    thanks: [
      "🙏 {name} 🙏", "💐 {name} 💐", "🌹 {name} 🌹", "感 {name} 感",
      "☘ {name} ☘", "🫶 {name} 🫶", "🤝 {name} 🤝", "💛 {name} 💛",
      "✿ {name} ✿", "❀ {name} ❀", "🕊 {name} 🕊", "🌿 {name} 🌿"
    ],
    party: [
      "🎉 {name} 🎉", "🎊 {name} 🎊", "🥂 {name} 🥂", "🍾 {name} 🍾",
      "🎶 {name} 🎶", "🪩 {name} 🪩", "💃 {name} 💃", "🕺 {name} 🕺",
      "🎵 {name} 🎵", "🎤 {name} 🎤", "🎷 {name} 🎷", "🎸 {name} 🎸"
    ],
    cute: [
      "🐰 {name} 🐰", "🦊 {name} 🦊", "🐱 {name} 🐱", "🐻 {name} 🐻",
      "(◕ᴗ◕✿) {name}", "ʕ·ᴥ·ʔ {name} ʕ·ᴥ·ʔ", "🌷 {name} 🌷",
      "🌸 {name} 🌸", "🎀 {name} 🎀", "🍓 {name} 🍓", "🐾 {name} 🐾", "🧸 {name} 🧸"
    ],
    serious: [
      "😠 {name} 😠", "⚠ {name} ⚠", "☠ {name} ☠", "⛔ {name} ⛔",
      "🚫 {name} 🚫", "⚒ {name} ⚒", "🗡 {name} 🗡", "🛡 {name} 🛡",
      "⚔ {name} ⚔", "🪖 {name} 🪖", "🎖 {name} 🎖", "💀 {name} 💀"
    ],
    sweet: [
      "🍬 {name} 🍬", "🍭 {name} 🍭", "🍩 {name} 🍩", "🍪 {name} 🍪",
      "🧁 {name} 🧁", "🍫 {name} 🍫", "🍡 {name} 🍡", "🍦 {name} 🍦",
      "🍯 {name} 🍯", "🎂 {name} 🎂", "🍰 {name} 🍰", "🍮 {name} 🍮"
    ],
    ugly: [
      "👹 {name} 👹", "👺 {name} 👺", "💀 {name} 💀", "☠ {name} ☠",
      "👽 {name} 👽", "🤡 {name} 🤡", "💩 {name} 💩", "🧟 {name} 🧟",
      "🧛 {name} 🧛", "🦇 {name} 🦇", "🕷 {name} 🕷", "🪳 {name} 🪳"
    ],
    weird: [
      "👻 {name} 👻", "🛸 {name} 🛸", "🌀 {name} 🌀", "🔮 {name} 🔮",
      "👁‍🗨 {name} 👁‍🗨", "🎭 {name} 🎭", "🃏 {name} 🃏", "🔯 {name} 🔯",
      "♾ {name} ♾", "🧿 {name} 🧿", "⚗ {name} ⚗", "🪬 {name} 🪬"
    ],
    small: [
      "ᵗⁱⁿʸ {name}", "ˢᵐᵃˡˡ {name}", "ᶜᵘᵗᵉ {name}", "ˡⁱᵗᵗˡᵉ {name}",
      "ᵐⁱⁿⁱ {name}", "· {name} ·", "˙ {name} ˙", "ᴛɪɴʏ {name}",
      "ₛₘₐₗₗ {name}", "ˢᵗʸˡⁱˢʰ {name}", "ᵖᵉᵗⁱᵗᵉ {name}", "⁽ {name} ⁾"
    ],
    sword: [
      "⚔ {name} ⚔", "🗡 {name} 🗡", "⚔️ {name} ⚔️", "†═══ {name} ═══†",
      "╬═ {name} ═╬", "┼── {name} ──┼", "⸸ {name} ⸸", "🛡️ {name} 🗡️",
      "▬▬ {name} ▬▬", "═══ {name} ═══", "☩ {name} ☩", "⚜️ {name} ⚜️"
    ],
    sport: [
      "⚽ {name} ⚽", "🏀 {name} 🏀", "🏈 {name} 🏈", "⚾ {name} ⚾",
      "🥊 {name} 🥊", "🎾 {name} 🎾", "🏐 {name} 🏐", "🏆 {name} 🏆",
      "🥇 {name} 🥇", "🏅 {name} 🏅", "🎳 {name} 🎳", "🏒 {name} 🏒"
    ],
    anime: [
      "👾 {name} 👾", "⟨ {name} ⟩", "「 {name} 」", "彡 {name} 彡",
      "ᕙ(⇀‸↼)ᕗ {name}", "(ノ◕ヮ◕)ノ {name}", "♡ {name} ♡", "㊗ {name} ㊗",
      "㊙ {name} ㊙", "ꕤ {name} ꕤ", "シ {name} シ", "ジ {name} ジ"
    ],
    gun: [
      "🔫 {name} 🔫", "▄︻̷̿┻̿═━一 {name}", "▄︻デ {name} ═━", "⌐╦╦═─ {name}",
      "︻╦╤─ {name} ─╤╦︻", "☠ {name} ☠", "💣 {name} 💣", "🎯 {name} 🎯",
      "═══╡ {name} ╞═══", "╾━╤デ {name}", "⊹ {name} ⊹", "☄ {name} ☄"
    ],
    key: [
      "🔑 {name} 🔑", "🗝 {name} 🗝", "⚷ {name} ⚷", "🔐 {name} 🔐",
      "🔓 {name} 🔓", "🔒 {name} 🔒", "※ {name} ※", "⌂ {name} ⌂",
      "⎆ {name} ⎆", "⌖ {name} ⌖", "⍟ {name} ⍟", "⎔ {name} ⎔"
    ],
    bold: [
      "𝗕𝗢𝗟𝗗 {name}", "𝐁𝐎𝐋𝐃 {name}", "𝑩𝑶𝑳𝑫 {name}", "🅱 {name} 🅱",
      "𝔹𝕆𝕃𝔻 {name}", "🇧🇴🇱🇩 {name}", "ᗷOᒪᗪ {name}", "ᏰᎧᏝᎠ {name}",
      "ⒷⓄⓁⒹⓊⓢ {name}", "𝙱𝙾𝙻𝙳 {name}", "🔠 {name} 🔠", "ꞗ {name} ꞗ"
    ],
    pubg: [
      "🧙 {name} 🧙", "꧁⚔ {name} ⚔꧂", "☬ {name} ☬", "亗 {name} 亗",
      "❖ {name} ❖", "◥꧁ {name} ꧂◤", "乂 {name} 乂", "刀 {name} 刀",
      "彡 {name} 彡", "ꔪ {name} ꔪ", "⊰ {name} ⊱", "♛ {name} ♛"
    ],
    magic: [
      "✨ {name} ✨", "🔮 {name} 🔮", "⚡ {name} ⚡", "🪄 {name} 🪄",
      "☽ {name} ☾", "✦ {name} ✦", "⊹ {name} ⊹", "˚✧ {name} ✧˚",
      "⁺˚✧ {name} ✧˚⁺", "✶ {name} ✶", "☄ {name} ☄", "💫 {name} 💫"
    ],
    socialmedia: [
      "📱 {name} 📱", "@{name}", "#{name}", "🔗 {name}",
      "📢 {name} 📢", "💬 {name} 💬", "🔔 {name} 🔔", "📷 {name} 📷",
      "🎬 {name} 🎬", "📝 {name} 📝", "🌐 {name} 🌐", "💡 {name} 💡"
    ]
  };

  /* Unicode font maps for language-style transforms */
  var unicodeFonts = {
    bold: "𝗔𝗕𝗖𝗗Ｅ𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨Ѵ𝗪𝗫𝗬𝗭𝗮𝗯𝗰ｄｅ𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    italic: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬└𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"
  };

  /* ========== STATE ========== */
  var state = {
    name: "",
    category: "best",
    color: "#111111",
    size: 18,
    lang: "en"
  };

  /* ========== DOM REFS ========== */
  var root = document.getElementById("sng-tool-root");
  if (!root) return; // Exit if the tool isn't on the current page

  var input = root.querySelector("#sng-name-input");
  var clearBtn = root.querySelector("#sng-clear-btn");
  var preview = root.querySelector("#sng-preview");
  var catScroll = root.querySelector("#sng-cat-scroll");
  var toast = root.querySelector("#sng-toast");
  var langBtns = root.querySelector("#sng-lang-btns");
  var colorRow = root.querySelector("#sng-color-row");
  var sizeSlider = root.querySelector("#sng-size-slider");
  var themeBtn = root.querySelector("#sng-theme-btn");
  var scrollTopBtn = root.querySelector("#sng-scroll-top");
  var catArrowLeft = root.querySelector("#sng-cat-arrow-left");
  var catArrowRight = root.querySelector("#sng-cat-arrow-right");
  var favSection = root.querySelector("#sng-favorites-section");

  /* ========== FAVORITES ========== */
  var favorites = [];
  try {
    var stored = localStorage.getItem("sng-favorites");
    if (stored) favorites = JSON.parse(stored);
  } catch (e) { }

  function saveFavorites() {
    try { localStorage.setItem("sng-favorites", JSON.stringify(favorites)); } catch (e) { }
  }

  function toggleFavorite(styleTemplate) {
    var idx = favorites.indexOf(styleTemplate);
    if (idx !== -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(styleTemplate);
    }
    saveFavorites();
    renderGrid();
    renderFavorites();
  }

  function clearAllFavorites() {
    favorites = [];
    saveFavorites();
    renderGrid();
    renderFavorites();
  }

  function renderFavorites() {
    if (favorites.length === 0) {
      favSection.style.display = "none";
      favSection.innerHTML = "";
      return;
    }
    favSection.style.display = "block";
    var name = state.name || "Your Name";
    var dark = isDarkColor(state.color);
    var shadow = dark ? ";text-shadow:0 0 6px rgba(255,255,255,0.45), 0 0 14px rgba(255,255,255,0.2)" : "";
    var html = '<div class="sng-fav-header">';
    html += '<span class="sng-fav-header-icon">❤️</span>';
    html += '<span class="sng-fav-header-title">Your Favorites</span>';
    html += '<span class="sng-fav-header-badge">' + favorites.length + ' saved</span>';
    html += '<button class="sng-fav-clear-btn" id="sng-fav-clear-btn">Clear All</button>';
    html += '</div>';
    html += '<div class="sng-fav-grid">';
    for (var i = 0; i < favorites.length; i++) {
      var text = favorites[i].replace(/\{name\}/g, name);
      var deco = getLangDeco(i);
      if (deco) text = deco[0] + text + deco[1];
      html += '<div class="sng-card">' +
        '<div class="sng-card-text" style="color:' + state.color + ';font-size:' + state.size + 'px' + shadow + '">' +
        escapeHtml(text) + '</div>' +
        '<div class="sng-card-actions">' +
        '<button class="sng-card-fav sng-fav-active" data-style="' + escapeAttr(favorites[i]) + '" title="Remove from favorites">♥</button>' +
        '<button class="sng-card-copy" data-text="' + escapeAttr(text) + '">Copy</button>' +
        '<button class="sng-card-share" data-text="' + escapeAttr(text) + '" title="Share this style">⤴</button>' +
        '</div>' +
        '</div>';
    }
    html += '</div>';
    favSection.innerHTML = html;

    /* Clear all button handler */
    var clearAllBtn = favSection.querySelector("#sng-fav-clear-btn");
    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", clearAllFavorites);
    }
  }

  /* ========== RENDER CATEGORIES ========== */
  function renderCategories() {
    var html = "";
    for (var i = 0; i < categories.length; i++) {
      var c = categories[i];
      var activeClass = c.key === state.category ? " sng-cat-active" : "";
      html += '<button class="sng-cat-btn' + activeClass + '" data-cat="' + c.key + '">' +
        '<span class="sng-cat-icon">' + c.icon + '</span>' + c.label + '</button>';
    }
    catScroll.innerHTML = html;
  }

  /* ========== LANG DECORATION HELPER ========== */
  function getLangDeco(index) {
    if (!state.lang || state.lang === "en") return null;
    var decos = typeof langDecorations !== "undefined" ? langDecorations[state.lang] : null;
    if (!decos || !decos.length) return null;
    return decos[index % decos.length];
  }

  /* ========== DARK COLOR DETECTION ========== */
  function isDarkColor(hex) {
    var c = hex.replace("#", "");
    var r = parseInt(c.substring(0, 2), 16);
    var g = parseInt(c.substring(2, 4), 16);
    var b = parseInt(c.substring(4, 6), 16);
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 80;
  }

  /* ========== RENDER ALL CATEGORIES ========== */
  var allSections = root.querySelector("#sng-all-sections");

  function renderGrid() {
    var name = state.name || "Your Name";
    var dark = isDarkColor(state.color);
    var shadow = dark ? ";text-shadow:0 0 6px rgba(255,255,255,0.45), 0 0 14px rgba(255,255,255,0.2)" : "";
    var html = "";
    for (var c = 0; c < categories.length; c++) {
      var cat = categories[c];
      var catStyles = styles[cat.key] || [];
      html += '<div class="sng-category-block" id="sng-sec-' + cat.key + '">';
      html += '<div class="sng-section-header">';
      html += '<span class="sng-section-icon">' + cat.icon + '</span>';
      html += '<span class="sng-section-title">' + cat.label + '</span>';
      html += '<span class="sng-section-badge">' + catStyles.length + ' styles</span>';
      html += '</div>';
      html += '<div class="sng-section-grid">';
      for (var i = 0; i < catStyles.length; i++) {
        var text = catStyles[i].replace(/\{name\}/g, name);
        var deco = getLangDeco(i);
        if (deco) {
          text = deco[0] + text + deco[1];
        }
        var isFav = favorites.indexOf(catStyles[i]) !== -1;
        html += '<div class="sng-card">' +
          '<div class="sng-card-text" style="color:' + state.color + ';font-size:' + state.size + 'px' + shadow + '">' +
          escapeHtml(text) + '</div>' +
          '<div class="sng-card-actions">' +
          '<button class="sng-card-fav' + (isFav ? ' sng-fav-active' : '') + '" data-style="' + escapeAttr(catStyles[i]) + '" title="' + (isFav ? 'Remove from favorites' : 'Add to favorites') + '">' + (isFav ? '♥' : '♡') + '</button>' +
          '<button class="sng-card-copy" data-text="' + escapeAttr(text) + '">Copy</button>' +
          '<button class="sng-card-share" data-text="' + escapeAttr(text) + '" title="Share this style">⤴</button>' +
          '</div>' +
          '</div>';
      }
      html += '</div></div>';
    }
    allSections.innerHTML = html;
  }

  /* ========== UPDATE PREVIEW ========== */
  function updatePreview() {
    var name = state.name || "Your Name";
    var catStyles = styles[state.category] || styles.best;
    var previewText = catStyles[0].replace(/\{name\}/g, name);
    var deco = getLangDeco(0);
    if (deco) {
      previewText = deco[0] + previewText + deco[1];
    }
    preview.textContent = previewText;
    preview.style.color = state.color;
    preview.style.fontSize = state.size + "px";
    if (isDarkColor(state.color)) {
      preview.style.textShadow = "0 0 6px rgba(255,255,255,0.45), 0 0 14px rgba(255,255,255,0.2)";
    } else {
      preview.style.textShadow = "none";
    }
  }

  /* ========== HELPERS ========== */
  function escapeHtml(str) {
    var d = document.createElement("div");
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }
  function escapeAttr(str) {
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function showToast() {
    toast.classList.add("sng-toast-show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.classList.remove("sng-toast-show");
    }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showToast).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
    function fallbackCopy() {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showToast(); } catch (e) { }
      document.body.removeChild(ta);
    }
  }

  /* ========== EVENT LISTENERS ========== */

  /* Input */
  input.addEventListener("input", function () {
    state.name = input.value.trim();
    clearBtn.style.display = input.value ? "flex" : "none";
    updatePreview();
    renderGrid();
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    state.name = "";
    clearBtn.style.display = "none";
    updatePreview();
    renderGrid();
    input.focus();
  });

  /* Categories - scroll to section on click */
  catScroll.addEventListener("click", function (e) {
    var btn = e.target.closest(".sng-cat-btn");
    if (!btn) return;
    var catKey = btn.getAttribute("data-cat");
    state.category = catKey;
    var allBtns = catScroll.querySelectorAll(".sng-cat-btn");
    for (var i = 0; i < allBtns.length; i++) allBtns[i].classList.remove("sng-cat-active");
    btn.classList.add("sng-cat-active");
    updatePreview();
    /* Scroll to the section */
    var section = root.querySelector("#sng-sec-" + catKey);
    if (section) {
      var catBar = root.querySelector("#sng-cat-section");
      var offset = catBar ? catBar.offsetHeight + 12 : 60;
      var top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  });

  /* Scroll-spy: auto-highlight category button as user scrolls */
  function setupScrollSpy() {
    if (!window.IntersectionObserver) return;
    var blocks = root.querySelectorAll(".sng-category-block");
    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          var id = entries[i].target.id.replace("sng-sec-", "");
          var allBtns = catScroll.querySelectorAll(".sng-cat-btn");
          for (var j = 0; j < allBtns.length; j++) {
            if (allBtns[j].getAttribute("data-cat") === id) {
              allBtns[j].classList.add("sng-cat-active");
              /* Calculate horizontal scroll properly to avoid window jump bug in some browsers */
              var btnLeft = allBtns[j].offsetLeft;
              var btnWidth = allBtns[j].offsetWidth;
              var viewWidth = catScroll.offsetWidth;
              catScroll.scrollTo({ left: btnLeft - (viewWidth / 2) + (btnWidth / 2), behavior: "smooth" });
            } else {
              allBtns[j].classList.remove("sng-cat-active");
            }
          }
          state.category = id;
          break;
        }
      }
    }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });
    for (var i = 0; i < blocks.length; i++) {
      observer.observe(blocks[i]);
    }
  }

  /* Language */
  var langPlaceholders = {
    en: "Enter your name",
    hi: "अपना नाम लिखें",
    ur: "اپنا نام لکھیں",
    bn: "আপনার নাম লিখুন",
    ar: "أدخل اسمك"
  };
  var langDecorations = {
    en: [],
    hi: [
      ["ॐ ", " ॐ"], ["श्री ", " श्री"], ["☬ ", " ☬"], ["❁ ", " ❁"],
      ["ꕥ ", " ꕥ"], ["✦ ", " ✦"], ["卐 ", " 卐"], ["⚜ ", " ⚜"],
      ["᳀ ", " ᳀"], ["❃ ", " ❃"], ["✿ ", " ✿"], ["", ""]
    ],
    ur: [
      ["؏ ", " ؏"], ["✿ ", " ✿"], ["❀ ", " ❀"], ["☪ ", " ☪"],
      ["﷽ ", ""], ["❁ ", " ❁"], ["✦ ", " ✦"], ["⚜ ", " ⚜"],
      ["۞ ", " ۞"], ["✤ ", " ✤"], ["❖ ", " ❖"], ["", ""]
    ],
    bn: [
      ["✿ ", " ✿"], ["❀ ", " ❀"], ["❃ ", " ❃"], ["ꕥ ", " ꕥ"],
      ["✦ ", " ✦"], ["⊹ ", " ⊹"], ["❁ ", " ❁"], ["◈ ", " ◈"],
      ["⚜ ", " ⚜"], ["꧁ ", " ꧂"], ["✤ ", " ✤"], ["", ""]
    ],
    ar: [
      ["﷽ ", ""], ["☪ ", " ☪"], ["✿ ", " ✿"], ["❀ ", " ❀"],
      ["۞ ", " ۞"], ["✦ ", " ✦"], ["⚜ ", " ⚜"], ["❖ ", " ❖"],
      ["✤ ", " ✤"], ["◈ ", " ◈"], ["❁ ", " ❁"], ["", ""]
    ]
  };

  langBtns.addEventListener("click", function (e) {
    var btn = e.target.closest(".sng-lang-btn");
    if (!btn) return;
    state.lang = btn.getAttribute("data-lang");
    var allBtns = langBtns.querySelectorAll(".sng-lang-btn");
    for (var i = 0; i < allBtns.length; i++) allBtns[i].classList.remove("sng-lang-active");
    btn.classList.add("sng-lang-active");
    input.placeholder = langPlaceholders[state.lang] || langPlaceholders.en;
    if (state.lang === "ur" || state.lang === "ar") {
      input.style.direction = "rtl";
    } else {
      input.style.direction = "ltr";
    }
    updatePreview();
    renderGrid();
  });

  /* Colors */
  colorRow.addEventListener("click", function (e) {
    var circle = e.target.closest(".sng-color-circle");
    if (!circle) return;
    state.color = circle.getAttribute("data-color");
    var all = colorRow.querySelectorAll(".sng-color-circle");
    for (var i = 0; i < all.length; i++) all[i].classList.remove("sng-color-active");
    circle.classList.add("sng-color-active");
    updatePreview();
    renderGrid();
  });

  /* Theme Toggle */
  themeBtn.addEventListener("click", function () {
    var isLight = root.classList.toggle("sng-light-theme");
    document.body.classList.toggle("sng-body-light", isLight);
    themeBtn.innerHTML = isLight
      ? '<svg class="sng-theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg class="sng-theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

    var targetColor = null;
    if (isLight && state.color === "#ffffff") targetColor = "#111111";
    if (!isLight && state.color === "#111111") targetColor = "#ffffff";

    if (targetColor) {
      state.color = targetColor;
      var all = colorRow.querySelectorAll(".sng-color-circle");
      for (var i = 0; i < all.length; i++) {
        all[i].classList.remove("sng-color-active");
        if (all[i].getAttribute("data-color") === targetColor) {
          all[i].classList.add("sng-color-active");
        }
      }
      updatePreview();
      renderGrid();
    }
  });

  /* Size Slider */
  sizeSlider.addEventListener("input", function () {
    state.size = parseInt(sizeSlider.value, 10);
    updatePreview();
    renderGrid();
  });

  /* Scroll to Top Logic */
  window.addEventListener("scroll", function () {
    var rect = root.getBoundingClientRect();
    // Show button if tool top is above viewport AND tool bottom is still visible
    if (rect.top < -100 && rect.bottom > 200) {
      scrollTopBtn.classList.add("sng-show");
    } else {
      scrollTopBtn.classList.remove("sng-show");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    var top = root.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top: top, behavior: "smooth" });
  });

  /* Copy Buttons (delegated) */
  allSections.addEventListener("click", function (e) {
    var btn = e.target.closest(".sng-card-copy");
    if (!btn) return;
    var text = btn.getAttribute("data-text");
    copyText(text);
    btn.textContent = "Copied!";
    btn.classList.add("sng-copied");
    setTimeout(function () {
      btn.textContent = "Copy";
      btn.classList.remove("sng-copied");
    }, 1500);
  });

  /* Favorite Buttons (delegated on allSections) */
  allSections.addEventListener("click", function (e) {
    var favBtn = e.target.closest(".sng-card-fav");
    if (favBtn) {
      var styleTemplate = favBtn.getAttribute("data-style");
      toggleFavorite(styleTemplate);
      return;
    }
  });

  /* Share Buttons (delegated on allSections) */
  allSections.addEventListener("click", function (e) {
    var shareBtn = e.target.closest(".sng-card-share");
    if (!shareBtn) return;
    var text = shareBtn.getAttribute("data-text");
    copyText(text);
    shareBtn.textContent = "✓";
    shareBtn.classList.add("sng-shared");
    toast.textContent = "✓ Link copied!";
    showToast();
    setTimeout(function () {
      shareBtn.textContent = "⤴";
      shareBtn.classList.remove("sng-shared");
      toast.textContent = "✓ Copied!";
    }, 1500);
  });

  /* Favorites section — delegated clicks (copy, fav, share) */
  favSection.addEventListener("click", function (e) {
    var copyBtn = e.target.closest(".sng-card-copy");
    if (copyBtn) {
      var text = copyBtn.getAttribute("data-text");
      copyText(text);
      copyBtn.textContent = "Copied!";
      copyBtn.classList.add("sng-copied");
      setTimeout(function () {
        copyBtn.textContent = "Copy";
        copyBtn.classList.remove("sng-copied");
      }, 1500);
      return;
    }
    var favBtn = e.target.closest(".sng-card-fav");
    if (favBtn) {
      var styleTemplate = favBtn.getAttribute("data-style");
      toggleFavorite(styleTemplate);
      return;
    }
    var shareBtn = e.target.closest(".sng-card-share");
    if (shareBtn) {
      var text = shareBtn.getAttribute("data-text");
      copyText(text);
      shareBtn.textContent = "✓";
      shareBtn.classList.add("sng-shared");
      toast.textContent = "✓ Link copied!";
      showToast();
      setTimeout(function () {
        shareBtn.textContent = "⤴";
        shareBtn.classList.remove("sng-shared");
        toast.textContent = "✓ Copied!";
      }, 1500);
      return;
    }
  });

  /* ========== INIT ========== */
  renderCategories();
  updatePreview();
  renderGrid();
  renderFavorites();
  setupScrollSpy();

  /* ========== CATEGORY ARROW NAVIGATION ========== */
  function updateCatArrows() {
    var scrollLeft = catScroll.scrollLeft;
    var maxScroll = catScroll.scrollWidth - catScroll.clientWidth;
    if (scrollLeft <= 5) {
      catArrowLeft.classList.add("sng-cat-arrow-hidden");
    } else {
      catArrowLeft.classList.remove("sng-cat-arrow-hidden");
    }
    if (scrollLeft >= maxScroll - 5) {
      catArrowRight.classList.add("sng-cat-arrow-hidden");
    } else {
      catArrowRight.classList.remove("sng-cat-arrow-hidden");
    }
  }

  catArrowLeft.addEventListener("click", function () {
    catScroll.scrollBy({ left: -200, behavior: "smooth" });
  });

  catArrowRight.addEventListener("click", function () {
    catScroll.scrollBy({ left: 200, behavior: "smooth" });
  });

  catScroll.addEventListener("scroll", updateCatArrows);
  updateCatArrows();

})();
