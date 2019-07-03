# spanish_frequency_list_helpers

#### This is a simple module that reads a frequency list of Spanish words (about 500k)


#### Functions exposed

#### fuzzyMatch

- Returns the top 100 words for a fuzzy matched query
- Arguments: Object: { query: String }

#### getTopNWords

-  Returns the top n words within a range
-  * return object { index, word, frequency }
- Arguments: Object { from: Number, to: Number }
