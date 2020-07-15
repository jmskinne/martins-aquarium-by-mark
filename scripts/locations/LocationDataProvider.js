const locationCollection = [
    {
        name:"Great Barrier Reef",
        locationurl:"https://greatbarrierreef.org/",
        description:"One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.",
        image: "./pictures/great-barrier.jpg"
    },
    {
        name:"Amity Island",
        locationurl:"https://jaws.fandom.com/wiki/Amity_Island",
        description:"Amity Island is a fictional island located off the coast of New England, and is the main setting of the Jaws franchise. The island is known for its clean air, beautiful white sand beaches, and many of its local fishermen. The island is also infamous for its series of horrifying and fatal shark attacks.",
        image:"./pictures/amityisland.jpg"
    },
    {
        name:"Under the Sea",
        locationurl:"https://en.wikipedia.org/wiki/Under_the_Sea",
        description:"The Little Mermaid is a 1989 American animated musical romantic fantasy film produced by Walt Disney Feature Animation and Walt Disney Pictures. The 28th Disney animated feature film and the first film in The Little Mermaid trilogy and the second in the chronology of the story running through the series, it is loosely based on the 1837 Danish fairy tale of the same name by Hans Christian Andersen.",
        image:"./pictures/underthesea.jpg"
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}