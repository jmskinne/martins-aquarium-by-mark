const tipCollection = [
    {
        tipName:"This is where your Aquarium tips will go."
        
    },
   
    {
        tipName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut blandit felis. Etiam et vulputate ligula, non tincidunt lorem. Morbi nunc felis, tempus vitae ullamcorper vel, feugiat id neque."
        
    },
    {
        tipName:"Etiam ut viverra est. Duis eu eleifend mi. Nullam lobortis fermentum consequat. Aenean imperdiet feugiat ante a vestibulum. Null"
        
    }
]


export const useTips = () => {
    return tipCollection.slice()
}