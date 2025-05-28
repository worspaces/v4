document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    applyTheme();
    applyMobileScreenSetting();
    const loadingScreen = document.getElementById('loading-screen');
    const messageforyou = document.getElementById('messageforyou');
    const randomtextstuff = [
        "hi brochacho",
        "hi",
        'loading... be patient.',
        "also try getaway shootout",
        "official frogie's arcade song goes hard",
        "WE (as in ME and YOU yes YOU brotein shake) love frogie's arcade",
        "sybau",
        "we dont talk about TBG95.",
        'if you play marvel rivals just say you goon to the female charactors brochacho 💔',
        "join the discord!",
        "this is the most useless message you will read today.",
        "all unblocked!",
        "miku got into my wifi, and now she is in my web server 💔",
        "fa v5 when?",
        "stephanie.pillers@cfisd.net",
        "calvillo5432ud@gmail.com",
        "caddy, you take care of the https. node.js, take care of the main site and proxy. and debian? you just be you. together, we are FROGIE'S ARCADE!",
        '"money money green green money is all i need need" real shit',
        "yeah yeah shuddup",
        "ts site infastructure so complex. wait, complex? say that again...",
        "classroom6x was the past, frogie's arcade is the future",
        "better than szvy central, fight me szvy",
        "goodbye now.gg, hello xena.wtf!",
        '"Wait, why come to my house when you hate it if I host?" bars',
        "bog is deadass a twink",
        "is rayvon truly a monkey after all?",
        '"As long as there are stars up above, I will always be in love!" peak lyrics',
        "this website goated twin",
        "won't turn your chromebook into a neutron star!",
        "fuckass blockers 💔",
        'ts ste lwk pmo ngl lke icl ts ste is so bns ddss nt gnna us ts',
        '"frogiee1 is playing people playground"',
        "you know what else is massive?",
        "Kasane Teto is peak idc what any of you say",
        '"Welcome to frogies arcade, home of the worlds famous website" - manny',
        "does this have lettuce in it?",
        "i don't think this is a good idea",
        "S.U.P.X.R!",
        "WARNING: site contains signs of absolute peak containing but not limited to: Hatsune Miku, Kasane Teto, Akita Neru, SUPXR, LeBron James, Szvy Central hate, Portal 1 & 2 references, and more.",
        "frogie's arcade > Szvy Central > meximath > Velara > 55gms > UniUB > tbg95 > Classroom6X > work",
        "The cake is a lie.",
        "Please do not destroy vital testing apparatus.",
        "BOIIIII WHAT YOU SAY ABOUT AJH PHONK",
        "trust the process",
        "i'm liking the sound of this!",
        "what have you done...",
        "for all the mfs with a 0.004 gpa",
        "discord.gg/unblockedgames",
        "complexity network the best eaglercraft server fr",
        "The portal will open in three, two, one.",
        "You can always ignore your conscience.",
        "you have just requested the physical websocket address of complexity netowrk.",
        "Do you wanna taste ts greatness",
        "i was really in the air for 4 minutes!",
        '"talking all this way, you might get an intervention"',
        "https://www.youtube.com/watch?v=Lr-o19g_g_k",
        "we out of the 2020 effect with this one",
        "bru my knees hurt",
        "r.i.p to the motd, it will be missed.",
        "spaceship.com my beloved",
        "bitches be CRAZY am i right?",
        "bleh",
        `🎵 "Yeah, I'm outta luck. In the back seat, I just wanna fuck. Hit from the back, I just wanna feel love"`,
        "4 of my online friends are actual GOONERS 💔",
        "stop tryna touch me rayvon",
        `🎵 "All these fake bitches praying on my down fall. They think I'm stupid but I know about their private calls"`,
        "hassem PLEASE FOR THE LOVE OF GOD TAKE A SHOWER I BEG OF YOU 💔",
        "i've probably written 100+ of these stupid messages by now",
        "wat 4 lunch teach",
        "ANYTHING but the work",
        "The F students are inventors.",
        "ContentKeeper is probably the worst filter EVER made.",
        "#freemelvin",
        `"I'm gooning every day. The huzz I scare away" - fuckass melvin 💔`,
        "5/16 is my birthday",
        "if you think your friends are doing way too much for your liking, always remember to take a break. (i'm being serious)",
        "why is it always at night when i write these dumb messages",
        "DOI DOI DOI",
        "🟨🟦🟥 remind you vocaloid fans of anything?",
        "anything before 2023 was NOT me on EVERYONES soul except mine 🙏",
        "to anyone whose done me or anyone i know personally wrong, i hope you rot in hell.",
        "don't even CONSIDER yourself a true frogie's arcade og if you don't remember the FA logo before the gummy bear looking one or frogie's arcade v1.",
        "can't even say my name in now.gg's discord without getting banned or timed out 💔",
        "mexi and bog goon to Hatsune Miku and Kasane Teto, mole kla fly goons to hentai from reddit, and szvy goons to furrys. i think i need new friends dawg 💔",
        "yessss robuxxxxx",
        "if any of you use 4 or more filters at once, just go ahead and wrap it up for me brochacho",
        "ssh frogiee1@Neo",
        "this is getting tiring to write all these messages",
        "Why I oughta",
        "i'm running out of ideas",
        "i was thinking about why i left my original friend group from 5th grade, and was thinking about MAYBE joining back. but i saw one of their tiktoks and instantly knew why i stopped talking to them 🙏",
        "if you play gorilla tag seriously please for the safety of you and others respectfully hop off ts site",
        "sussy tuff.png",
        "i love supxr on spotify",
        `"If you follow his instructions, you will die."`,
        "when can my 8th grade english teacher stop handing out assignments and projects like its candy",
        "nowgg.lol was the best of its time 🙏",
        "5 ways to know your hb/hg is approaching: 1. the sky and sun turn blood red. 2. you hear the souls of the damned cry in terror and agony. 3. you sense a green fog and a gut wrenching stench. 4. all grass, plants, and wildlife start dying. 5. bystanders weep and beg for their lives.",
        "i'm writing this on my birthday",
        "imagine being in a state that is 49th in education. heh, couldn't be me... heh... oh wait that is me",
        "you managed to get the 100th message, good job.",
        `*Akita Neru giving YOU (yes i'm talking to YOU) BACKSHOTS*
        YOU: "w-wait!... n-not in front of other people~..."
        Akita Neru: "it's okay, let them watch... let them know you're mine."
        gurt: "wtf 💔"`
    ];    
    if (loadingScreen) {
        messageforyou.innerText = randomtextstuff[Math.floor(Math.random() * randomtextstuff.length)];
        setTimeout(function() {
            document.getElementById('dabottom').style = null;
        }, 7000);
        document.body.classList.add('loading');
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        alert("where the loading screen at (it's probably me just being dumb)")
    }
});
