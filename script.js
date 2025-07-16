const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); 
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');


const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); 

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); 


let songs = [
    {
        id: 1,
        title: "Living Death",
        artist: "Pun",
        album: "Beauty in Death",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTIAnHPpuOYtpfWlb0bgp_Zm1Z7tzcIkVlKroTug8CGdPrc9e51vrBNiTt&s=10",
        audioSrc: "audio/Living Death.mp3",
        videoBgSrc: "videos/Living Death.mp4", 
       
        lyrics: [
            { time: 18.2, text: "เฝ้ามองนาฬิกา" },
            { time: 19.9, text: "ทุกนาทีช่างยาวนาน" },
            { time: 22.2, text: "ฉันเฝ้ารอวันเวลา" },
            { time: 24.8, text: "ที่จะพบเจอเธออีกครั้ง" },
            { time: 31.9, text: "อย่างมีความหวัง..." },
            { time: 36.9, text: "อีกไม่ช้าเธอคงมา" },
            { time: 39.1, text: "แต่ตอนนี้ยังไม่มา" },
            { time: 41.6, text: "มันก็นาน ทรมาน" },
            { time: 44.1, text: "ใจฉันกำลังตายช้าๆ" },
            { time: 49.9, text: "โปรดเธออย่าทำแบบนี้เลย" },
            { time: 55.1, text: "ถ้าหากมันเป็นเพราะฉัน" },
            { time: 57.2, text: "ทำให้เธอลังเลแบบนั้น" },
            { time: 59.6, text: "ถ้าเธออยากจบเรื่องของเรา" },
            { time: 62.0, text: "เพราะว่าตอนนี้เธอหมดรักแล้วเธอก็บอก" },
            { time: 69.2, text: "โปรดบอกกันให้รู้" },
            { time: 75.8, text: "ค่ำคืนนี้เธอคงไม่มา" },
            { time: 77.9, text: "And I've been thinking about you" },
            { time: 80.3, text: "รู้ว่าฉันควรต้องตัดใจ" },
            { time: 82.9, text: "But I keep falling back to you" },
            { time: 85.2, text: "ฉันรอฉันรอคำตอบ" },
            { time: 87.8, text: "ฉันรอที่จะได้กอด" },
            { time: 89.8, text: "ฉันรอที่จะได้บอก" },
            { time: 92.2, text: "ว่าฉันรอเธอมาตลอด" },
            { time: 94.7, text: "ทุกคืนวันช่างทรมาน เมื่อไม่อาจรู้ถึงการมีอยู่" },
            { time: 99.1, text: "ไม่เป็นไร ฉันรอต่อไปแม้ว่าจะ Feeling like a fool" },
            { time: 103.9, text: "ฉันรอฉันรอคำตอบ" },
            { time: 106.0, text: "ฉันรอที่จะได้กอด" },
            { time: 108.8, text: "ฉันรอที่จะได้บอก" },
            { time: 110.8, text: "ว่าฉันรอเธอมาตลอด" },
            { time: 134.7, text: "And after all that" },
            { time: 135.8, text: "ฉันยังรอคอย เธออย่างไม่มีข้อแม้" },
            { time: 138.1, text: "รอคอยเธอต่อไปแม้ว่าข้างในจะร่อแร่" },
            { time: 140.6, text: "จนใจมันเริ่มจะท้อ ใจมันบอกให้ Fall back" },
            { time: 142.8, text: "แต่เธอก็คงไม่สนว่าฉันจะเป็นยังไง" },
            { time: 144.9, text: "เธอทำให้ฉันนั้นสับสนว่ารักคืออะไร" },
            { time: 147.7, text: "คือ ต้องรอคอยใครสักคนนานๆ ใช่ไหม" },
            { time: 149.6, text: "โดยที่ลึกๆ จะรู้ว่าเขาไม่กลับมาแล้วใช่ไหม" },
            { time: 151.9, text: "Don't talk to me nice ถ้าเธอไม่ได้แคร์" },
            { time: 154.5, text: "ร้องไห้ไปเท่าไหร่ เธอคงไม่ได้แล" },
            { time: 156.7, text: "เพราะว่าใจเธอมีใคร ที่เขานั้นมาแทน" },
            { time: 159.0, text: "ที่เดิมที่ตรงนั้น และฉันคงต้อง Understand that" },
            { time: 162.9, text: "การที่เธอ หายมันอธิบายบางสิ่ง" },
            { time: 164.9, text: "ว่าเรื่องของเรานั้น มันอาจไม่ใช่เรื่องจริง" },
            { time: 167.3, text: "ตอนนี้น้ำตา มันยังคงไหลริน" },
            { time: 169.6, text: "ฉันยังคง ภาวนาให้มันไม่ใช่เรื่องจริง" },
            { time: 174.7, text: "ค่ำคืนนี้เธอคงไม่มา" },
            { time: 176.8, text: "And I've been thinking about you" },
            { time: 179.0, text: "รู้ว่าฉันควรต้องตัดใจ" },
            { time: 181.7, text: "But I keep falling back to you" },
            { time: 183.9, text: "ฉันรอฉันรอคำตอบ"},
            { time: 186.0, text: "ฉันรอที่จะได้กอด" },
            { time: 188.8, text: "ฉันรอที่จะได้บอก" },
            { time: 190.8, text: "ว่าฉันรอเธอมาตลอด" },
            { time: 193.6, text: "ทุกคืนวันช่างทรมาน เมื่อไม่อาจรู้ถึงการมีอยู่" },
            { time: 197.9, text: "ไม่เป็นไร ฉันรอต่อไปแม้ว่าจะ Feeling like a fool" },
            { time: 202.8, text: "ฉันรอฉันรอคำตอบ" },
            { time: 205.0, text: "ฉันรอที่จะได้กอด" },
            { time: 207.6, text: "ฉันรอที่จะได้บอก" },
            { time: 209.8, text: "ว่าฉันรอเธอมาตลอด" },
            { time: 211.9, text: "ค่ำคืนนี้เธอคงไม่มา" },
            { time: 214.2, text: "And I've been thinking about you" },
            { time: 217.6, text: "รู้ว่าฉันควรต้องตัดใจ" },
            { time: 219.0, text: "But I keep falling back to you" }

        ]
    },
    {
        id: 2,
        title: "N/A",
        artist: "N/A",
        album: "÷ (Divide)",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIjfCQKCTIpWEuqDUxzIV92w2APGvrwfsGvlV2z8ZnWkALgCEi6Lwzksd&s=10",
        audioSrc: "audio/N A.mp3",
        videoBgSrc: "videos/N A.mp4", 
        
        lyrics: [
            { time: 0.2, text: "เกิดขึ้นเมื่อไหร่" },
            { time: 2.4, text: "ไม่รู้" },
            { time: 3.8, text: "ฉันว่าเธอก็คง" },
            { time: 5.8, text: "ไม่รู้" },
            { time: 7.4, text: "มันอาจดูเหมือนง่าย" },
            { time: 9.2, text: "แต่มันไม่ได้ง่าย" },
            { time: 10.7, text: "อยากให้เธอลองฟัง ใจฉันดู" },
            { time: 15.6, text: "(มันดังอยู่แบบเนี่ย)" },
            { time: 17.9, text: "พรุ่งนี้ฉันจะเป็นแฟนเธอ" },
        ]
    },
    {
        id: 3,
        title: "one wish (remix) ft.TRAPMEEN! & Perx",
        artist: "TRAPMEEN! & Perx",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/Feb6JO47IJw/mqdefault.jpg",
        audioSrc: "audio/one wish (remix) ft.TRAPMEEN! & Perx.mp3",
        videoBgSrc: "videos/one wish (remix) ft.TRAPMEEN! & Perx.mp4",
       lyrics: [
  { time: 0.0, text: "AKITO" },
  { time: 17.9, text: "alr, we get show บอกกับผมว่า go your home" },
  { time: 21.0, text: "บอกกับผมได้มั้ยเดี๋ยวผมจะพาเธอไป อิน crown" },
  { time: 24.4, text: "ผม ผม ผม มีมากกว่า her wanna fly fly" },
  { time: 27.5, text: "ผมมันเด็กrap ทำเพลง underground" },
  { time: 28.9, text: "she say want to fuck with me" },
  { time: 30.1, text: "ก่อนนอนฟังเพลงเปิดเพลง shall we" },

  { time: 32.4, text: "ถ้าเธอต้องการจะหามาให้" },
  { time: 34.0, text: "yeah เธอจะมาให้ (baby แค่เธอ)" },
  { time: 37.8, text: "ไม่ต้องการใครแค่มีเธอก็พอ" },
  { time: 39.8, text: "ช่วยหยุดก่อนได้มั้ย yeah ก่อนที่ผมจะทนไม่ไหว yeah" },

  { time: 46.2, text: "baby ทำใจผมแทบวาย โอ้ย ตาย โอ้ย ตาย" },
  { time: 49.9, text: "พี่ไม่ได้ใจ้ร้าย อย่าไปฟังที่เขานั้นพูดกัน" },
  { time: 54.0, text: "baby let have fun yeah คืนนี้แค่เธอกับพี่ไง" },
  { time: 57.9, text: "อยากรู้ว่าพี่เป็นยังไงอยากให้เธอเข้ามาลอง" },

  { time: 60.9, text: "(ฮัลโหล ฮัลโหล)" },

  { time: 62.8, text: "อยู่กับเธอทั้งคืนได้มั้ย baby let have fun" },
  { time: 65.9, text: "pull up ไปหาเธอ oh yeah" },
  { time: 69.9, text: "แค่เธอบอกผมก็พร้อมจะไป" },
  { time: 72.2, text: "จะให้ทนแบบนี้ได้ไง" },
  { time: 74.5, text: "บอกกับเธอไม่ต้องอาย" },

  { time: 78.6, text: "ผมก็ยกให้เธอเป็น number 1" },
  { time: 80.4, text: "ผมก็มีแค่เธอทุกคืนในฝัน" },
  { time: 82.2, text: "บอกกับคนอื่นว่าเรารักกัน" },
  { time: 83.9, text: "yeah ซึ้งใจ ซึ้งใจ จ่ายทรัพย์ sup was sup" },
  { time: 88.8, text: "อย่างผมก็มีแค่นี้ yo oh just tell on me baby เธอต้องการอะไร" },

  { time: 93.9, text: "was sup was sup was sup was sup baby" },
  { time: 98.7, text: "bae ผมต้องการเธอ" },
  { time: 100.9, text: "เธอคิดถึงฉันหน่อยนะเธอ คิดถึงผมสักนิดนะเธอ" },
  { time: 104.6, text: "to day you so pretty นะเธอ" },
  { time: 106.2, text: "แค่ได้รักข้างเดียวก็พอ" },

  { time: 108.0, text: "TRAPMEEN!" },
  { time: 116.2, text: "เธอหน่ะดูน่ารักเป็นลูกคุณหนู โอ้ยแทบช็ค" },
  { time: 119.8, text: "Gad damn like u model Baby เธอน่ารักจนแทบช็อค" },
  { time: 123.9, text: "First เลย baby ผมปรารถนา หน่ะ baby" },
  { time: 126.8, text: "ยังคงร๊ากเธอไม่รีรอ ผมพูดไปแล้วไม่ revert" },
  { time: 130.2, text: "ได้โปรด ได้โปรด ผมปรารถนาฝากความคิดถึงไปในเพลง" },
  { time: 134.5, text: "God damn เป็นของผมจะได้ไหม Was sup babay Chose you be my babay" },

  { time: 141.2, text: "If I have a one wish ได้โปรดเป็นนะ baby" },
  { time: 144.9, text: "Because U หน่ะ baby เธอก็รู้ wa gad damn และ baby I got u" },
  { time: 150.7, text: "ถ้าผมเองนั้นขอพรได้แล้วมันเป็นใคร ถ้าไม่ใช่ U" },
  { time: 154.8, text: "Baby I want u So I love u too know Sure babe I love you too" },

  { time: 161.4, text: "ข้าน้อยขอ karawa oh อันตรายกว่า hashima" },
  { time: 164.7, text: "oh แต่สวยแบบ kaguya ใจให้เธอไปใช่ภาชนะ" },
  { time: 168.1, text: "อยากชวนเธอช่วยใช้ธนาบัตร ไม่ใช่ youngohm not ธารารัตน์" },
  { time: 172.0, text: "อย่ามองละม้ายคล้ายธาตุอากาศ ผู้ชายใจร้ายก็ไม่ใช่ฉัน // u feel me" },
  { time: 177.5, text: "ถ้าอยากให้บอกว่ารัก จะบอกรักเธออีกหมื่น" },
  { time: 180.3, text: "ขยับมาใกล้ละฟังให้ชัด ว่าฉันน่ะรักเธออีกคืน" },
  { time: 183.8, text: "จาก town in town ดูสุขสกาวเธอเด่นกว่าดาวจรัสแสง" },
  { time: 187.5, text: "จาก three man down i'm make u proud oh bby beauty god damn" },
  { time: 191.2, text: "i feel so levitate u told me best of ur man ขอให้รักกันได้ไหม" },

  { time: 197.3, text: "อยากให้ อยากให้ อยากให้ รักอะ give her 5 นะ ผมไม่ cap" },
  { time: 200.8, text: "ขอเธอ 1 ข้อ ได้ไหม ได้ไหม ไม่รู้เพลงเค้า จะแมส ไม่แมส" },
  { time: 204.4, text: "my heart my heart คง fall apart ไม่รักอะนะ คงแตกดังแป๊ะแน่" },
  { time: 208.6, text: "if i had a one a one ถ้าเธอไม่รัก เค้าว่าคงแย่" },
  { time: 212.6, text: "รู้มั้ย รู้มั้ยอะ รู้หรือเปล่า เค้าว๊อนเธอมาก เธอรู้หรือเปล่าคะ" },
  { time: 217.0, text: "หนีห่าว มา สบายดีไหม แต่ หว่อ อ้าย หนี่ ให้เธอรู้เปล่าจ๊ะ" },
  { time: 220.7, text: "แบบว่า แบบว่า ไม่ได้ไรหรอก มีแค่ 1 ข้อ ขอเธอได้เปล่าคะ" },
  { time: 224.3, text: "ถ้าหาก ถ้า one wish ขอเธอได้ ช่วยเป็นของผมจะได้หรือเปล่านะ" }
]
    },
    {
        id: 4,
        title: "รักเธอหัวทิ่มบ่อ COVER original ",
        artist: "HANGMAN", 
        album: "Unreleased",
        albumArtUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdLgYJ8Rhd4T80CwHu-Q8sBXB2_fDLUIGIw&s", 
        audioSrc: "audio/ใจ.mp3",
        videoBgSrc: "videos/ใจ.mp4",
        lyrics: [
            { time: 0.6, text: "แค่อยากจะบอกว่า" },
            { time: 2.0, text: "ใจ มันเริ่มมีอาการ ไม่เจอเธอนานนาน" },
            { time: 7.6, text: "มันเริ่มมีอาการ เหมือนเดิมตลอด" },
            { time: 11.8, text: "ตา มันเริ่มที่จะลาย มันเป็นอยู่เรื่อยไป" },
            { time: 17.5, text: "มันเริ่มจะเห็นใครเหมือนเธอหมด" },
            { time: 21.3, text: "ใจ มันเริ่มมีอาการ ไม่เจอเธอนานนาน" },
            { time: 26.8, text: "มันเริ่มมีอาการ เหมือนเดิมตลอด" },
            { time: 30.8, text: "ตา มันเริ่มที่จะลาย มันเป็นอยู่เรื่อยไป" },
            { time: 36.6, text: "มันเริ่มจะเห็นใครเหมือนเธอหมด" },
        ]
    },
    {
        id: 5,
        title: "MEYOU - ลูกคุณหนู",
        artist: "MEYOU - Feat. PUN",
        album: "AM",
        albumArtUrl: "data:image/jpeg;base64,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",
        audioSrc: "audio/ลูกคุณหนู.mp3",
        videoBgSrc: "videos/ลูกคุณหนู.mp4",
        lyrics: [
            { time: 21.6, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 24.8, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },

            { time: 29.3, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 32.8, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },

            { time: 37.1, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 40.7, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },
            
            { time: 45.2, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 49.0, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },
            
            { time: 54.0, text: "เห็นเธอเดินลงมาจาก Alphard" },
            { time: 55.9, text: "ดูตัวเองเราเหมือนกับปีศาจ" },
            { time: 57.9, text: "เหล้าอันนั้นแม่งโคตรจะดีสาด" },
            { time: 60.0, text: "อยู่กับเธอได้จนถึงตีสาม" },
            { time: 61.9, text: "และหากว่าเมาเธอก็แค่เอ็นมาดิ" },
            { time: 63.9, text: "ลุคเธอคุณหนูถ้าหากว่าดูไม่ผิด" },
            { time: 65.9, text: "ก็อยากเป็นแฟนไม่อยากเป็นเพื่อนสนิท" },
            { time: 67.9, text: "จะเป็นไรไหมถ้าเหยิบไปใกล้อีกนิด" },
            { time: 69.9, text: "แบบประชิดตัวเธอ" },
            { time: 71.9, text: "Can I have your phone number?" },
            { time: 73.9, text: "แต่ก็ไม่รู้ว่าเธอจะให้ไหม" },
            { time: 77.7, text: "you make this whole wide world หยุด" },
            { time: 79.9, text: "ประมาณว่าเห็นภาพสะดุด" },
            { time: 81.9, text: "ฉันก็ไม่รู้ว่าเธอทำได้ไง" },

            { time: 85.3, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 88.9, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },

            { time: 93.1, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 97.0, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },

            { time: 101.3, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 105.0, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },

            { time: 109.1, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 112.9, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },

            { time: 117.9, text: "ลุคเธอคุณหนู ลุคเธอนั้นดูเเพง" },
            { time: 119.9, text: "I’m looking at you มองเธอผ่านกำแพง" },
            { time: 121.9, text: "ฉันทำเพลงอยู่ในสตู Man I’m counting this bands" },
            { time: 123.1, text: "But I’m still got plan ถ้าเธอยังไม่มีแฟน" },
            { time: 126.0, text: "อยากจะควงแขนเธอเหมือนเจ้าหญิง Disney" },
            { time: 127.8, text: "อยากที่จะติดเธอมากกว่าที่ติด whiskey" },
            { time: 129.8, text: "อยากจะเป็น vit c อยากจะเป็น tiffy" },
            { time: 131.8, text: "วันที่อากาศไม่ดี อยากจะเป็นคนที่ทำให้เธอนั้นรู้สึก happy" },
            { time: 134.9, text: "No worry just me and you แค่เธอกับฉันที่ malibu" },
            { time: 138.8, text: "ตำแหน่งที่ละติลองจิจูดจะไกลแค่ไหนฉันคงไม่หยุดรักเธอ" },
            { time: 143.1, text: "เธออย่าพึ่งหลบหน้ากัน ฉันแค่อยากมองหน้าเธอ ละเมอถึงวันของเรา" },

            { time: 152.0, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 155.8, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },
            
            { time: 160.0, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 163.8, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },

            { time: 168.0, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 171.9, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },

            { time: 175.8, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 179.9, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },

            { time: 183.9, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 187.9, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },

            { time: 192.0, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 195.9, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" },

            { time: 200.1, text: "เธอเป็นลูกคุณหนู เธอเป็นหลานคุณนาย" },
            { time: 203.9, text: "มือซ้ายใส่ pandora ส่วนมือข้างขวาใส่เพชรโคตร shine" },

            { time: 207.8, text: "all I need is you ได้โปรดเถอะอย่าเพิ่งไป" },
            { time: 211.8, text: "กลางคืนตีหนึ่งตีสอง ออกไปข้างนอกมันอันตราย" }

        ]
    },

];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; 


function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); 
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); 
    backgroundVideo.pause(); 
    backgroundVideo.src = ""; 
    backgroundVideo.load();
    pauseTrack();
}


function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); 
    backgroundVideo.src = ""; 
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active');

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); 
    }
}


function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
     
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); 
        });

     
        listItem.addEventListener('mouseenter', () => {
            
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); 
            }
        });
        listItem.addEventListener('mouseleave', () => {
            
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); 
                backgroundVideo.src = ""; 
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg');
            }
        });

        songListElement.appendChild(listItem);
    });
}


function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; 
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); 
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}


function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; 
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); 
        span.classList.add('lyric-line'); 
        lyricsContainer.appendChild(span);
       
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    backgroundVideo.play().catch(error => console.error("Error saat play video:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    backgroundVideo.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
       
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); 
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); 
}


audioPlayer.addEventListener('timeupdate', () => {
    if (!isNaN(audioPlayer.currentTime) && backgroundVideo.readyState >= 2) {
        backgroundVideo.currentTime = audioPlayer.currentTime;
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
       
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
           
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
               
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

audioPlayer.addEventListener('seeked', () => {
    if (!isNaN(audioPlayer.currentTime) && backgroundVideo.readyState >= 2) {
        backgroundVideo.currentTime = audioPlayer.currentTime;
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;

    audioPlayer.currentTime = newTime;
    if (backgroundVideo.readyState >= 2) {
        backgroundVideo.currentTime = newTime;
    }
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});


playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
       
    } else {
        nextTrack();
    }
});


backToHomeFromDetailBtn.addEventListener('click', showHomePage); 
backToHomeBtn.addEventListener('click', showHomePage); 

playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});


function init() {
    console.log("Initializing..."); 
    console.log("Songs array length:", songs.length); 
    console.log("songListElement:", songListElement);

    renderSongList(); 
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; 
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); 
    console.log("Initialization complete."); 
}

init();