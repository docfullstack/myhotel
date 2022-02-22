Your task is to process the requests in requests.json one by one in the order provided.


step 2: Assign rooms to the requests

step 3: Add them to the list of reservations. //push to array, or object, or db







***The final price in a reservation is simply determined by the following formula:***
(daily_daily * num_days) + cleaning_fee

reservations.json ----> tells which rooms are already booked.
request.json------>tells me which rooms I must query for availability
rooms.json ----> tells me which rooms are currently available

new reservation = (some specific data from request) + (data from rooms.json so I can know is we have the room available.)

What does the end result of my application look like?
    - We have a function that will process a request. 
    - the request has data included regarding a reservation info like desired room and dates.
    - our solution can't book this reservation right away because I only have a limited number of room avail.
    - another reason I cant book the reservation right away is because there are previous reservations and those dates may confict. 


        if the conditions are satisfied and I do book a room then I should ooffer the cheapest room first. 
        a request for a single bed can be met with only double beds booked but not anyother dates. 

        I won't use a database until I need a database. 