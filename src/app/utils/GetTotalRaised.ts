// utils/fetchTotalRaised.ts
import axios from 'axios';
import cheerio from 'cheerio';

export const fetchTotalRaised = async (): Promise<string | null> => {
  try {
    const response = await axios.get('https://www.launchgood.com/v4/campaign/join_us_in_building_our_central_wigan_mosque');
    const html = response.data;
    const $ = cheerio.load(html);

    // Adjust the selector to target the element that contains the total money raised
    const totalRaised = $('div:contains("£")').first().text();
    console.log('Total raised:', totalRaised);
    return totalRaised;
  } catch (error) {
    console.error('Error fetching total raised:', error);
    return null;
  }
};
