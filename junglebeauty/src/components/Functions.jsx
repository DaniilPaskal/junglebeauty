export function GetCatURL(cat) {
    const { name, type, date } = cat;
    var identifier;
  
    if (type == 'kitten') {
      identifier = date + '-' + name + '-collar';
    } else {
      identifier = type + '-' + name;
    }
  
    return identifier;
  }

export function GetCatFilepath(cat) {
  const { name, type, date } = cat;
  var filepath = `/assets/${type}s`;

  if (type === 'kitten') {
    filepath += `/${date}`;
  }
  filepath += `/${name}/`;

  return filepath;
}

export function GetCatDescription(cat) {
  const { name, type, colour, sex, adj, date, cattery, location } = cat;
  var description;

  if (type == 'kitten') {
    description = ConvertDate(date);
  } else {
    if (sex == 'male') {
        description = colour + ' ' + adj + ' Bengal';
    } else {
        description = cattery + ' ' + name + ' ' + ConvertDate(date);
        if (location) {
            description += ', ' + location;
        }
    }
  }

  description = description.charAt(0).toUpperCase() + description.slice(1);

  return description;
}

export function ConvertDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = new Date(date).toLocaleDateString('en-us', options);

  return dateString;
}

export function GetReleaseDate(date) {
  const daysToRelease = 84;
  var releaseDate = new Date(date);

  releaseDate.setDate(releaseDate.getDate() + daysToRelease);

  return releaseDate;
}

export function GetAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export function fileExists(filepath) {
  try {
    return require({filepath});
  } catch (err) {
    return false;
  }
}

/* export function countImageFiles(cat) {
  const fs = require('fs');
  const { name, type, date } = cat;
  var filepath = `/assets/${type}s`

  if (type === 'kitten') {
    filepath += `/${date}`;
  }

  fs.readdir(filepath, (err, files));
}*/