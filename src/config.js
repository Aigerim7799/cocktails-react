const API = 'https://www.thecocktaildb.com/api/json/v1/1/'
export const GET_ALL_COCKTAILS = API +"filter.php?c=Cocktail" 
export const GET_COCKTAILS_BY_NAME = API + 'search.php?s=' // + some name
export const GET_DETAIL_BY_ID = API+ "lookup.php?i=" //+ some ID

