import type { Event } from "../model/Event";
export const events : Event [] = [ 
    {
    id:1,
    category: "Music",
    title: "Concert",
    description: "A Live Music Concert",
    location: "City Park",
    date: "2023-10-01",
    time: "18:00",
    petAllowed: true,
    organizer: "Music Events Co."
    },
 {
    id: 2,
    category: "Art",
    title: "Street Art Festival",
    description: "A vibrant street art and graffiti showcase.",
    location: "Downtown Plaza",
    date: "2023-10-10",
    time: "12:00",
    petAllowed: false,
    organizer: "Urban Colors Collective"
  },
  {
    id: 3,
    category: "Food",
    title: "Local Food Fair",
    description: "Taste dishes from local chefs and vendors.",
    location: "Riverside Market",
    date: "2023-10-15",
    time: "11:00",
    petAllowed: true,
    organizer: "City Eats Association"
  },
  {
    id: 4,
    category: "Technology",
    title: "Tech Expo 2023",
    description: "Exhibition of new technology and innovations.",
    location: "Convention Center",
    date: "2023-10-20",
    time: "09:00",
    petAllowed: false,
    organizer: "Innovate Future Group"
  },
  {
    id: 5,
    category: "Sports",
    title: "Community Fun Run",
    description: "A 5K fun run open to all ages.",
    location: "Greenfield Park",
    date: "2023-10-22",
    time: "07:00",
    petAllowed: true,
    organizer: "Run for Health Club"
  },
  {
    id: 6,
    category: "Education",
    title: "Book Reading & Workshop",
    description: "Interactive reading and creative writing for kids.",
    location: "City Library",
    date: "2023-10-25",
    time: "14:00",
    petAllowed: false,
    organizer: "Readers United"
  }
];

export function getEventByCategory(category:string):Promise<Event[]> { // อ่านแล้วรู้ทันทีว่า "ดึง event ตามหมวดหมู่"
  const filteredEvent = events.filter((event) => event.category === category);
  return Promise.resolve(filteredEvent);
}

export function getAllEvents(): Promise<Event[]>{ // อ่านแล้วรู้ทันทีว่า "ดึง event ทั้งหมด"
  return Promise.resolve(events);
}

export function getEventById(id:number): Promise<Event | undefined> {
  return Promise.resolve(events.find((event)=> event.id === id));
}

export function addEvent(newEvent: Event): Promise<Event>{
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return Promise.resolve(newEvent);
}