# Automated Market Purchase Script SMMO

Since I don't want to waste time purchasing items for flipping the market and I wanted to test my programming skills, I created this script to automate the buying process on a specified market page from [SimpleMMO](https://web.simple-mmo.com) web version. 
It sequentially initiates purchase actions for every listed item. <br><br> For the future, this script might be outdated because of the change in the DOM structure from the HTML of the SMMO Website.

## Table of Contents
- [Features](#features)
- [Usage](#usage)
- [Important Notes](#important-notes)

## Features

- **Automated Purchasing:** The script automatically clicks on each "Buy" button, triggering the purchase pop-up confirmation for each item.
- **Confirmation Click:** Post opening the purchase pop-up, it locates and clicks the confirm button to finalize the purchase.

## Usage

To use this script:

1. Navigate to the market page where you wish to perform the automated buying.
2. Open the browser's developer console (usually accessible by pressing `F12` or `Ctrl+Shift+I`, or `Cmd+Option+I` on Mac).
3. Paste the entire script into the console.
4. Press `Enter` to execute the script.

The script will begin operating immediately, processing one item at a time. If the confirmation button within the purchase pop-up confirmation cannot be found, it will log an error message and continue with the next item.

## Important Notes

# **USE AT YOUR OWN RISK**. <br><br>I don't have any responsibility for any consequences that arise from using this script. It is intended for educational purposes only 🏫

## Demo
[auto buy demo.webm](https://github.com/yasirrhaq/AutomatedMarketPurchaseSMMO/assets/41731559/4e4be141-2ba4-40ae-a135-8810a5d720ce)
