import jsdom from 'jsdom';
import fetch from 'node-fetch';
const { JSDOM } = jsdom;


const Scraper = {};

Scraper.generateURL = (alias) => {
  //const biz = bizUrl.split('/biz/')[1];
  const url = `https://www.yelp.com/biz_photos/${alias}?tab=food`;
  return url;
}

Scraper.getHTML = async (url) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  } catch(error) {
    console.log(error);
  }
}

Scraper.getPhotos = async (html) => {
  const dom = new JSDOM(html);
  const photos = [];

  const unorderedList = dom.window.document.querySelector(".media-landing_gallery").children[0];
  for(let i = 0; i < 10; i++) {
    const listItem = unorderedList.children[i];
    const div = listItem.children[0];
    const img = div.children[0];
    photos.push(img.src);
  }
  return photos;
}

Scraper.scrapePhotos = async (name) => {
  try {
    const url = Scraper.generateURL(name);
    const html = await Scraper.getHTML(url);
    return Scraper.getPhotos(html);
  } catch (error) {
    console.log(error);
  }
}

export default Scraper;
