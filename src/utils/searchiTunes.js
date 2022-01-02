import jsonp from'jsonp';

const searchiTunes = (searchItem) => new Promise((resolve, reject) => {

  jsonp(`https://itunes.apple.com/search?term=${searchItem}&entity=song`, null, (err, data) => {
        
    if(err){
      console.log(err.message)
      reject(err)
    }

    resolve(data)
  })
});

export default searchiTunes;
