import axios from 'axios';

export const getPerson = id =>
  axios.get(`https://swapi.dev/api/people/${id}/`);

export const getPeople = async () => {

    const people = await axios.get('https://swapi.dev/api/people/');
    
    let totalPages = 0;
    const num = parseInt(people.data['count']);

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
        const response = await axios.get(`http://swapi.dev/api/people/?page=${currentPage}`);

        response.data.results.forEach(e => allData.push(e));
        morePagesAvailable = currentPage < totalPages;
    }
       
    return { data: allData };
}
