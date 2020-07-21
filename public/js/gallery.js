const imgList = [
  {
    id: 164,
    title: "Europe",
    url: 'https://unsplash.com/photos/t2hgHV1R7_g',
    filename: 'Canal',
    place: 'Netherlands'
  },
  {
    id: 174,
    title: "Asia Pacific",
    url: 'https://unsplash.com/photos/n7DY58YFg9E',
    filename: 'Rice Terrace', 
    place: 'Indonesia'
  },
  {
    id: 482,
    title: 'North America',
    url: 'https://unsplash.com/photos/JZKGkj46bwE',
    filename: 'Mountains', 
    place: 'Canada'
  },
  {
    id: 645,
    title:'South America',
    url: 'https://unsplash.com/photos/GFOnOrv-t6w',
    filename: 'Machu-Pichu',
    place: 'Peru'
  },
  {
    id: 525,
    title:'North Africa',
    url: 'https://unsplash.com/photos/_VqyrvQi6do',
    filename: 'Desert',
    place: 'Morocco'
  },
  {
    id: 643,
    title:'Australia',
    url: 'https://unsplash.com/photos/Pa0AqyCLeec',
    filename: 'Serfing',
    place: 'New South Wales'
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
        <img src="https://picsum.photos/id/${item.id}/350" alt="${item.title}">
        </a>
        <figcaption> Most popular destinations in ${item.title}!</figcaption>
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