import mockData from '../data/mockResponses.json';

// Helper function to simulate network delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Lấy toàn bộ dữ liệu cần thiết cho Landing Page (BFF Pattern)
 */
export const getLandingPageData = async () => {
  await delay();
  return mockData;
};
