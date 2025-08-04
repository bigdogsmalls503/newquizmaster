Script.java
function generateName() {
  const answers = [
    document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked')
  ];

  if (answers.includes(null)) {
    alert('Please answer all the questions!');
    return;
  }

  const combo = answers.map(a => a.value).join('');

  let alienName = 'Zorblax';
  switch (combo) {
    case 'aaa': alienName = 'Kleebax the Shadow Walker'; break;
    case 'aab': alienName = 'Xarnuul of the Blue Moons'; break;
    case 'aac': alienName = 'Drizk the Void Whisperer'; break;
    case 'abb': alienName = 'Grentu from Sector 7'; break;
    case 'abc': alienName = 'Veltox the Vaporlord'; break;
    case 'bbb': alienName = 'Nyxxari of Nova Prime'; break;
    case 'bcc': alienName = 'Zenthor of the Gas Spiral'; break;
    case 'ccc': alienName = 'Blarp the Morphmaster'; break;
    default: alienName = 'Zorblax the Unknown'; break;
  }

  document.getElementById('result').innerText = `Your alien name is: ${alienName}`;
}
