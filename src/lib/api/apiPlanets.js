import axios from 'axios';

export const getPlanet = id =>
  axios.get(`https://swapi.dev/api/planets/${id}/`);

//export const getPlanets = id =>
//  axios.get(`https://swapi.dev/api/planets/`);

export const getPlanets = async () => {

    const planets = await axios.get('https://swapi.dev/api/planets/');
    //console.log(planets);
    
    let totalPages = 0;
    const num = parseInt(planets.data['count']);

    if (num % 10) {
        totalPages = parseInt(num / 10) + 1;
    } else {
        totalPages = num / 10;
    }

    let allData = [];
    let morePagesAvailable = true;
    let currentPage = 0;

    while(morePagesAvailable) {
        currentPage++;
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${currentPage}`);
        //console.log(response.data);
        response.data.results.forEach(e => allData.push(e));
        morePagesAvailable = currentPage < totalPages;
    }

    //console.log(allData);        
    return { data: allData };
}
