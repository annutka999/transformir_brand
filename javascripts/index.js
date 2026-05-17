// let afisha = [
//   {
//     date: '1 мая, пятница',
//     header: 'Экскурсия по музею',
//     description:
//       'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох.',
//     duration: '1 час',
//     time: ['13:00', '16:00', '19:00']
//   },
//   {
//     date: '9 мая, суббота',
//     header: 'Семейная экскурсия по музею',
//     description:
//       'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох и примете участие в мастер-классе по изготовлению свечей.',
//     duration: '1 час 20 минут',
//     time: ['15:00']
//   },
//   {
//     date: '1 мая, пятница',
//     header: 'Экскурсия по музею',
//     description:
//       'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох.',
//     duration: '1 час',
//     time: ['13:00', '16:00', '19:00']
//   },
//   {
//     date: '9 мая, суббота',
//     header: 'Семейная экскурсия по музею',
//     description:
//       'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох и примете участие в мастер-классе по изготовлению свечей.',
//     duration: '1 час 20 минут',
//     time: ['15:00']
//   },
//   {
//     date: '1 мая, пятница',
//     header: 'Экскурсия по музею',
//     description:
//       'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох.',
//     duration: '1 час',
//     time: ['13:00', '16:00', '19:00']
//   },
//   {
//     date: '9 мая, суббота',
//     header: 'Семейная экскурсия по музею',
//     description:
//       'Красиво и увлекательно об истории освещения Москвы. Вы прогуляетесь по вечерним улицам столицы разных эпох и примете участие в мастер-классе по изготовлению свечей.',
//     duration: '1 час 20 минут',
//     time: ['15:00']
//   }
// ];

// createAfishaCards(afisha);

// function createAfishaCards(afisha) {
//   afisha.forEach((item) => {
//     let date = document.createElement('p');
//     date.classList.add('afishaDate');
//     date.innerText = item.date;

//     let header = document.createElement('h3');
//     header.classList.add('afishaHeader');
//     header.innerText = item.header;

//     let description = document.createElement('p');
//     description.classList.add('afishaDescription');
//     description.innerText = item.description;

//     let duration = document.createElement('p');
//     duration.classList.add('afishaDuration');
//     duration.innerText = item.duration;

//     let timeWrapper = document.createElement('div');
//     timeWrapper.classList.add('afishaTimeWrapper');

//     item.time.forEach((timeEl) => {
//       let time = document.createElement('span');
//       time.classList.add('afishaTime');
//       time.innerText = timeEl;

//       timeWrapper.appendChild(time);
//     });

//     let card = document.createElement('div');
//     card.classList.add('afishaCard');

//     card.appendChild(date);
//     card.appendChild(duration);
//     card.appendChild(header);
//     card.appendChild(description);
//     card.appendChild(timeWrapper);

//     document.querySelector('.afisha').appendChild(card);
//   });
// }
