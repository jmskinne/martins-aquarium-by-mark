const fishCollection = [
    {
        name:"Dory",
        species:"Blue Tang",
        diet:"Plankton",
        length:"4 inches",
        location:"Great Barrier Reef",
        image:"./pictures/bluetang.jpg"

    },
    {
        name:"Bruce",
        species:"Great White Shark",
        diet:"skiers",
        length:"25 feet",
        location:"Amity Island",
        image:"./pictures/jaws.jpg"

    },
    {
        name:"Flounder",
        species:"Flounder",
        diet:"Algea",
        length:"1 foot",
        location:"Under the Sea",
        image:"./pictures/flounder.jpg"

    },
]

export const useFish = () => {
    return fishCollection.slice()
}