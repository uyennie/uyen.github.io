var c = 0;

var when = ["listen to my problems", "smile", "support my Sonny Angel spending addiction", "recommend me songs you love", "stay up till odd hours of the night helping me with coding", "take the train with me so I don't feel lonely", "offer to drive me places", "know my Maccas order off by heart", "always ask me to go eat pho with you", "trade photocards with me because you know how much I love Haechan", "send me pictures of your cat", "show me all your WIPs", "tell me all about your absurd dreams through voice memo", "share pieces of your heart with me", "know me more than I know myself", "do a tiny dance when you're happy", "talk so deeply and lucidly about the things you care about", "buy me random things that remind you of me, just because you're that sweet of a person", "help me be a better person", "are 100% willing to fly to Perth with me just because you know how much I love Bjork", "share with me your old (and cringe) Tumblr posts", "tag me in memes", "make me feel secure instead of desperate", "try to understand my nuances, even if you don't fully", "reply to my (understandably delusional) tweets at 4am", "talk to me about love, and people you love, and things you love", "recommend me books to read", "show me your birth chart, I don't know much about it but I'll listen", "are yourself", "go to random concerts with me even though we both don't know the artist too well", "get a bit too tipsy at karaoke", "show me random things you got at the thrift", "send me videos of your detailed clothing hauls (I watch through them in whole every time)", "trust me with your fears", "go to the beach with me, however spontaneous the trip may be", "judge my astrological tastes in romantic partners (sorry I always had a thing for air signs)", "let me pass out on your kitchen floor after I promised you I wouldn't drink too much", "tell me about the cartoon characters you'd smash", "pause in conversation until you can get your thoughts together", "jump on new hyperfixations", "pull me back in for a little longer when we're about to say goodbye", "tell me about what you believe in, including me", "let me use the extra hair tie around your wrist", "try your best to make me smile again after I tell you about my most depressive episodes", "get excited about something new", "look up the restaurant menu and reviews before we get to the place and advise us on exactly where to get", "don't judge me too much after I tell you I pour milk before cereal", "stay on call with me until I fall asleep", "feel good about yourself", "send me unsolicited anythings (they are always welcome)", "take time out of your day to reply to my questions, even if they're stupid", "share your travel photos with me", "reassure me when my self esteem is low", "are near me", "always answer my calls when I'm feeling needy", "send me something even if you think I've already seen it", "jot down tattoo ideas in your notes app", "jokingly send me feet pics, even if you know I absolutely hate them", "get excited over the new camping shoes you are planning on buying", "let me help you style your clothes", "recommend me new anime to watch (sorry I still haven't finished Jojo)", "speak up for me because you know how shy I am", "can sense that something's wrong, you know me", "don't laugh at me when I tell you about how Pixar's Cars is one of the most influential pieces of media of all time", "offer to fight other people for me", "give me love and tell me that it's mine to keep", "are present in any form", "tell me about all your wins, tiny or huge", "stay back in the car with me to listen to music and linger just a little bit longer (KDA and Charli XCX are always a welcomed presence)", "reply to my private IG to tell me not to do stupid shit", "check in on me", "are conscious of me", "encourage my bad habit of getting impulsive tattoos", "screen my nudes", "let your full body weight rest on me when we're leaning against each other", "let me take pictures of you (you're beautiful)", "show me your Spotify Wrapped", "are loving life", "hold the door open for me", "walk me home", "always seem to have everything we need in your bag", "respond to my chaos with your own chaos", "read all my cry for help IG posts", "just know how to sense when I am grieving, and give me the space I need to mourn", "make me commit to plans months in the future so you know I don't disappear", "send me things that make you think of me", "tag me and say 'us'", "mansplain your favourite Kanye album to me", "let me rest my head on your shoulder", "remember me", "carry the world in your hands", "intertwine your fingers with mine", "offer to take out the trash for me", "go to sleep with me", "listen to me as I talk senseless", "call me new names", "wake me up with something mundane", "succeed", "smile", "create new things with me", "never say no to accompanying me to Daniel's Donuts", "support my dreams, though they may not be clear right now", "tell me I'm doing good, that I'm good enough as I am", "help me finish the food on my plate", "dance with me in your room", "like my Letterboxd reviews", "watch my favourite movies with me at the drive-in cinema", "listen to my useless ranting", "validate my feelings", "let me drop off food at your hosue", "run up to hug me even if we've just seen each other hours ago", "come to my art shows to support me", "tell me about your day"];


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});


$(document).click(function (e) {

  if (e.button == 0) {

    $("<p>" + when[c] + "</p>").hide().prependTo(".when-you").fadeIn(1000);

    c++;

    if (c == when.length) {

      $("<p>love me too </p>").hide().prependTo(".when-you").fadeIn(1000);

      $("body").css('background', 'darkolivegreen');
      $(".g p").css('color', 'lavender');

      $(document).unbind("click");

    }

  }
});