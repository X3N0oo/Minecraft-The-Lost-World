const story={
return:{chapter:'01 / THE RETURN',title:'The world remembers.',text:[
'It has been years since Alex last entered this Minecraft world. He remembers building houses, exploring caves and spending hours discovering new places. After finding an old world save, he decides to return.',
'The world loads normally, but something feels wrong. The village where Alex used to trade is completely abandoned. Doors are open, crops have stopped growing and the streets are empty.',
'As Alex approaches his old house, he finds a sign that was never there before: <strong>“You should not have returned.”</strong>',
'A strange sound comes from the nearby forest. Someone is watching. Alex realizes that discovering what happened could be dangerous, but he refuses to leave without answers.'
],prompt:'What should Alex do next?',choices:[['Explore the abandoned village','village'],['Leave the world while you can','escape']]},
village:{chapter:'02 / THE VILLAGE',title:'Not a soul in sight.',text:[
'Alex searches the empty village for any signs of life. The houses are overgrown and belongings have been left behind as if everyone disappeared without warning.',
'Inside the blacksmith’s workshop, he finds a damaged journal. Only one message remains: <strong>“The Guardian sealed the chamber. We thought it would save us.”</strong>',
'Footsteps echo across the roof. A hooded figure, the Scout, watches Alex from above. When Alex calls out, the Scout disappears into the forest.',
'Two paths lie ahead. One leads toward an abandoned mine where machines still hum underground. The other leads to a stone tower overlooking the village.'
],prompt:'Which clue should Alex follow?',choices:[['Investigate the forgotten mines','mines'],['Follow the Scout to the tower','tower']]},
mines:{chapter:'03 / THE MINES',title:'Beneath the surface.',text:[
'Alex enters the abandoned mine with a torch and a few supplies. Broken rails stretch into the dark. Strange redstone machines line the walls.',
'Deep underground, he discovers an old laboratory. A damaged book reveals that the villagers once experimented with a powerful energy source beneath the world. They hoped to improve their lives, but the experiment became unstable.',
'The Guardian warned them to stop. They ignored him.',
'Suddenly machinery activates. The Engineer, one of the Guardian’s assistants, has triggered traps to block the way. A voice echoes: <strong>“Turn back. You don’t understand what you are about to release.”</strong>',
'Alex realizes the Engineer may be protecting him from something dangerous.'
],prompt:'Continue or retreat?',choices:[['Continue toward the sealed chamber','confrontation'],['Retreat before it is too late','escape']]},
tower:{chapter:'03 / THE TOWER',title:'The other side of the story.',text:[
'Alex follows the Scout to a stone tower overlooking the village. Inside are maps and records of what happened years ago.',
'The villagers found a powerful energy source beneath the world. Their experiments damaged the environment and threatened everyone’s safety. The Guardian sealed the chamber and ordered everyone to evacuate.',
'Alex meets the Healer, another of the Guardian’s assistants, who cares for injured creatures. Unlike the Scout and Engineer, the Healer wants to reason with him.',
'<strong>“The Guardian isn’t your enemy,”</strong> the Healer says. <strong>“He’s trying to prevent another disaster.”</strong>',
'Alex begins to wonder whether uncovering the truth is worth the danger. The Healer offers to take him to the Guardian.'
],prompt:'Will Alex listen?',choices:[['Meet the Guardian','confrontation'],['Walk away with the warning','escape']]},
confrontation:{chapter:'04 / THE CONFRONTATION',title:'A truth worth risking?',text:[
'Alex enters a chamber beneath the Guardian’s tower. The Guardian stands beside a sealed portal surrounded by glowing redstone.',
'<strong>Alex:</strong> “Why are you keeping everyone away from this place?”<br><strong>Guardian:</strong> “Because some secrets are better left buried.”',
'<strong>Alex:</strong> “I came back to find out what happened. Everyone is gone.”<br><strong>Guardian:</strong> “The villagers tried to control something they didn’t understand. Their experiments nearly destroyed this world.”',
'<strong>Alex:</strong> “Then why didn’t you tell anyone the truth?”<br><strong>Guardian:</strong> “Because I was afraid someone would repeat their mistakes.”',
'Alex realizes the Guardian is not simply an enemy. He is afraid of losing everything again.',
'<strong>Guardian:</strong> “Once you make your decision, there may be no turning back.”'
],prompt:'How should Alex respond?',choices:[['“I deserve to know what happened.”','truth'],['“I’m not here to cause trouble. I just want answers.”','trust']]},
truth:{chapter:'ENDING 01 / THE TRUTH',title:'The price of knowing.',ending:'Risky ending',text:[
'Alex refuses to leave without discovering everything. Ignoring the Guardian’s warning, he activates the ancient redstone mechanism. The sealed chamber begins to open.',
'Inside, he finds records revealing that the villagers evacuated when their experiments destabilized the world. The Guardian remained behind to protect what was left.',
'Alex finally understands why everyone disappeared. But the protective system fails. The ground shakes and the energy source becomes unstable again.',
'Alex and the Guardian escape before the chamber collapses, but damage spreads through the surrounding area. Alex realizes his need for answers endangered the world he hoped to save.',
'<strong>“You found the answers you wanted, but not the ending you expected.”</strong>'
],choices:[['Play again','return'],['Share this ending','share:truth'],['Leave feedback','feedback']]},
trust:{chapter:'ENDING 02 / TRUST',title:'A world worth rebuilding.',ending:'Hopeful ending',text:[
'Instead of forcing the Guardian to reveal everything, Alex chooses to listen. The Guardian explains how the villagers escaped the unstable energy source.',
'The Scout, Engineer and Healer stayed behind to help protect the abandoned village and prevent the chamber from reopening.',
'Alex realizes that the Guardian’s actions came from fear and responsibility, not cruelty. Together, they document what happened and preserve the village’s history without reopening the chamber.',
'Over time, Alex helps repair buildings. The Scout watches for danger, the Engineer restores structures and the Healer cares for injured creatures.',
'The world may never return to what it once was, but it is no longer forgotten. <strong>“Sometimes the greatest discovery is learning when to trust someone else.”</strong>'
],choices:[['Play again','return'],['Share this ending','share:trust'],['Leave feedback','feedback']]},
escape:{chapter:'ENDING 03 / ESCAPE',title:'The unanswered question.',ending:'Unresolved ending',text:[
'Alex decides that continuing his investigation is too dangerous. He returns to his old house one final time.',
'Everything looks exactly as he remembers it, but the world feels different now. Before leaving, he notices another message outside his door: <strong>“You made the right choice.”</strong>',
'He looks toward the forest and briefly sees the Guardian watching from the shadows.',
'Alex exits without learning the complete truth. Although safe, he wonders what happened to everyone and whether he should have stayed.',
'<strong>“Sometimes walking away is the safest decision, even if the questions remain.”</strong>'
],choices:[['Try another path','return'],['Share this ending','share:escape'],['Leave feedback','feedback']]}
};
const app=document.getElementById('app');
function go(destination){
 if(destination.startsWith('share:')){let name=destination.split(':')[1];let message='I found the '+story[name].chapter+' in Minecraft: The Lost World! Which ending will you get? '+location.href.split('#')[0]+'#home';if(navigator.share)navigator.share({title:'The Lost World',text:message}).catch(()=>{});else if(navigator.clipboard)navigator.clipboard.writeText(message).then(()=>alert('Your ending was copied!')).catch(()=>prompt('Copy:',message));else prompt('Copy:',message);return}
 location.hash=destination;render()
}
function buttons(items){return items.map(([label,target])=>'<button class="choice" data-go="'+target+'"><span>'+label+'</span><i>↗</i></button>').join('')}
function home(){return '<section class="hero"><div class="pixels"></div><div class="temple"></div><div class="wrap"><div class="eyebrow">AN INTERACTIVE MYSTERY · ENGL 314</div><h1>THE <span>LOST</span><br>WORLD.</h1><h3>Every Block Holds a Secret.</h3><p>Return to the world you once called home. The villagers are gone. The buildings are empty. And someone is watching. How far will you go to discover the truth?</p><div class="buttons"><button class="btn" data-go="return">▶ START YOUR JOURNEY</button><button class="btn alt" data-go="how">HOW TO PLAY ↗</button></div></div></section><div class="wrap statline"><span>01 / EXPLORE</span><span>02 / CHOOSE</span><span>03 / UNCOVER</span><span>3 ENDINGS</span></div><section class="wrap section"><div class="eyebrow">THE EXPERIENCE</div><h2>Your choices leave a mark.</h2><p class="intro">Explore abandoned places, uncover clues and decide how Alex approaches the Guardian. Every path offers a different perspective.</p><div class="cards"><div class="card"><b>01 / DISCOVER</b><h3>The village</h3><p>Empty streets, forgotten journals and a warning left behind.</p></div><div class="card"><b>02 / INVESTIGATE</b><h3>The unknown</h3><p>Explore the mines or follow the Scout. Decide whom to trust.</p></div><div class="card"><b>03 / DECIDE</b><h3>Your ending</h3><p>Risk everything for answers, build trust or walk away.</p></div></div></section>'}
function chapter(id){let s=story[id];return '<section class="game"><div class="wrap"><div class="grid"><div><div class="chapter">'+s.chapter+'</div><h1>'+s.title+'</h1>'+(s.ending?'<span class="ending">'+s.ending+'</span>':'')+'<div class="story">'+s.text.map(p=>'<p>'+p+'</p>').join('')+'</div>'+(s.prompt?'<div class="prompt">'+s.prompt+'</div>':'<div class="prompt">Your journey has ended.</div>')+buttons(s.choices)+'</div><aside class="side"><h3>EXPEDITION LOG</h3><p>The Lost World</p><ul><li>Explorer: Alex</li><li>Mystery: The missing villagers</li><li>Guardian: Keeper of the chamber</li><li>Possible endings: Truth, Trust, Escape</li></ul><p>Some secrets are better left buried.</p><button class="btn alt" data-go="home">⌂ HOME</button></aside></div></div></section>'}
function info(type){let config={
how:['How to play.','No login or download required.','Read each chapter, choose a response at the end and follow Alex’s path. Some decisions reveal new clues, while others lead to an ending. There are three endings: The Truth, Trust and Escape. Replay to discover them all.'],
about:['About the project.','An interactive story about choices and consequences.','Minecraft: The Lost World is an unofficial, student-created mystery inspired by Minecraft exploration. Alex returns to an abandoned world and discovers that the Guardian has sealed a dangerous chamber. The Guardian is not simply evil: he wants to prevent another disaster. The story uses branching decisions, dialogue, environmental clues and three endings to explore curiosity, trust and responsibility.<br><br>Created by Alessandro Sialer · Lost World Studios · ENGL 314 Digital Storytelling · SUNY Canton.<br><br>Not affiliated with Mojang Studios or Microsoft.'],
characters:['Meet the characters.','Everyone has a reason.','Alex is a curious player returning to his abandoned world. The Guardian protects a sealed chamber, afraid the truth may cause another disaster. The Scout tracks Alex’s movements, the Engineer builds obstacles to stop him, and the Healer cares for injured creatures and tries to reason with him. Each character has a purpose beyond simply being good or bad.']
}[type];return '<section class="wrap section"><div class="eyebrow">THE LOST WORLD / FIELD GUIDE</div><h1>'+config[0]+'</h1><h3>'+config[1]+'</h3><p class="intro">'+config[2]+'</p><div class="buttons" style="margin-top:35px"><button class="btn" data-go="return">BEGIN THE STORY ↗</button></div></section>'}
function feedback(){return '<section class="wrap section"><div class="eyebrow">PLAYER REFLECTIONS</div><h1>What did you uncover?</h1><p class="intro">Tell us which ending you found and how your journey felt.</p><form id="feedback-form" class="form"><label for="ending">Which ending did you reach?</label><select id="ending" required><option value="">Choose one</option><option>The Truth</option><option>Trust</option><option>Escape</option></select><label for="rating">Rate your experience</label><select id="rating" required><option value="">Choose a rating</option><option>5 — Loved it</option><option>4 — Enjoyed it</option><option>3 — It was okay</option><option>2 — Could be better</option><option>1 — Not for me</option></select><label for="thoughts">What did you think? (optional)</label><textarea id="thoughts" maxlength="600" placeholder="Favorite moment, clue or suggestion..."></textarea><p><button class="btn" type="submit">SAVE MY FEEDBACK ↗</button></p><p id="thanks" class="fine" role="status"></p><p class="fine">Feedback is stored only in this browser in this prototype. No information is sent to a server.</p></form></section>'}
function render(){let page=decodeURIComponent(location.hash.slice(1)||'home');app.innerHTML=story[page]?chapter(page):page==='feedback'?feedback():['about','characters','how'].includes(page)?info(page):home();app.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));let form=document.getElementById('feedback-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();let answer={ending:document.getElementById('ending').value,rating:document.getElementById('rating').value,thoughts:document.getElementById('thoughts').value};let entries=JSON.parse(localStorage.getItem('lostworld-feedback')||'[]');entries.push(answer);localStorage.setItem('lostworld-feedback',JSON.stringify(entries));document.getElementById('thanks').textContent='Thank you! Your feedback was saved in this browser.';form.reset()});window.scrollTo(0,0)}
window.addEventListener('hashchange',render);render();
let oscillator,ctx;document.getElementById('sound').addEventListener('click',()=>{let b=document.getElementById('sound');if(oscillator){oscillator.stop();oscillator=null;b.textContent='♪ Sound Off';return}try{ctx=ctx||new AudioContext();oscillator=ctx.createOscillator();let gain=ctx.createGain();oscillator.type='sine';oscillator.frequency.value=68;gain.gain.value=.012;oscillator.connect(gain).connect(ctx.destination);oscillator.start();b.textContent='♫ Sound On'}catch(e){b.textContent='Sound unavailable'}});
