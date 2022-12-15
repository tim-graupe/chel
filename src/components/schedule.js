// https://statsapi.web.nhl.com/api/v1/schedule
// Notes
// Without any flags or modifiers this endpoint will NOT return pre-season games that occur on the current day. In order for pre-season games to show up the date must be specified as show below in the Modifiers section

// Modifiers
// ?expand=schedule.broadcasts Shows the broadcasts of the game
// ?expand=schedule.linescore Linescore for completed games
// ?expand=schedule.ticket Provides the different places to buy tickets for the upcoming games
// ?teamId=30,17 Limit results to a specific team(s). Team ids can be found through the teams endpoint
// ?date=2018-01-09 Single defined date for the search
// ?startDate=2018-01-09 Start date for the search
// ?endDate=2018-01-12 End date for the search
// ?season=20172018 Returns all games from specified season
// ?gameType=R Restricts results to only regular season games. Can be set to any value from Game Types endpoint
// GET https://statsapi.web.nhl.com/api/v1/schedule?teamId=30 Returns Minnesota Wild games for the current day.