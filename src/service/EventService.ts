import type { Event } from '../model/Event';
import * as repo from '../repository/EventRepository';

export function getEventByCategory(category: string): Promise<Event[]> {
    return repo.getEventByCategory(category)
}

export function getAllEvents(): Promise<Event[]> {
    return repo.getAllEvents()
}

export function getEventById(id: number): Promise<Event | undefined> {
    return repo.getEventById(id);
}

export function addEvent(event: Event): Promise<Event> {
    return repo.addEvent(event);
}