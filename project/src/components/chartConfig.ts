import { manHatt, broOklyn, broNx, queEns, staTenis } from "./PieSomething.vue"

export const data = {
  labels: ['Staten Island', 'Brooklyn', 'Manhattan', 'Queens', 'Bronx'],
  datasets: [
    {
      backgroundColor: ['#AC92EB', '#4FC1E8', '#A0D568', '#FFCE54', '#ED5564'],
      data: [manHatt, broOklyn, broNx, queEns, staTenis],
      //data: [10,10,10,10,10],
    }
  ]
}  
export const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 3,
}