# SkySightForecast Weather App

## Introduction
The SkySightForecast is a simple, user-friendly web application that provides real-time weather updates for select locations. Users can choose from a predefined list of cities to get current weather conditions, including temperature, sky conditions, and wind speed.

## Features
- Select a city from the dropdown menu to display weather information.
- Displays temperature in Fahrenheit.
- Shows current sky conditions.
- Reports the wind speed in miles per hour.

## How to Use
1. Open the application in a web browser.
2. Use the dropdown menu to select a city.
3. View the weather information presented for the chosen city.

## Setup
To run this project locally, follow these steps:
1. Clone the repository to your local machine.
2. Ensure you have a modern web browser installed.
3. Open the `index.html` file in your browser to start the application.

## Configuration
To configure the weather locations, modify the `switch` statement in `scriptweather.js` with the desired latitude and longitude coordinates.

## API Reference
This application uses the OpenWeatherMap API. You must use your own API key to fetch the weather data. Replace the `appid` parameter in the API endpoint within `scriptweather.js` with your valid API key.

## Customization
- To change the displayed weather information, edit the `loadweathermode` function in `scriptweather.js`.
- Style customizations can be done in the `style.css` file.






