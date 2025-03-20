const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Menyediakan folder public untuk file statis

// Halaman Utama
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Montserrat', sans-serif; }
                .video-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }
            </style>
        </head>
        <body class="flex flex-col items-center justify-center min-h-screen text-white relative">
            <!-- Video Background -->
            <video autoplay loop muted playsinline class="video-bg">
                <source src="/assets/asset.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

                <h1 class="text-3xl font-bold mb-4">Hello, World!</h1>
                <a href="/form" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Go to Form</a>
        </body>
        </html>
    `);
});

// Halaman Form
app.get('/form', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Input</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Montserrat', sans-serif; }
                .video-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }
                .card {
                    background: rgba(45, 132, 172, 0.8);
                    padding: 15px;
                    border-radius: 20px;
                    text-align: center;
                    color: black;
                }
            </style>
        </head>
        <body class="flex flex-col items-center justify-center min-h-screen text-gray-900 relative">
            <video autoplay loop muted playsinline class="video-bg">
                <source src="/assets/asset.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="card w-80 shadow-lg">
                <h1 class="text-3xl font-bold mb-4 text-white">Form Input</h1>
                <form action="/submit" method="post">
                    <label class="block mb-2 text-white">Nama:
                        <input type="text" name="name" required class="w-full p-2 border rounded border-gray-300 rounded">
                    </label>
                    <label class="block mb-2 text-white">Email:
                        <input type="email" name="email" required class="w-full p-2 border border-gray-300 rounded">
                    </label>
                    <button type="submit" class="w-40 bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Handle Form Submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(`Received: ${name}, ${email}`);
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Data Diterima</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Montserrat', sans-serif; }
                .video-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }
                .card {
                    background:rgba(45, 132, 172, 0.8);
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    color: black;
                }
            </style>
        </head>
        <body class="flex flex-col items-center justify-center min-h-screen text-gray-900 relative">
            <video autoplay loop muted playsinline class="video-bg">
                <source src="/assets/asset.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <div class="card w-80 shadow-lg">
                <h1 class="text-3xl font-bold mb-4 text-white">Data Diterima</h1>
                <p class="text-lg text-white">Nama: <strong>${name}</strong></p>
                <p class="text-lg  text-white mb-4">Email: <strong>${email}</strong></p>
                <a href="/" class="mt-6 px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">Kembali</a>
            </div>
        </body>
        </html>
    `);
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
