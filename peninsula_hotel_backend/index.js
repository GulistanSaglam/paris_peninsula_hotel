import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/roomsuites', async (req, res) => {
    const roomsuites = await fs.readFile('./data/room_suits.json', 'utf8');
    res.json(JSON.parse(roomsuites));
});

// app.get('/roomsuites/:slug', async (req, res) => {
//     const roomsuites = await fs.readFile('./data/room_suits.json', 'utf8');
//     res.json(JSON.parse(roomsuites));
// });

// app.post('/booking', async (req, res) => {
//     const bookingData = req.body.booking;

//     if (bookingData === null || bookingData.items === null || bookingData.items === []) {
//         return res
//             .status(400)
//             .json({ message: 'Missing data.' });
//     }

//     if (
//         bookingData.customer.email === null ||
//         !bookingData.customer.email.includes('@') ||
//         bookingData.customer.name === null ||
//         bookingData.customer.name.trim() === '' ||
//         bookingData.customer.street === null ||
//         bookingData.customer.street.trim() === '' ||
//         bookingData.customer['postal-code'] === null ||
//         bookingData.customer['postal-code'].trim() === '' ||
//         bookingData.customer.city === null ||
//         bookingData.customer.city.trim() === ''
//     ) {
//         return res.status(400).json({
//             message:
//                 'Missing data: Email, name, street, postal code or city is missing.',
//         });
//     }

//     const newBooking = {
//         ...bookingData,
//         id: (Math.random() * 1000).toString(),
//     };
//     const bookings = await fs.readFile('./data/booked_room_suits.json', 'utf8');
//     const allbooking = JSON.parse(bookings);
//     allbooking.push(newBooking);
//     await fs.writeFile('./data/booked_room_suits.json', JSON.stringify(allbooking));
//     res.status(201).json({ message: 'Booking created!' });
// });

app.use((req, res) => {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
