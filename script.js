const teamMembers = [
    {
      name: 'Lebron James',
      img: 'images/lebron.png',
      sport: 'Basketball',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      strengths: 'Ball control',
      weaknesses: 'Heading Ability',
      biography:
        'Lionel Messi is considered one of the greatest football players of all time...'
    },
    {
        name: 'Bronny James',
        img: 'images/bronnyjames.png',
        sport: 'Basketball',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Bryce James',
        img: 'images/brycejames.jpeg',
        sport: 'Basketball',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Lionel Messi',
        img: 'images/messi.jpg',
        sport: 'Soccer',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Cristiano Ronaldo',
        img: 'images/ronaldo.webp',
        sport: 'Soccer',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Neymar',
        img: 'images/neymar.webp',
        sport: 'Soccer',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Alex Pereira',
        img: 'images/pereira.png',
        sport: 'MMA',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Israel Adesanya',
        img: 'images/izzy.png',
        sport: 'MMA',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'Sean Strickland',
        img: 'images/strickland.png',
        sport: 'MMA',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'x',
        img: 'images/',
        sport: 'Football',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'x',
        img: 'images/',
        sport: 'Football',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
      {
        name: 'x',
        img: 'images/',
        sport: 'Football',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          'Lionel Messi is considered one of the greatest football players of all time...'
      },
  ]
  
  function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
  
    teamMembers.forEach(member => {
      const card = document.createElement('div')
      card.classList.add('col-md-4')
  
      //styling card based on sport:
      let backgroundColor
  
      switch (member.sport.toLowerCase()) {
        case 'soccer':
          backgroundColor = 'blue' // Yellow for forwards
          break
        case 'basketball':
          backgroundColor = 'red' // Green for midfielders
          break
        case 'mma':
          backgroundColor = 'black' // Blue for defenders
          break
        case 'football':
          backgroundColor = 'green' // Red for goalkeepers
          break
        default:
          backgroundColor = '#6c757d' // Gray for other positions
      }
      card.style.backgroundColor = backgroundColor
  
      //Create a list of Skills with <li> tags
      const skillsList = member.skills
        .map(skill => `<li> ${skill} </li>`).join('')
  
      card.innerHTML = `
            <div class = "card h-100">
                <div class = "card-header"> ${member.name}</div>
                  <div class = "card-body">
                    <img style="width: 200px" src=${member.img}>
                    <p><strong>Sport:</strong> ${member.sport}</p>
                    <p><strong>Skills:</strong> 
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
          `
  
      teamCardsContainer.appendChild(card)
    })
  }
  
  window.onload = generateTeamCards()