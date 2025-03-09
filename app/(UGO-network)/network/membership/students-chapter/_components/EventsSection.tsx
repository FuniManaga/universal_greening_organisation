'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type Event = {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  max_participants: number;
  is_virtual: boolean;
  visibility: 'public' | 'private' | 'members_only';
  event_participants: Array<{
    id: string;
    status: 'registered' | 'attended' | 'cancelled';
  }>;
};

export function EventsSection({ 
  events = [], 
  userId,
  initialParticipations = []
}: {
  events: Event[];
  userId: string;
  initialParticipations: any[];
}) {
  const [participations, setParticipations] = useState(initialParticipations);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const supabase = createClientComponentClient();

  // Filter events based on selected date
  const filteredEvents = events.filter(event => {
    if (!selectedDate) return true;
    const eventDate = new Date(event.start_time);
    return (
      eventDate.getDate() === selectedDate.getDate() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  const handleRegister = async (eventId: string) => {
    const { data, error } = await supabase
      .from('event_participants')
      .insert({
        event_id: eventId,
        user_id: userId,
        status: 'registered'
      })
      .select()
      .single();

    if (!error && data) {
      setParticipations([...participations, data]);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
        <div className="w-full sm:w-auto">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            isClearable
            placeholderText="Filter by date"
            className="w-full sm:w-48 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            wrapperClassName="w-full sm:w-auto"
            customInput={
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            }
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border rounded-xl p-6 hover:shadow-lg transition-all duration-300 bg-white border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <CalendarIcon className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{format(new Date(event.start_time), 'MMM d, yyyy')}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    <span>
                      {format(new Date(event.start_time), 'h:mm a')} - 
                      {format(new Date(event.end_time), 'h:mm a')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{event.is_virtual ? 'Virtual Event' : event.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <span>
                      {event.event_participants.length} / 
                      {event.max_participants || '∞'} participants
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto self-end mt-4 sm:mt-0">
                {participations.find(p => p?.event_id === event.id) ? (
                  <button 
                    className="w-full sm:w-auto bg-green-50 text-green-700 px-6 py-2.5 rounded-lg text-sm font-medium
                             flex items-center justify-center gap-2 cursor-not-allowed"
                    disabled
                  >
                    <span className="text-green-600">✓</span> Registered
                  </button>
                ) : (
                  <button 
                    onClick={() => handleRegister(event.id)}
                    className="w-full sm:w-auto bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium
                             hover:bg-green-700 transition-all duration-300 flex items-center justify-center
                             shadow-sm hover:shadow-md"
                  >
                    Register Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <div className="text-gray-500 text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-lg">
              {selectedDate 
                ? "No events scheduled for this date."
                : "No upcoming events at the moment."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
