export const fetchData = (resortKey) => {

  return dispatch => {
    fetch(`http://api.weatherunlocked.com/api/resortforecast/${resortKey.key}?app_id=d637cec6&app_key=ecc28c74339618877a38b8527cea5290`)
    .then(response => {
      if(response.status!==200){
        console.log('fail');
      }
      return response;
    })
    .then(response => response.json())
    .then(parsedResponse => console.log('pass', parsedResponse))
    .catch(error => console.log('ERROR', error))
  }
}


// export const moviesFetchData = (url) => {
//   return dispatch => {
//     fetch(url)
//       .then(response => response.json())
//       .then(object => object.results)
//       .then(array => array.map(movie => Object.assign(movie, {fav: null, movie_id: movie.id})))
//       .then(resultsArray => dispatch(moviesFetchDataSuccess(resultsArray)))
//       .catch(error => console.log('ERROR', error))
//   }
// }






  // componentDidMount(){
  //   fetch('http://api.weatherunlocked.com/api/resortforecast/54883438?app_id=d637cec6&app_key=ecc28c74339618877a38b8527cea5290')
  //     .then(response => response.json());
  //     .then(parsedResponse => {
  //       this.setState({snowdata: object}));
  // }
