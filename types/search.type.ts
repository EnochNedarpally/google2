export interface Search {
  items: SearchItem[];
  searchInformation:SearchInfo
}
export interface SearchItem {
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  link: string;
  snippet: string;
  title: string;
}

export interface SearchInfo{
    formattedSearchTime: string,
    formattedTotalResults: string
    searchTime: number
  }