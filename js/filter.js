words = [
"fuck","fucker","fucking","fucked","fucks",
"blowjob","footjob","cum",
"motherfucker",
"slut","whore","bitch",
"ass","asses","asshole","assholes","butthole",
"cunt","cunts","pussy","pussies",
"dick","cock","dicks","cocks","dicking",
"boobs","boobies","tits","tities",'suck','stupid','pimp','dumb','homo',
     'slut',
     'damn',
     'ass',
     'rape',
     'poop',
     'cock',
     'lol',
     'crap',
     'sex',
     'nazi',
     'neo-nazi',
     'fuck',
     'bitch',
     'pussy',
     'penis',
     'vagina',
     'whore',
    'shit',
    'nigger',
     'nigga',
     'cocksucker',
     'assrape',
     'motherfucker',
     'wanker',
     'cunt',
     'faggot',
     'fags',
     'asshole',
    'piss','cum']

function filter(){
  text = document.getElementById("textF").innerHTML;
  text = text.toLowerCase();
  
  var al = words.length;
  
  for (var i = 0; i < al; i++){
    if(text.includes(words[i])){
      text = text.replace(words[i], "####");
    }
  }
  
  document.getElementById("textF").value = text
}
