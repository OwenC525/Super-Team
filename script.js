const teamMembers = [
    {
      name: 'Lebron James',
      img: 'images/lebron.png',
      sport: 'Basketball',
      skills: ['Spped', 'Agility', 'Shooting'],
      strengths: 'Work Ethic',
      weaknesses: 'Shooting',
      biography:
        'Akron, Ohio, U.S. Individually, James is the all-time leading scorer in NBA history and ranks fourth in career assists, has won four Most Valuable Player (MVP) Awards, four Finals MVP Awards, three All-Star Game MVP Awards, and was named the inaugural NBA Cup MVP.'
    },
    {
        name: 'Bronny James',
        img: 'images/bronnyjames.png',
        sport: 'Basketball',
        skills: ['Athleticism', 'Shooting', 'Dribbling'],
        strengths: 'Defensive Ability',
        weaknesses: 'Shooting Ability',
        biography:
          "Bronny James played college basketball for the USC Trojans. A consensus four-star recruit, James was named a McDonald's All-American as a senior in high school in 2023. He is the eldest child of professional basketball player LeBron James."
      },
      {
        name: 'Bryce James',
        img: 'images/brycejames.jpeg',
        sport: 'Basketball',
        skills: ['Shooting', 'Guarding', 'Dribbling'],
        strengths: 'Shooting Ability',
        weaknesses: 'Passing',
        biography:
          'Bryce James is the second child of National Basketball Association (NBA) player LeBron James and the younger brother of college basketball player Bronny James. James primarily plays the shooting guard position. As of March 2024 he is 6 feet 6 inches (1.98 m) tall and weighs 180 pounds (82 kg). Cleveland, Ohio, U.S.'
      },
      {
        name: 'Lionel Messi',
        img: 'images/messi.jpg',
        sport: 'Soccer',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading Ability',
        biography:
          "Born in Rosario, Argentina, in 1987, Lionel Messi is widely regarded as one of the greatest football players of all time, and his illustrious career proves why. The Argentinean footballer, who holds a record eight Ballon d'Or awards, has displayed his talent early on and has always been destined for greatness."
      },
      {
        name: 'Cristiano Ronaldo',
        img: 'images/ronaldo.webp',
        sport: 'Soccer',
        skills: ['Dribbling', 'Spped', 'Shooting'],
        strengths: 'Chop',
        weaknesses: 'Defensive Ability',
        biography:
          "Cristiano Ronaldo (born February 5, 1985, Funchal, Madeira, Portugal) is a Portuguese football (soccer) forward who is one of the greatest players of his generation. The winner of five Ballon d'Or awards, he is among the sport's top goal scorers."
      },
      {
        name: 'Neymar',
        img: 'images/neymar.webp',
        sport: 'Soccer',
        skills: ['Dribbling', 'Passing', 'Shooting'],
        strengths: 'Ball control',
        weaknesses: 'Physical',
        biography:
          'Neymar, was born on February 5, 1992, in Mogi das Cruzes, a city near São Paulo. He grew up in a small house in a working-class neighborhood with his father, mother, and younger sister, Rafaella. Neymar started playing football after drawing inspiration from his father who was a professional footballer himself.'
      },
      {
        name: 'Alex Pereira',
        img: 'images/pereira.png',
        sport: 'MMA',
        skills: ['Striking', 'Speed', 'Agility'],
        strengths: 'Powerful Striking Ability',
        weaknesses: 'Grappling',
        biography:
          'Alex Sandro Silva Pereira (born 7 July 1987) is a Brazilian professional mixed martial artist and former kickboxer. He currently competes in the Light Heavyweight division in the Ultimate Fighting Championship (UFC), where he is the current UFC Light Heavyweight Champion and a former UFC Middleweight Champion.'
      },
      {
        name: 'Israel Adesanya',
        img: 'images/izzy.png',
        sport: 'MMA',
        skills: ['Striking', 'Agility', 'Reach'],
        strengths: 'Counter Striking',
        weaknesses: 'Defense',
        biography:
          'Adesanya was born in Lagos, Nigeria, the eldest of five children. His father, Oluwafemi, is an accountant and his mother, Taiwo, is a nurse. Adesanya attended Chrisland School, Opebi, and enrolled in its Taekwondo after-school club until he was removed by his mother due to an injury.'
      },
      {
        name: 'Sean Strickland',
        img: 'images/strickland.png',
        sport: 'MMA',
        skills: ['Striking', 'Resilience', 'Defense'],
        strengths: 'Technical Skills',
        weaknesses: 'Grappling',
        biography:
          'Sean Strickland (born February 27, 1991) is an American professional mixed martial artist. He currently competes in the Middleweight division of Ultimate Fighting Championship (UFC), where he is the former UFC Middleweight Champion.'
      },
      {
        name: 'Daniel Cormier',
        img: 'images/danielcormier.png',
        sport: 'MMA',
        skills: ['Grappling', 'Strength', 'Wrestling'],
        strengths: 'Offensiveness',
        weaknesses: 'Striking',
        biography:
          'Daniel Cormier, a relatively short Heavyweight, has met success against bigger opponents in freestyle wrestling and later in Mixed Martial Arts. Cormier was raised in Lafayette, Louisiana where he was raised by his mother and stepfather. Cormier became a pro wrestling fan by age 10, which he watched on TV often.'
      },
      {
        name: 'Max Holloway',
        img: 'images/maxholloway.png',
        sport: 'MMA',
        skills: ['Striking', 'Speed', 'Agility'],
        strengths: 'Distance Managing',
        weaknesses: 'Defense',
        biography:
          'He is the former UFC featherweight champion and holds a professional MMA record of 25 wins and 7 losses. He is currently ranked 14th in the UFC pound-for-pound rankings and No. 1 in the UFC featherweight rankings. Holloway is also a recipient of a brown belt in Brazilian Jiu-Jitsu.'
      },
      {
        name: 'Jon Jones',
        img: 'images/jonjones.png',
        sport: 'MMA',
        skills: ['Striking', 'Grappling', 'Distance Managing'],
        strengths: 'Physical Strength',
        weaknesses: 'Defense',
        biography:
          'Jon Jones was born on July 19, 1987 in Rochester, New York, USA. He is an actor, known for UFC 285 Embedded: Vlog Series (2023), New York Mixed Martial Arts (2011) and UFC 200 Greatest Fighters of All Time (2016). He is married to Jessie Moses. They have three children.'
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

       // Add padding
       card.style.padding = '15px 10px';
  
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