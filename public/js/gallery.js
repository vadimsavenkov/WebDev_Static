const imgList = [
  {
    id: 164,
    title: "Italy",
    url: 'https://unsplash.com/photos/dBtWLliLt5k',
    travel: 'Europe'
  },
  {
    id: 174,
    title: "Phuket,Thailand",
    url: 'https://unsplash.com/photos/n7DY58YFg9E',
    travel: 'Asia Pacific'
  },
  {
    id: 482,
    title: 'Horseshoe bend, Arizona',
    url: 'https://unsplash.com/photos/14a9-EZ_vYw',
    travel: 'North America'
  },
  {
    id: 645,
    title:'Machu-Pichu, Peru',
    url: 'https://unsplash.com/photos/GFOnOrv-t6w',
    travel: 'South America'
  },
  {
    id: 525,
    title:'Tamnougalt, morocco',
    url: 'https://unsplash.com/photos/9-5-WYEBDz0',
    travel: 'Africa'
  },
  {
    id: 643,
    title:'Twelve apostles',
    url: 'https://unsplash.com/photos/hM0jUUU5eDg',
    travel: 'Australia'
  }
]
    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgList.forEach(function(item){
      imgTemplate += 
        `<figure>
        <a href="${item.id}">
          <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
        </a>
        <figcaption>Hello ${item.title}!</figcaption>
        </figure>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;



  
  // let travelImgs = ''; 
  // const gallery = document.querySelector('.gallery'); 
  // destinationsObj.forEach(function(item){
  //    console.log(item);  
  //    travelImgs += `<a href="${item.url}"><h2>${item.travel}</h2><img src="https://picsum.photos/id/${item.id}/250/250" alt="${item.title}"></a>`;
  //    });
  //  gallery.innerHTML = travelImgs;